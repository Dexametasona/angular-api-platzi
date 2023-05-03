import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, userDTO } from '../interfaces/user.model';
import { checkTime } from '../interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  url = 'https://young-sands-07814.herokuapp.com/api/users/';


  createUser(user:userDTO){
    return this.http.post<User>(this.url, user)
  }

  getUsers(){
    return this.http.get<User[]>(this.url, {context:checkTime()})
  }

}
