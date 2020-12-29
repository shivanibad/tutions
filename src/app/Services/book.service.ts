import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../classes/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookSubject:string = "Physics";

  baseUrl = environment.baseUrl;
  book:Book;

  userAuthCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('sat@gmail.com:pwd')
    })
  };

  private subject = new Subject<Book[]>();

  constructor(private http: HttpClient) { }

  getSubject(): Subject<Book[]> {
    return this.subject;
  }

  getBookById(id:number):Observable<Book> {
    return this.http.get<Book>(this.baseUrl + '/book/by-book/' + id, this.userAuthCredentials);
  }

  getAllBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + '/book/all-book', this.userAuthCredentials);
  }

  getBookBySubject(subject:string,):Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl + '/book/by-subject/' + subject, this.userAuthCredentials);
  }

  getBookByClass(bookClass:string):Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + '/book/by-class/' + bookClass, this.userAuthCredentials);
  }

  getBookBySubjecAndClass(subject:string, bookClass:string):Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl + '/book/by-subject-and-class/' + subject + '/' + bookClass, this.userAuthCredentials);
  }

  addBook(book:Book){
    return this.http.post<Book>(this.baseUrl + '/book/addBook', book, this.userAuthCredentials);
  }

  editBook(book:Book){
    return this.http.put<Book>(this.baseUrl + '/book/editBook', book, this.userAuthCredentials);
  }

  deleteBook(id:number){
    return this.http.delete<Book>(this.baseUrl + '/book/delete/'+id, this.userAuthCredentials);
  }
}
