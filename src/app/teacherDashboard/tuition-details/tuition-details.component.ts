import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Teacher} from '../../Services/teacher';
import { TeacherUserService } from 'src/app/Services/teacher-user.service';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/Services/user.service';
import { Tution } from 'src/app/classes/tution';
import { TutionService } from 'src/app/Services/tution.service';
@Component({
  selector: 'app-tuition-details',
  templateUrl: './tuition-details.component.html',
  styleUrls: ['./tuition-details.component.css']
})
export class TuitionDetailsComponent implements OnInit {



  teacher: User;
  tution:Tution;

  constructor(private formBuilder: FormBuilder, private teacherService: UserService, private route: ActivatedRoute, private tutionService:TutionService) {

  }

  ngOnInit() {
    this.getTeacher();
  }

  getTution(){

  }

  getTeacher(){
    this.teacher = this.teacherService.user;
    this.tution = this.tutionService.tution;
  }




}
