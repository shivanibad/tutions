import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
/* 
    baseUrl = environment.baseUrl;

  authCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin')
    })
  };
  

  constructor(private http:HttpClient) { }

  signup(user: User, isUser: boolean):Observable<boolean> {
    console.log('in user service');
    return this.http.post<boolean>(this.baseUrl+'/users/'+isUser,user, this.authCredentials)
  } */
  
}
