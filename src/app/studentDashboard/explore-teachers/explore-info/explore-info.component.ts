import { Component, Input, OnInit } from '@angular/core';
import { Tution } from 'src/app/classes/tution';

@Component({
  selector: 'app-explore-info',
  templateUrl: './explore-info.component.html',
  styleUrls: ['./explore-info.component.css']
})
export class ExploreInfoComponent implements OnInit {
  @Input('tution')
  tuition: Tution;

  constructor() { }

  ngOnInit() {
  }

}
