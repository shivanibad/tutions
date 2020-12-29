import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TeacherDocumentsService } from '../../teacher-documents.service';
import { Note } from 'src/app/classes/note';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { NotesService } from 'src/app/Services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  currentFile: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  downloadUrl: string = "Not Uploaded";

  isVideoAdded: boolean = false;
  isFailed:boolean = false;

  note: Note = {
    notesId: null,
    notesName: "",
    subject: "physics",
    noteClass: "11",
    notePdfLink: "",
    tutionId: 2
  }


  addForm: FormGroup = this.formBuilder.group({
    'name': new FormControl('', [Validators.required]),
    'subject': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'class': new FormControl('', [Validators.required]),
    'file': new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private storage: AngularFireStorage, private noteService: NotesService) { }

  ngOnInit() {

  }

  isValidInput(fieldName): boolean {
    return this.addForm.controls[fieldName].invalid &&
      (this.addForm.controls[fieldName].dirty || this.addForm.controls[fieldName].touched);
  }

  save() {
    this.note.notesId = null;
    this.note.notesName = this.addForm.value['name'];
    this.note.noteClass = this.addForm.value['class'];
    this.note.notePdfLink = this.downloadUrl,
      this.note.subject = this.addForm.value['subject'];
    console.log(this.note);
    this.noteService.addNote(this.note).subscribe(
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
    const filePath = 'notes/' + this.currentFile.name + '_' + new Date().getTime();
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
        /* console.log(res.state);
        console.log(this.percentage); */
        this.note.notePdfLink = this.downloadUrl;
      }
    );
  }



}
