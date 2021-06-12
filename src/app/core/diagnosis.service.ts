import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';
import {AddDiagnosisData, AddExerciseData, Diagnosis, Exercise} from './model';

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

  getDiagnosisExercises(diagnosisId: number): Observable<Exercise[]>{
    return this.httpClient.get<Exercise[]>(`${this.config.apiUrl}/diagnosis/exercises/${diagnosisId}`);
  }

  addDiagnosis(param: AddDiagnosisData): Observable<any> {
    return this.httpClient.post<Diagnosis[]>(`${this.config.apiUrl}/diagnosis/add`, param, { headers: this.config.headersConfig });
  }

  getAllExercises(): Observable<Exercise[]> {
    return this.httpClient.get<Exercise[]>(`${this.config.apiUrl}/diagnosis/exercises`);
  }

  addExercise(exerciseData: AddExerciseData): Observable<Exercise[]> {
    return this.httpClient.post<Exercise[]>(
      `${this.config.apiUrl}/diagnosis-exercises/add`,
      exerciseData,
      { headers: this.config.headersConfig }
    );
  }
}
