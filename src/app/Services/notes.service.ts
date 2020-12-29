import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../classes/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = environment.baseUrl;
  notes:Note;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('sat@gmail.com:pwd')
    })
  };

  private subject = new Subject<Note[]>();

  constructor(private http: HttpClient) { }

  getSubject(): Subject<Note[]> {
    return this.subject;
  }

  getNotesById(id:number):Observable<Note> {
    return this.http.get<Note>(this.baseUrl + '/notes/by-id/' + id, this.userAuthCredentials);
  }

  getAllNotes():Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl + '/notes/all', this.userAuthCredentials);
  }

  getNotesByTutionId(id:number):Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl + '/notes/by-tution/' + id, this.userAuthCredentials);
  }

  addNote(notes:Note){
    return this.http.post<Note>(this.baseUrl + '/notes', notes, this.userAuthCredentials);
  }

  editNote(notes:Note){
    return this.http.put<Note>(this.baseUrl + '/notes', notes, this.userAuthCredentials);
  }

  deleteNote(id:number){
    return this.http.delete<Note>(this.baseUrl + '/notes/delete/' + id, this.userAuthCredentials);
  }
}
