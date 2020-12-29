import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';
import { UserService } from './user.service';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: User;
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  validCredentials: boolean = false;

  constructor(private userService: UserService, public router: Router, private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  private authenticationApiUrl = this.baseUrl +"/tution/all";
  private token: string;

  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ":" +password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    return this.http.get(this.authenticationApiUrl, { headers });
  }

  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  logout() {
    this.loggedInUser = null;
    this.userService.isAdmin = false;    
    this.userService.isStudent = false;
    this.userService.isTeacher = false;
    this.loggedIn = false;
    this.userService.isLoggedIn = false;
    this.userService.user = null;
    this.router.navigate(['home']);
  }
}
