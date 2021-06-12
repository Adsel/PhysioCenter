import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';
import {Patient} from './model';

@Injectable({
  providedIn: 'root'
})
export class PhysioService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.config.apiUrl}/patients`);
  }
}
