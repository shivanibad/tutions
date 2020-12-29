import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onHome(){
    this.router.navigate(['/home']);
  }
  onAbout(){
    this.router.navigate(['/about-us']);
  }
  // onContact(){
  //   this.router.navigate(['/contact-us']);
  // }
  onDev(){
    this.router.navigate(['/aboutDev']);
  }
  onBooks(){
    this.router.navigate(['/books']);
  }
  onExplore(){
    this.router.navigate(['/exploreTeachers']);
  }
  onLogin(){
    this.router.navigate(['/login']);
  }
  onRegister(){
    this.router.navigate(['/register']);
  }
  onRegisterTeacher(){
    this.router.navigate(['/registerTeacher']);
  }
}
