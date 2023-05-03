import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.model';
import { tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class SigInService {
  url = 'https://young-sands-07814.herokuapp.com/api/auth/';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  logIn(user: { email: string; password: string }) {
    return this.http
      .post<{ access_token: string }>(`${this.url}login`, user)
      .pipe(tap((res) => this.tokenService.setToken(res.access_token)));
  }

  token() {
    return this.http.get<User>(`${this.url}profile`);
  }
}
