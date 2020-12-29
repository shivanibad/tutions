import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tution } from '../classes/tution';
import { User } from '../classes/user';


import {MatDialog} from '@angular/material/dialog';
import { SigninComponent } from '../common/users/signin/signin.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  isAdmin: boolean = false;
  isStudent: boolean = false
  isTeacher: boolean = false;
  isLoggedIn = false;
  user: User;
  
  lat: number;
  long: number;

  searchedTutions: Tution[] = [];

  registerAddress:string= "";
  registerCity:string= "";
  registerState:string= "";

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('sat@gmail.com:pwd')
    })
  };

  private subject = new Subject<User[]>();

  constructor(private http: HttpClient, public dialog: MatDialog, private router:Router) { }

  getSubject(): Subject<User[]> {
    return this.subject;
  }

  openDialog() {
    //this.dialog.open(SigninComponent);
  }

  /*  getUsers():Observable<User[]> {
     return this.http.get<User[]>(this.baseUrl + '', this.userAuthCredentials);
   } */

  getUserByEmail(email: string) {
    return this.http.get<User>(this.baseUrl + '/user/by-email/' + email, this.userAuthCredentials);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/user/' + id, this.userAuthCredentials);
  }

  getEnrolledStudentsOfATution(tutiodId: number) {
    return this.http.get<User[]>(this.baseUrl + '/user/enrolled-students/' + tutiodId, this.userAuthCredentials);
  }

  getEnrollmentRequestsForATution(tutiodId: number) {
    return this.http.get<User[]>(this.baseUrl + '/user/enrollment-request/' + tutiodId, this.userAuthCredentials);
  }

  getNonVerifiedTeachers() {
    return this.http.get<User[]>(this.baseUrl + '/user/non-verified-teachers', this.userAuthCredentials);
  }

  addUser(value: User) {
    return this.http.post<User>(this.baseUrl + '/signup', value, this.userAuthCredentials);
  }

  edituser(value: User) {
    return this.http.put<User>(this.baseUrl + '/edit', value, this.userAuthCredentials);
  }

  deleteUser(value: number) {
    return this.http.delete<User>(this.baseUrl + '/delete-user/' + value, this.userAuthCredentials);
  }

  fileUpload(file: File, email: string) {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<number>(this.baseUrl + "/uploadImage/" + email, formData);
  }

  acceptStudentEnrollment(tutionId: number, studentId: number) {
    return this.http.get<User>(this.baseUrl + '/accept-enrollment-request/' + tutionId + '/' + studentId, this.userAuthCredentials);
  }

  enroll(tutionId: number, studentId: number) {
    return this.http.get<User>(this.baseUrl + '/enroll-request/' + tutionId + '/' + studentId, this.userAuthCredentials);
  }

  acceptTeacher(email:string, tutionId:number) {
    return this.http.get<User>(this.baseUrl + '/accept-student/' + email + '/' + tutionId, this.userAuthCredentials);
  }



  getStudentCount() {
    return this.http.get<number>(this.baseUrl + '/count/student', this.userAuthCredentials);
  }  

  getNonVerifiedTeacherCount() {
    return this.http.get<number>(this.baseUrl + '/count/non-verified-teacher', this.userAuthCredentials);
  }  

  getVerifiedTeacherCount() {
    return this.http.get<number>(this.baseUrl + '/count/verified-teacher', this.userAuthCredentials);
  }


}
