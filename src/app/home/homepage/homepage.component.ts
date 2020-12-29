import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Tution } from 'src/app/classes/tution';
import { TutionService } from 'src/app/Services/tution.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  tuionList:Tution[];

  constructor(private tutionService:TutionService, private router:Router) { }

  ngOnInit() {
    this.getTutions();
  }

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
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 6
      },
      940: {
        items: 6
      }
    },

  }
 
  
  image: any[] = [
    { link: "https://cdn.pixabay.com/photo/2017/07/20/03/53/homework-2521144__340.jpg", caption: "Physics" },
    { link: "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641__340.jpg", caption: "Chemistry" },
    { link: "https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090__340.jpg", caption: "Maths" },
    { link: "https://cdn.pixabay.com/photo/2017/02/01/13/52/analysis-2030261__340.jpg", caption: "Biology" },
    { link: "https://cdn.pixabay.com/photo/2020/04/28/18/33/key-5105878__340.jpg", caption: "English" },
    { link: "https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261__340.jpg", caption: "Business" },
    { link: "https://cdn.pixabay.com/photo/2014/10/01/14/07/tax-468440__340.jpg", caption: "Accounts" },
    { link: "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg", caption: "Economics" },
    { link: "https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883632__340.jpg", caption: "CS" }
  ];

  background: any[] = [
    { bg: "../../assets/jee.jpg" },
    { bg: "../../assets/jee.jpg" }
  ];

  tuitions: any[] = [
    { thumbnail: "../../assets/images/avatar.png", sampleVideo: "https://www.youtube.com/embed/aOt2WrZcSnw", name: "Aryan", image: "../../assets/images/avatar.png", details: { subject: "Chemistry ", location: "Modinagar", experience: "10 years", rating: "10/10" } },
    { thumbnail: "../../assets/images/avatar.png", sampleVideo: "https://www.youtube.com/embed/aOt2WrZcSnw", name: "Saksham", image: "../../assets/images/avatar.png", details: { subject: "Physics ", location: "Badana", experience: "1 years", rating: "8/10" } }
    ,{ thumbnail: "../../assets/images/avatar.png", sampleVideo: "https://www.youtube.com/embed/aOt2WrZcSnw", name: "Saksham", image: "../../assets/images/avatar.png", details: { subject: "Physics ", location: "Badana", experience: "1 years", rating: "8/10" } }
    ,{ thumbnail: "../../assets/images/avatar.png", sampleVideo: "https://www.youtube.com/embed/aOt2WrZcSnw", name: "Saksham", image: "../../assets/images/avatar.png", details: { subject: "Physics ", location: "Badana", experience: "1 years", rating: "8/10" } } 
  ];
  
  customOp: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
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
        items: 6
      },
      940: {
        items: 6
      }
    },

  }

  getTutions(){
    this.tutionService.getVerifiedTutions().subscribe(
      (res)=>{
        this.tuionList = res;
        console.log(this.tuionList);
      },
      (error)=>{
        console.log("cannot able to load tutions");
      }
    )
  }


  navigateToBooks(){
    this.router.navigate(["/books"]);
  }

}
