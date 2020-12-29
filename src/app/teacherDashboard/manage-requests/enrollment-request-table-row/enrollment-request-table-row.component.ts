import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: '[app-enrollment-request-table-row]',
  templateUrl: './enrollment-request-table-row.component.html',
  styleUrls: ['./enrollment-request-table-row.component.css']
})
export class EnrollmentRequestTableRowComponent implements OnInit {

  @Input('student') 
  student: User;
  @Output()
  update = new EventEmitter();

  constructor(private studentService:UserService, private tutionService:TutionService) { }

  ngOnInit() {
  }

  onAccept(){
    console.log("click accept");
    this.studentService.acceptStudentEnrollment(this.tutionService.tution.tutionId, this.student.userId).subscribe(
      (res)=>{
        console.log("accepted");
        this.update.emit();
      }
    );
  }

  onReject(){

  }

}
