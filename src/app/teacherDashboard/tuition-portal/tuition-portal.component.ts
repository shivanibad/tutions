import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-tuition-portal',
  templateUrl: './tuition-portal.component.html',
  styleUrls: ['./tuition-portal.component.css']
})
export class TuitionPortalComponent implements OnInit {

  listOfEnrolledStudents:User[];
  
  isVideoAdded: boolean = false;
  isFailed:boolean = false;

  isEmpty:boolean = true;

  constructor(private userService:UserService, private tutionservice:TutionService) { }

  ngOnInit() {
    this.getEnrolledStudents();
  }

  getEnrolledStudents(){
    this.userService.getEnrolledStudentsOfATution(this.tutionservice.tution.tutionId).subscribe(
      (res)=>{
        this.listOfEnrolledStudents = res;
        console.log(this.listOfEnrolledStudents);
        if(res.length>0){
          this.isEmpty = false;
        }
        else{
          this.isEmpty = true;
        }
      },
      (error)=>{
        console.log("enrolled students failed");
      }
    )
  }

  deleteUser(userId){
    this.tutionservice.deleteEnrollmentOfStudent(this.tutionservice.tution.tutionId,userId).subscribe(
      (res)=>{
        console.log("deleted enrollment");
        this.isVideoAdded = true;
        this.isFailed = false;
        this.getEnrolledStudents();
      },
      (error)=>{
        console.log("not able to delete");
        this.isVideoAdded = false;
        this.isFailed = true;
      }
    )
  }

}
