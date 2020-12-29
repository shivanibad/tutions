import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/classes/note';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {


  editForm: FormGroup = this.formBuilder.group({
    'name': new FormControl('', [Validators.required]),
    'subject': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'class': new FormControl('', [Validators.required]),
    'file': new FormControl('', [Validators.required]),
  });

  no: string;
  notes: Note;

  isVideoAdded: boolean = false;
  isFailed: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private noteService: NotesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.no = params.get('no');
      console.log(this.no);
    });
    this.getNotesbyId();
  }

  getNotesbyId() {
    var numberValue = Number(this.no);
    this.noteService.getNotesById(numberValue).subscribe(
      (res) => {
        this.notes = res;
        console.log(this.notes);
        this.editForm.patchValue({
          name: this.notes.notesName,
          subject: this.notes.subject,
          class: this.notes.noteClass,
          date: "",
        });
      }
    )

  }

  onSave() {
    this.notes.notesName = this.editForm.value['name'];
    this.noteService.editNote(this.notes).subscribe(
      (res) => {
        console.log("Edited");
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

  isValidInput(fieldName): boolean {
    return this.editForm.controls[fieldName].invalid &&
      (this.editForm.controls[fieldName].dirty || this.editForm.controls[fieldName].touched);
  }

}
