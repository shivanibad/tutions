import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/user';
import { Student } from 'src/app/Services/student';
import { StudentUserService } from 'src/app/Services/student-user.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: User;

  constructor(private formBuilder: FormBuilder, private studentService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getStudent();
   }

  getStudent(){
    console.log(this.studentService.user);
    this.student = this.studentService.user;
  }

}
