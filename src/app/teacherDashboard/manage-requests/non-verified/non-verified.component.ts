import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: '[app-non-verified]',
  templateUrl: './non-verified.component.html',
  styleUrls: ['./non-verified.component.css']
})
export class NonVerifiedComponent implements OnInit {

  @Input('teacher') 
  teacher: User;
  @Output()
  viewEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onView(){
    console.log(this.teacher.userId);
    this.viewEvent.emit(this.teacher.userId);
  }

}
