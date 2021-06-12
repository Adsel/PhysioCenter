import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getAllDiagnosis(): Observable<any> {
    return this.httpClient.get<any>('');
  }
}
