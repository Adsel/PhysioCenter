import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';
import {Physio} from './model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getPhysioList(): Observable<Physio[]> {
    return this.httpClient.get<Physio[]>(`${this.config.apiUrl}/physio`);
  }
}
