import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {LoginData, User} from './model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: User;
  isLogged: boolean;

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  loginUser(user: User): void {
    this.isLogged = true;
    this.loggedUser = user;
  }

  logoutUser(): void {
    this.loggedUser = null;
    this.isLogged = false;
  }

  loginPhysio(loginData: LoginData): Observable<User> {
    const url = `${this.config.apiUrl}/auth/login/physio`;
    return this.httpClient.post<User>(url, loginData, { headers: this.config.headersConfig });
  }
}
