import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paper } from '../classes/paper';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  baseUrl = environment.baseUrl;
  paper:Paper;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('sat@gmail.com:pwd')
    })
  };

  private subject = new Subject<Paper[]>();

  constructor(private http: HttpClient) { }

  getSubject(): Subject<Paper[]> {
    return this.subject;
  }

  getPaperById(id:number):Observable<Paper> {
    return this.http.get<Paper>(this.baseUrl + '/paper/by-paper/' + id, this.userAuthCredentials);
  }

  getAllPapers():Observable<Paper[]> {
    return this.http.get<Paper[]>(this.baseUrl + '/paper/all-paper', this.userAuthCredentials);
  }

  getPaperBySubject(subject:string):Observable<Paper[]>{
    return this.http.get<Paper[]>(this.baseUrl + '/paper/by-subject/' + subject, this.userAuthCredentials);
  }

  getPaperByClass(paperClass:string):Observable<Paper[]> {
    return this.http.get<Paper[]>(this.baseUrl + '/paper/by-class/' + paperClass, this.userAuthCredentials);
  }

  getPaperBySubjecAndClass(subject:string, paperClass:string):Observable<Paper[]>{
    return this.http.get<Paper[]>(this.baseUrl + '/paper/by-subject-and-class/' + subject + '/' + paperClass, this.userAuthCredentials);
  }

  addPaper(paper:Paper){
    return this.http.post<Paper>(this.baseUrl + '/paper/addPaper', paper, this.userAuthCredentials);
  }

  editPaper(paper:Paper){
    return this.http.put<Paper>(this.baseUrl + '/paper/editPaper', paper, this.userAuthCredentials);
  }

  deletePaper(id:number){
    return this.http.delete<Paper>(this.baseUrl + '/paper/delete/' + id, this.userAuthCredentials);
  }


}
