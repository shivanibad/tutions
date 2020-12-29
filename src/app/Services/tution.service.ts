import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tution } from '../classes/tution';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class TutionService {

  baseUrl = environment.baseUrl;
  tution:Tution;
  user:User;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('sat@gmail.com:pwd')
    })
  };

  private subject = new Subject<Tution[]>();

  constructor(private http: HttpClient) { 
  }

  getSubject(): Subject<Tution[]> {
    return this.subject;
  }

  getTutionById(id:number):Observable<Tution> {
    return this.http.get<Tution>(this.baseUrl + '/tution/by-id/'+id, this.userAuthCredentials);
  }

  getVerifiedTutions():Observable<Tution[]> {
    return this.http.get<Tution[]>(this.baseUrl + '/tution/all', this.userAuthCredentials);
  }

  getNonVerifiedTutions():Observable<Tution[]> {
    return this.http.get<Tution[]>(this.baseUrl + '/tution/non-verified', this.userAuthCredentials);
  }

  getNearbyTutions(latitude:number,longitude:number,kmLimit:string,):Observable<Tution[]> {
    return this.http.get<Tution[]>(this.baseUrl + '/tution/near-by/'+ latitude + "/" + longitude + "/" + kmLimit, this.userAuthCredentials);
  }

  getTutionByTeacher(teacherId:number):Observable<Tution> {
    return this.http.get<Tution>(this.baseUrl + '/tution/by-teacher/' + teacherId, this.userAuthCredentials);
  }

  getTutionsEnrolledByStudents(studentId:number):Observable<Tution[]>{
    return this.http.get<Tution[]>(this.baseUrl + '/tution/enrolled-tutions/' + studentId, this.userAuthCredentials);
  }

  addTution(tution:Tution){
    return this.http.post<Tution>(this.baseUrl + '/tution', tution, this.userAuthCredentials);
  }

  editTution(tution:Tution){
    return this.http.put<Tution>(this.baseUrl + '/tution', tution, this.userAuthCredentials);
  }

  deleteTution(tutionId:number, teacherId:number){
    return this.http.delete<Tution>(this.baseUrl + '/tution/delete/'+ tutionId + "/" + teacherId, this.userAuthCredentials);
  }

  deleteEnrollmentOfStudent(tutionId:number, studentId:number){
    return this.http.delete<Tution>(this.baseUrl + '/tution/delete-enrollement/' + tutionId + '/' + studentId, this.userAuthCredentials);
  }

}