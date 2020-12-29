import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-super-user-portal',
  templateUrl: './super-user-portal.component.html',
  styleUrls: ['./super-user-portal.component.css']
})
export class SuperUserPortalComponent implements OnInit {

  studentCount: number;
  verifiedTeacherCount: number;
  nonVerifiedTeacherCount: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.userService.getStudentCount().subscribe(
      (res)=>{ 
        this.studentCount = res;
      }
    )

    this.userService.getVerifiedTeacherCount().subscribe(
      (res)=>{
        this.verifiedTeacherCount = res;
      }
    )

    this.userService.getNonVerifiedTeacherCount().subscribe(
      (res)=>{
        this.nonVerifiedTeacherCount = res;
      }
    )
  }

}
