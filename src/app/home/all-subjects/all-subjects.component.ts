import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images:any[]=[
    {image:"https://cdn.pixabay.com/photo/2017/07/20/03/53/homework-2521144__340.jpg",caption:"Physics",routerLink:"/login"},
    {image:"https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641__340.jpg",caption:"Chemistry",routerLink:"/register"},
    {image:"https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090__340.jpg",caption:"Maths"},
    {image:"https://cdn.pixabay.com/photo/2016/07/30/10/30/leaf-1556769__340.jpg",caption:"Biology"},
    {image:"https://cdn.pixabay.com/photo/2020/04/28/18/33/key-5105878__340.jpg",caption:"English"},
    {image:"https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261__340.jpg",caption:"Business"},
    {image:"https://cdn.pixabay.com/photo/2014/10/01/14/07/tax-468440__340.jpg",caption:"Accounts"},
    {image:"https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg",caption:"Economics"},
    {image:"https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883632__340.jpg",caption:"CS"}
    
  ];
}
