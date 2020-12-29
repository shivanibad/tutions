import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Note } from 'src/app/classes/note';
import { TeacherDocumentsService } from '../../teacher-documents.service';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Paper } from 'src/app/classes/paper';
import { PaperService } from 'src/app/Services/paper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-papers',
  templateUrl: './add-papers.component.html',
  styleUrls: ['./add-papers.component.css']
})
export class AddPapersComponent implements OnInit {

  paper: Paper = {
    paperId: null,
    paperName:"",
    paperClass: "11",
    paperPdfLink: "",
    subject:"physics"
  };
  
  isVideoAdded: boolean = false;
  isFailed:boolean = false;

  currentFile: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  downloadUrl: string = "Not uploaded yet";

  addForm: FormGroup = this.formBuilder.group({
    'name': new FormControl('', [Validators.required]),
    'subject': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'class': new FormControl('', [Validators.required]),
    'file': new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private storage: AngularFireStorage, private paperService:PaperService) { }

  ngOnInit() {
  }

  isValidInput(fieldName): boolean {
    return this.addForm.controls[fieldName].invalid &&
      (this.addForm.controls[fieldName].dirty || this.addForm.controls[fieldName].touched);
  }


  save() {
    this.paper.paperId = null;
    this.paper.paperName = this.addForm.value['name'];
    this.paper.paperClass = this.addForm.value['class'];
    this.paper.paperPdfLink = this.downloadUrl,
    this.paper.subject = this.addForm.value['subject'];
    console.log(this.paper);
    this.paperService.addPaper(this.paper).subscribe(
      (res) => {
        console.log("added");
        this.isVideoAdded = true;
        this.isFailed = false;
        this.router.navigate["/teacherBar/uploaded"];
      },
      (error)=>{
        this.isVideoAdded = false;
        this.isFailed = true;
      }
    )
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('pdf.*')) {
      var size = event.target.files[0].size;
      if (size > 20000000) {
        alert("size must not exceeds 20 MB");
        this.addForm.get('file').setValue("");
      }
      else {
        this.currentFile = event.target.files[0];
        console.log("go go");
        this.uploadFile();
      }
    } else {
      alert('invalid format!');
    }

  }

  uploadFile() {
    const filePath = 'papers/' + this.currentFile.name + '_' + new Date().getTime();
    const fileRef = this.storage.ref(filePath);

    const task = fileRef.put(this.currentFile);

    this.percentage = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(
        () => fileRef.getDownloadURL().subscribe(
          (res) => {
            this.downloadUrl = res;
          })
      )
    ).subscribe(
      (res) => {
        console.log(this.downloadUrl);
        this.paper.paperPdfLink = this.downloadUrl;
      }
    );
  }

}
