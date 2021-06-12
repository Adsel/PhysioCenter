import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';
import {RegisterVisit, VisitPlace} from './model';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getVisitsByDate(physioId, dateStr): Observable<VisitPlace[]> {
    return this.httpClient.get<VisitPlace[]>(`${this.config.apiUrl}/visits/${physioId}/${dateStr}`);
  }

  registerVisit(physioId: number, registerData: RegisterVisit): Observable<VisitPlace> {
    return this.httpClient.post<VisitPlace>(`${this.config.apiUrl}/visit/${physioId}`, registerData, {headers: this.config.headersConfig});
  }

  cancelVisit(physioId: number, registerData: RegisterVisit): Observable<VisitPlace> {
    return this.httpClient.post<VisitPlace>(
      `${this.config.apiUrl}/visit/${physioId}/cancel`,
      registerData,
      {headers: this.config.headersConfig});
  }

  formatDate(date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
