import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: '[app-student-info]',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  @Input('student') 
  student: User;
  @Output()
  deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(){
    //emit event for delete with id to parent
    console.log(this.student.userId);
    this.deleteEvent.emit(this.student.userId);
  }

}
