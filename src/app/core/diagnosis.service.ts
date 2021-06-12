import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';
import {Diagnosis} from './model';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getAllPatientDiagnosis(patientId: number): Observable<Diagnosis[]> {
    return this.httpClient.get<Diagnosis[]>(`${this.config.apiUrl}/diagnosis/${patientId}`);
  }
}
