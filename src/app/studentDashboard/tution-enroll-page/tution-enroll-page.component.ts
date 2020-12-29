import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tution } from 'src/app/classes/tution';
import { User } from 'src/app/classes/user';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-tution-enroll-page',
  templateUrl: './tution-enroll-page.component.html',
  styleUrls: ['./tution-enroll-page.component.css']
})
export class TutionEnrollPageComponent implements OnInit {

  tution: Tution;
  enrolled: boolean;
  isFailed: boolean = false;

  count: number = 0;

  no: string;
  tutionID: number;

  constructor(private route: ActivatedRoute, private tutionService: TutionService, private userService: UserService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.no = params.get('no');
      console.log(this.no);
    });
    this.tutionID = Number(this.no);
    this.getTution();
    this.getStudentsCount();
  }

  getTution() {
    this.tutionService.getTutionById(this.tutionID).subscribe(
      (res) => {
        this.tution = res;
        console.log(this.tution);
      }
    )
  }

  onEnrollAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Request will be sent to the tution to enroll you!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Enroll',
      cancelButtonText: 'No, its a misclick!'
    }).then((result) => {
      this.onEnroll();
    })
  }

  onEnroll() {
    this.userService.enroll(this.tution.tutionId, this.userService.user.userId).subscribe(
      (res) => {
        console.log("enrolled");
        this.enrolled = true;
        this.isFailed = false;
        Swal.fire(
          'Enrolled!',
          'You will be notified once the teacher accepts your enrollment',
          'success'
        )
      },
      () => {
        this.isFailed = true;
        Swal.fire(
          'Error',
          'You might be already enrolled, If not please try again',
          'error'
        )
      }
    )
  }

  getStudentsCount() {
    let listOfEnrolledStudents: User[];
    this.userService.getEnrolledStudentsOfATution(this.tutionID).subscribe(
      (res) => {
        listOfEnrolledStudents = res;
        this.count = listOfEnrolledStudents.length;
        console.log(listOfEnrolledStudents);
      },
      (error) => {
        console.log("enrolled students failed");
      }
    )
  }

}
