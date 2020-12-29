import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/Services/auth.service';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';


import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  loginForm: FormGroup;

  public shares: Observable<any[]>;
  submitted: boolean = false;
  failed: boolean = false;
  successLogin = false;
  validCredentials = true;
  user: User = null;

  isLoading: boolean = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private tutionService: TutionService,
    private router: Router,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', [Validators.required/* , Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$') */]]
    });
  }


  async onSubmit() {
    let email = this.loginForm.value['email'];
    let password = this.loginForm.value['password'];
    //console.log(email + "---" + password);
    this.submitted = true;
    this.isLoading = true;

    await this.authService.authenticate(email, password).toPromise().then(
      async (res) => {
        //this.setUser(email);

        await this.userService.getUserByEmail(email).subscribe(
          (res) => {
            console.log("getUserByUserName");
            console.log(res);
            this.userService.user = res;
            this.user = res;
            console.log("1rd");
            console.log(this.userService.user);

            this.successLogin = true;
            this.userService.isAdmin = false;
            this.authService.loggedIn = true;
            this.userService.isLoggedIn = true;
            this.authService.name = email;
            console.log(this.user);

            if (this.user.role.role === 'ROLE_ADMIN') {
              this.userService.isAdmin = true;
              this.userService.isStudent = false;
              this.userService.isTeacher = false;
              this.router.navigate(['/manage-requests']);
            }
            else if (this.user.role.role === 'ROLE_STUDENT') {
              console.log("Studnet is log");
              this.userService.isAdmin = false;
              this.userService.isStudent = true;
              this.userService.isTeacher = false;
              this.router.navigate(['/student']);
            }
            else {
              console.log("Teacher is log");
              this.setTution();
              this.userService.isAdmin = false;
              this.userService.isStudent = false;
              this.userService.isTeacher = true;
              this.router.navigate(['/tuitionPortal']);
            }
            this.dialog.closeAll();
            this.validCredentials = true;
            this.isLoading = false;
          },
          () => {
            this.successLogin = false;
            this.validCredentials = false;
            this.isLoading = false;
          });

      },
      () => {
        this.successLogin = false;
        this.validCredentials = false;
        this.isLoading = false;

      }
    );

  }

  /*async setUser(email: string) {
    await this.userService.getUserByEmail(email).subscribe(
      (res) => {
        console.log("getUserByUserName");
        console.log(res);
        this.userService.user = res;
        this.user = res;
        console.log("1rd");
        console.log(this.userService.user);

        this.successLogin = true;
        this.userService.isAdmin = false;
        this.authService.loggedIn = true;
        this.userService.isLoggedIn = true;
        this.authService.name = email;
        console.log(this.user);

        if (this.user.role.role === 'ROLE_ADMIN') {
          this.userService.isAdmin = true;
          this.userService.isStudent = false;
          this.userService.isTeacher = false;
          this.router.navigate(['/superUser']);
        }
        else if (this.user.role.role === 'ROLE_STUDENT') {
          console.log("Studnet is log");
          this.userService.isAdmin = false;
          this.userService.isStudent = true;
          this.userService.isTeacher = false;
          this.router.navigate(['/student']);
        }
        else {
          console.log("Teacher is log");
          this.setTution();
          this.userService.isAdmin = false;
          this.userService.isStudent = false;
          this.userService.isTeacher = true;
          this.router.navigate(['/teacherBar/tuitionPortal']);
        }
        this.validCredentials = true;
      });
  }
*/
  setTution() {
    this.tutionService.getTutionByTeacher(this.user.userId).subscribe(
      (res) => {
        this.tutionService.tution = res;
        console.log(this.tutionService.tution);
      }
    )
  }


  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  closeInvalidAlert(){
    this.validCredentials = true;
  }



}
