import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';
import {Patient, VisitPlace} from './model';

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
}
