import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/classes/note';
import { NotesService } from 'src/app/Services/notes.service';
import { TeacherDocumentsService } from '../../teacher-documents.service';
import { Notes } from '../notes';

@Component({
  selector: '[app-notes-info]',
  templateUrl: './notes-info.component.html',
  styleUrls: ['./notes-info.component.css']
})


export class NotesInfoComponent implements OnInit { 
  @Input('notes') notes: Note;
  constructor(private route: ActivatedRoute, private notesService: NotesService, private router:Router) { 
    //this.notes = this.docService.getNotes();
  }
  
  ngOnInit() {
  }
  onDelete(){
    this.notesService.deleteNote(this.notes.notesId).subscribe(
      (res)=>{
        console.log("note deleted");
        this.router.navigate["/teacherBar/tuitionPortal"];
      }
    )
  }
  onNotes(){
    this.router.navigate["/addNotes"];
  }

}
