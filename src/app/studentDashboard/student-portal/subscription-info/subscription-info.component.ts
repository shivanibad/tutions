import { Component, Input, OnInit } from '@angular/core';
import { Tution } from 'src/app/classes/tution';

@Component({
  selector: 'app-subscription-info',
  templateUrl: './subscription-info.component.html',
  styleUrls: ['./subscription-info.component.css']
})
export class SubscriptionInfoComponent implements OnInit {

  @Input('tution') 
  tution: Tution;

  constructor() { }

  ngOnInit() {

  }

}
