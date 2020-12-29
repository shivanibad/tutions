import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';
import { Video } from '../classes/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  baseUrl = environment.baseUrl;
  video:Video;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('sat@gmail.com:pwd')
    })
  };

  private subject = new Subject<Video[]>();

  constructor(private http: HttpClient) { }

  getSubject(): Subject<Video[]> {
    return this.subject;
  }

  getVideoById(id:number):Observable<Video> {
    return this.http.get<Video>(this.baseUrl + '/video/by-video/'+ id, this.userAuthCredentials);
  }

  getVideoBySubject(subject:string):Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl + '/video/by-subject/'+ subject, this.userAuthCredentials);
  }

  getVideoByClass(videoClass:string):Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl + '/video/by-class/' + videoClass, this.userAuthCredentials);
  }

  getVideoBySubjecAndClass(subject:string, videoClass:string):Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl + '/video/by-subject-and-class/' + subject + '/' + videoClass, this.userAuthCredentials);
  }

  getVideoByTutionId(id:number):Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl + '/video/by-tutionId/' + id, this.userAuthCredentials);
  }

  addVideo(video:Video){
    return this.http.post<Video[]>(this.baseUrl + '/video/addVideo' , video, this.userAuthCredentials);
  }

  editVideo(video:Video){
    return this.http.put<Video[]>(this.baseUrl + '/video/editVideo', video, this.userAuthCredentials);
  }

  deleteVideo(id:number){
    return this.http.delete<Video[]>(this.baseUrl + '/video/delete/' + id, this.userAuthCredentials);
  }

}
