import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tution } from 'src/app/classes/tution';
import { User } from 'src/app/classes/user';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-non-verified-verification-page',
  templateUrl: './non-verified-verification-page.component.html',
  styleUrls: ['./non-verified-verification-page.component.css']
})
export class NonVerifiedVerificationPageComponent implements OnInit {

  id: string;
  teacher: User;
  tution: Tution;

  isUpdated:boolean = false;
  isRejeted:boolean = false;
  isFailed:boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private teacherService: UserService, private tutionService: TutionService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.getTeacher();
  }

  getTeacher() {
    var numberValue = Number(this.id);
    this.teacherService.getUserById(numberValue).subscribe(
      (res) => {
        this.teacher = res;
        console.log(this.teacher);
        this.getTutionByTeacher();
      }
    );
  }

  getTutionByTeacher() {
    this.tutionService.getTutionByTeacher(this.teacher.userId).subscribe(
      (res) => {
        this.tution = res;
        console.log(this.tution);
      }
    )
  }

  onAccept(){
    this.teacherService.acceptTeacher(this.teacher.email, this.tution.tutionId).subscribe(
      (res)=>{
        console.log("teacher accepted");
        this.isUpdated = true;
        this.isRejeted = false;
      },
      (error)=>{
        this.isFailed = true;
        this.isUpdated = false;
        this.isRejeted = false;
      }
    )
  }

  onReject(){
    this.tutionService.deleteTution(this.tution.tutionId, this.teacher.userId).subscribe(
      (res)=>{
        console.log("deleted");
        this.isRejeted = true;
      },
      (error)=>{
        this.isFailed = true;
        this.isUpdated = false;
        this.isRejeted = false;
      }
    )
  }

  closeIsUpdatedAlert(){
    this.isUpdated = false;
    this.isRejeted = false;
    this.isFailed = false;
  }
 
}
