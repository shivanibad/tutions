import { Injectable } from '@angular/core';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherUserService {

  constructor() { }


  teacher: Teacher[] = [
    {
      photo: "../../../assets/ek.jpeg",
      id: "1",
      fname: "Aryan",
      lname: "Chaudhary",
      dob: "10/10/2020",
      email: "aryan@gmail.com",
      phone: 9030303300,
      class: 11,
      board: "CBSE"
    }
  ];

  getTeacher() {
    return this.teacher;
  }


  getTeacherbyId(id: number) {
    return this.teacher[id];
  }




}
