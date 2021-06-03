import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {Observable} from 'rxjs';
import {LastMessageList, Message} from './model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getLastMessages(userId: number): Observable<LastMessageList> {
    return this.httpClient.get<LastMessageList>(`${this.config.apiUrl}/message/${userId}`);
  }

  getMessagesWith(patientId: number, physioId: number): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.config.apiUrl}/message/${physioId}/${patientId}`);
  }
}
