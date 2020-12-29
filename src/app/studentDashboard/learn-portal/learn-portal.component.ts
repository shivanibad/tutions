import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-portal',
  templateUrl: './learn-portal.component.html',
  styleUrls: ['./learn-portal.component.css']
})
export class LearnPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 /*  thumbnails:any[]=
  [
    
    {l:"1",n:"6",link:"../../../assets/thumbnail.jpg",name:"chapter 1"},
    {n:"6",link:"../../../assets/thumbnail.jpg",name:"chapter 1",l:"2"}

]; */

clas:any[]=[
  {n:"10",cat:"Video",vName:"Chapter-1", vLink:"https://youtu.be/vRNwz9Yx5nA"},
  {n:"11", cat:"Docs",vLink:"https://youtu.be/vRNwz9Yx5nA"},
  {n:"12",cat:"Video",vLink:"https://youtu.be/vRNwz9Yx5nA"},
 /*  {n:"6", cat:"Docs"},
  {n:"7", cat:"Docs"},
  {n:"8",cat:"Video"},
  {n:"9", cat:"Docs"},
  {n:"10",cat:"Video"},
  {n:"11", cat:"Docs"},
  {n:"12",cat:"Video"}, */
];

}
