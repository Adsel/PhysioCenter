import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';
import {Patient, Physio} from './model';

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

  getPatientData(userId): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.config.apiUrl}/patients/${userId}`);
  }

  updatePatientData(userId, userData): Observable<any> {
    return this.httpClient.put<any>(`${this.config.apiUrl}/patients/${userId}`, userData);
  }
}
