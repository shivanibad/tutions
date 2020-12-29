import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

import { SigninComponent } from '../users/signin/signin.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog, private userService:UserService, private authService:AuthService, private router:Router) {}

  openDialog() {
    /* this.dialog.open(SigninComponent);
    this.router.navigate(['/login-back']); */
    this.userService.openDialog();
    this.router.navigate(['/login-back']);
  }
  
  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
