import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Services/student';
import { StudentUserService } from 'src/app/Services/student-user.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  student:Student;

  id:string;
 studentForm: FormGroup = this.formBuilder.group({
   'photo': new FormControl('', [Validators.required]),
   'id': new FormControl('', [Validators.required]),
   'fname': new FormControl('', [Validators.required]),
   'lname': new FormControl('', [Validators.required]),
   'dob': new FormControl('', [Validators.required]),
   'email': new FormControl('', [Validators.required]),
   'phone': new FormControl('', [Validators.required]),
   'class': new FormControl('', [Validators.required]),
   'school': new FormControl('', [Validators.required]),
 
 
 });
 
 
 constructor(private formBuilder: FormBuilder,private studentService:StudentUserService,private route:ActivatedRoute) { }
 
   ngOnInit() {
     this.route.queryParamMap.subscribe(params => {
       this.id = params.get('id');
       console.log(this.id);
     });
     this.getStudentbyId();
   }
 
 
 
 
 
  
 getStudentbyId() {
   var numberValue = Number(this.id);
   this.student = this.studentService.getStudentbyId(numberValue-1);
   console.log(this.student);
   this.studentForm.patchValue({
     photo: this.student.photo,
     id: this.student.id,
     fname: this.student.fname,
     lname: this.student.lname,
     dob: this.student.dob,
     email: this.student.email,
     phone: this.student.phone,
     class: this.student.class,
     school: this.student.school
   });
 }
 
 isValidInput(fieldName): boolean {
   return this.studentForm.controls[fieldName].invalid &&
     (this.studentForm.controls[fieldName].dirty || this.studentForm.controls[fieldName].touched);
 }
 
 
 
 

}
