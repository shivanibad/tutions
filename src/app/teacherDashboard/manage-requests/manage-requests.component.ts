import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.css']
})
export class ManageRequestsComponent implements OnInit {

  teachers:User[];

  requestedStudents:User[];

  constructor(private teacherService: UserService, private tutionService:TutionService) { }

  ngOnInit() {
    this.getNonVerifiedTeachers();
    this.getEnrollmentRequests();
  }

  getNonVerifiedTeachers(){
    this.teacherService.getNonVerifiedTeachers().subscribe(
      (res)=>{
        this.teachers = res;
        console.log(this.teachers);
      }
    )
  }

  getEnrollmentRequests(){
    this.teacherService.getEnrollmentRequestsForATution(this.tutionService.tution.tutionId).subscribe(
      (res)=>{
        this.requestedStudents = res;
        console.log(this.requestedStudents);
      }
    )
  }

  updateRequets(){
    this.getEnrollmentRequests();
  }

}
