import {Inject, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG} from './config';
import {LoginData, User, UserLoginStatus} from './model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: User;
  isLogged: boolean;
  private loggedUserKey = 'logged_user_id';

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) {
    this.isLogged = this.isLoggedUser();
  }

  loginUser(user: User): void {
    // TODO: token (maybe oAuth) instead of storing user object
    localStorage.setItem(this.loggedUserKey, JSON.stringify(user));
    this.isLogged = true;
    this.loggedUser = user;
  }

  logoutUser(): void {
    this.loggedUser = null;
    this.isLogged = false;
  }

  loginPhysio(loginData: LoginData): Observable<UserLoginStatus> {
    const url = `${this.config.apiUrl}/auth/login/physio`;
    return this.httpClient.post<UserLoginStatus>(url, loginData, { headers: this.config.headersConfig });
  }

  isLoggedUser(): boolean {
    console.log('logged user', localStorage.getItem(this.loggedUserKey));
    return !!localStorage.getItem(this.loggedUserKey);
  }
}
