import { Component, OnInit } from '@angular/core';
import { Tution } from 'src/app/classes/tution';
import { User } from 'src/app/classes/user';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})

export class StudentPortalComponent implements OnInit {

  tutions:Tution[];
  isTutionListEmpty:boolean = true;

  constructor(private tutionService:TutionService, private userService:UserService) { }

  ngOnInit() {
    this.getEnrolledTutions();
  }

  getEnrolledTutions(){
    this.tutionService.getTutionsEnrolledByStudents(this.userService.user.userId).subscribe(
      (res)=>{
        this.tutions = res;
        if(this.tutions.length>0){
          this.isTutionListEmpty = false;
          console.log(this.isTutionListEmpty);
        }
        else{
          this.isTutionListEmpty = true;
        }
        console.log(this.tutions);
      }
    )
  }

}
