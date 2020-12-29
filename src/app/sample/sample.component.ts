import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tuitions:any[]=[
    {thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"Aryan",image:"../../assets/ek.jpeg",details:{subject:"Chemistry Teacher",location:"Modinagar",experience:"10 years", rating:"10/10"}},
    {thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"Saksham",image:"../../assets/ek.jpeg",details:{subject:"Physics Teacher",location:"Badana",experience:"1 years", rating:"8/10"}}
    ,{thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"HI",image:"../../assets/ek.jpeg",details:{subject:"Chemistry Teacher",location:"Modinagar",experience:"10 years", rating:"10/10"}},
    {thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"Sakposham",image:"../../assets/ek.jpeg",details:{subject:"Physics Teacher",location:"Badana",experience:"1 years", rating:"8/10"}}
  
    ,{thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"pol",image:"../../assets/ek.jpeg",details:{subject:"Chemistry Teacher",location:"Modinagar",experience:"10 years", rating:"10/10"}},
    {thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"Sakspopoopham",image:"../../assets/ek.jpeg",details:{subject:"Physics Teacher",location:"Badana",experience:"1 years", rating:"8/10"}}
  
  ];



 /*  image:any[]=[
  {link:"https://cdn.pixabay.com/photo/2017/07/20/03/53/homework-2521144__340.jpg",caption:"Physics"},
  {link:"https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641__340.jpg",caption:"Chemistry"},
  {link:"https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090__340.jpg",caption:"Maths"},
  {link:"https://cdn.pixabay.com/photo/2014/11/01/18/21/brain-512758__340.png",caption:"Biology"},
  {link:"https://cdn.pixabay.com/photo/2020/04/28/18/33/key-5105878__340.jpg",caption:"English"},
  {link:"https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261__340.jpg",caption:"Business"},
  {link:"https://cdn.pixabay.com/photo/2014/10/01/14/07/tax-468440__340.jpg",caption:"Accounts"},
  {link:"https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg",caption:"Economics"},
  {link:"https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883632__340.jpg",caption:"CS"}
  ]; */
/* 
 image:any[]=[
   {link:"../../assets/Food1.jpg"},
   {link:"../../assets/Clothing1.jpg"},
   {link:"../../assets/Food4.jpg"},
   {link:"../../assets/Clothing2.jpg"},
   {link:"../../assets/Food2.jpg"},
   {link:"../../assets/Clothing4.jpg"},
   {link:"../../assets/Food3.jpg"},
   {link:"../../assets/Clothing3.jpg"},

   
 ]; */
 
}
