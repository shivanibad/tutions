import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentUserService {

  constructor() { }

  student: Student[] = [
    {
      photo: "../../../assets/ek.jpeg",
      id: "1",
      fname: "Mahira",
      lname: "Singh",
      dob: "20/20/2020",
      email: "mahira@gmail.com",
      phone: 3030303300,
      class: 12,
      school: "DMPS"
    }
  ];

  getStudent() {
    return this.student;
  }


  getStudentbyId(id: number) {
    return this.student[id];
  }



}
