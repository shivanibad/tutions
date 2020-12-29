import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  signUpForm: FormGroup;
  imgSrc: string = "/assets/images/avatar.svg";
  selectedImage: any;

  isVideoAdded: boolean = false;
  isFailed: boolean = false;
  isLoading: boolean = false;

  currentFile: File;
  fileUrl: string

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  downloadUrl: string;

  user: User = {
    userId: null,
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: 987654324,
    userClass: 11,
    email: "",
    password: "pwd",
    imagePath: "test",
    role: {
      id: 2,
      role: "ROLE_STUDENT"
    },
    verified: true,
    address: "west Division, rampur",
    city: "New Delhi",
    state: "Delhi"
  };

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.initForm();
    if (this.userService.registerAddress == "" || this.userService.registerCity == "" || this.userService.registerState == "") {
      window.alert("You haven't entered your Location");
      this.router.navigate(["/location"]);
    }
  }

  initForm(): void {
    this.signUpForm = this.fb.group({
      profileImage: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      class: ['', [Validators.required]],
      school: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      pass: ['', [Validators.required]]/* ,
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]]
 */
    });
  }


  isValidInput(fieldName): boolean {
    return this.signUpForm.controls[fieldName].invalid &&
      (this.signUpForm.controls[fieldName].dirty || this.signUpForm.controls[fieldName].touched);
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      console.log("preview");
    }
    else {
      // this.selectedImage = null;
      console.log("preview-not");
    }
  }

  get profileImage() { return this.signUpForm.get('profileImage'); }
  get fname() { return this.signUpForm.get('fname'); }
  get lname() { return this.signUpForm.get('lname'); }
  get dob() { return this.signUpForm.get('dob'); }
  get phone() { return this.signUpForm.get('phone'); }
  get class() { return this.signUpForm.get('class'); }
  get school() { return this.signUpForm.get('school'); }
  get email() { return this.signUpForm.get('email'); }
  get pass() { return this.signUpForm.get('pass'); }
  get address() { return this.signUpForm.get('address'); }
  get city() { return this.signUpForm.get('city'); }
  get state() { return this.signUpForm.get('state'); }


  clearForm() {
    this.profileImage.reset();
    this.fname.reset();
    this.lname.reset();
    this.dob.reset();
    this.phone.reset();
    this.class.reset();
    this.school.reset();
    this.email.reset();
    this.pass.reset();

  }




  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      var size = event.target.files[0].size;
      if (size > 1000000) {
        alert("size must not exceeds 1 MB");
        this.signUpForm.get('profileImage').setValue("");
      }
      else {
        this.currentFile = event.target.files[0];
        console.log("go go");
      }
    } else {
      alert('invalid format!');
    }

  }

  uploadFileAndRegister() {
    const filePath = 'images/' + this.currentFile.name + '_' + new Date().getTime();
    const fileRef = this.storage.ref(filePath);

    const task = fileRef.put(this.currentFile);

    this.percentage = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(
        () => fileRef.getDownloadURL().subscribe(
          (res) => {
            //this.uploadProgress = task.percentageChanges()
            this.downloadUrl = res;
            console.log(this.downloadUrl);
            this.user.imagePath = this.downloadUrl;
            this.onRegister();
          },
          (error) => {
            this.failedToRegister();
          })
      )
    ).subscribe();
  }

  onRegister() {

    this.isLoading = true;
    this.user.firstName = this.signUpForm.value['fname'];
    this.user.lastName = this.signUpForm.value['lname'];
    this.user.dateOfBirth = this.signUpForm.value['dob'];
    this.user.phoneNumber = this.signUpForm.value['phone'];
    this.user.password = this.signUpForm.value['pass'];
    this.user.userClass = this.signUpForm.value['class'];
    this.user.email = this.signUpForm.value['email'];
    this.user.address = this.userService.registerAddress;
    this.user.city = this.userService.registerCity;
    this.user.state = this.userService.registerState;
    this.user.role.id = 2;
    this.user.role.role = "ROLE_STUDENT";
    console.log(this.user);

    this.userService.addUser(this.user).subscribe(
      (res) => {
        console.log("user added succesfully");
        this.router.navigate(["/home"]);
        this.isVideoAdded = true;
        this.isFailed = false;
        this.isLoading = false;
      },
      (error) => {
        this.failedToRegister();
      }
    )

  }

  failedToRegister() {
    this.isVideoAdded = false;
    this.isFailed = true;
    this.isLoading = false;
  }


}
