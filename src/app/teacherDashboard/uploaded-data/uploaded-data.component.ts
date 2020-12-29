import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/classes/note';
import { Paper } from 'src/app/classes/paper';
import { Video } from 'src/app/classes/video';
import { BookService } from 'src/app/Services/book.service';
import { NotesService } from 'src/app/Services/notes.service';
import { PaperService } from 'src/app/Services/paper.service';
import { TutionService } from 'src/app/Services/tution.service';
import { VideoService } from 'src/app/Services/video.service';
import { TeacherDocumentsService } from '../Documents/teacher-documents.service';

@Component({
  selector: 'app-uploaded-data',
  templateUrl: './uploaded-data.component.html',
  styleUrls: ['./uploaded-data.component.css']
})
export class UploadedDataComponent implements OnInit {

  videos:Video[];
  notes:Note[];
  papers:Paper[];

  isVideoTab:boolean = true;
  isNotesTab:boolean = false;
  isPaperTab:boolean = false;

  isVideoListEmpty:boolean = true;  
  isNotesListEmpty:boolean = true;

  constructor(
    private videoService:VideoService,
    private notesService: NotesService,
    private paperService:PaperService,
    private bookService:BookService,
    private tutionService: TutionService,
     private router:Router) {    
   }

  ngOnInit() {
    //this.videos = this.docService.getVideos();
    this.getVideos();
    this.getNotes();
    this.getPapers();
  }

  getVideos(){
    this.videoService.getVideoByTutionId(this.tutionService.tution.tutionId).subscribe(
      (res)=>{
        this.videos = res;
        console.log(this.videos);
        if(this.videos.length > 0){
          this.isVideoListEmpty = false;
        }
        else{
          this.isVideoListEmpty = true;
        }
        console.log(this.isVideoListEmpty);
      },
      (error)=>{
        console.log("not able to fetch videos");
      }
    )
  }

  getNotes(){
    this.notesService.getNotesByTutionId(this.tutionService.tution.tutionId).subscribe(
      (res)=>{
        this.notes = res;
        console.log(this.notes);
        if(this.notes.length > 0){
          this.isNotesListEmpty = false;
        }
        else{
          this.isNotesListEmpty = true;
        }
        console.log(this.isNotesListEmpty);
      },
      (error)=>{
        console.log("not able to fetch videos");
      }
    )
  }

  getPapers(){
    this.paperService.getAllPapers().subscribe(
      (res)=>{
        this.papers = res;
        console.log(this.papers);
      },
      (error)=>{
        console.log("not able to fetch videos");
      }
    )
  }


  openVideosTab(){
    this.isVideoTab = true;
    this.isNotesTab = false;
    this.isPaperTab = false;
  }

  openNotesTab(){
    this.isVideoTab = false;
    this.isNotesTab = true;
    this.isPaperTab = false;
  }

  openPaperTab(){
    this.isVideoTab = false;
    this.isNotesTab = false;
    this.isPaperTab = true;
  }

  onVideos(){
    this.router.navigate["/addVideos"];
  }
  onNotes(){
    this.router.navigate["/addNotes"];
  }
  onPapers(){
    this.router.navigate["/addPapers"];
  }
}
