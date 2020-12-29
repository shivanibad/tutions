import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tuition-profile',
  templateUrl: './tuition-profile.component.html',
  styleUrls: ['./tuition-profile.component.css']
})
export class TuitionProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tuitions:any[]=[
    {thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"Aryan",image:"../../assets/ek.jpeg",details:{subject:"Chemistry Teacher",location:"Modinagar",experience:"10 years", rating:"10/10"}},
    {thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"Saksham",image:"../../assets/ek.jpeg",details:{subject:"Physics Teacher",location:"Badana",experience:"1 years", rating:"8/10"}},
 
    {thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"Dinesh",image:"../../assets/ek.jpeg",details:{subject:"Physics Teacher",location:"Badana",experience:"1 years", rating:"8/10"}},
    {thumbnail:"../../assets/thumbnail.jpg",sampleVideo:"https://www.youtube.com/embed/aOt2WrZcSnw",name:"Pakhi",image:"../../assets/ek.jpeg",details:{subject:"Physics Teacher",location:"Badana",experience:"1 years", rating:"8/10"}}
  ];


  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },

  }
}
