import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean;

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  login(): void {
    // return this.httpClient.get<Physio>(`${this.config.apiUrl}/login`)
    this.isLogged = true;
  }

  logout(): void {
    this.isLogged = false;
  }
}
