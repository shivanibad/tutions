import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/classes/note';
import { Paper } from 'src/app/classes/paper';
import { Tution } from 'src/app/classes/tution';
import { User } from 'src/app/classes/user';
import { Video } from 'src/app/classes/video';
import { NotesService } from 'src/app/Services/notes.service';
import { PaperService } from 'src/app/Services/paper.service';
import { TutionService } from 'src/app/Services/tution.service';
import { UserService } from 'src/app/Services/user.service';
import { VideoService } from 'src/app/Services/video.service';

@Component({
  selector: 'app-class-learn',
  templateUrl: './class-learn.component.html',
  styleUrls: ['./class-learn.component.css']
})
export class ClassLearnComponent implements OnInit {

  teacher: User;
  tution: Tution;

  videosList: Video[];
  notesList: Note[];

  isVideoListEmpty:boolean = true;  
  isNotesListEmpty:boolean = true;

  no: string;
  tutionID:number;

  constructor(private videoService: VideoService, private notesService: NotesService, private route: ActivatedRoute, private tutionService:TutionService, private userService:UserService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.no = params.get('no');
      console.log(this.no);
    });
    this.tutionID = Number(this.no);
    this.getTution();
    this.getVideos();
    this.getNotes();
  }

  getTution(){
    this.tutionService.getTutionById(this.tutionID).subscribe(
      (res)=>{
        this.tution = res;
      }
    )
  }

  getVideos() {
    this.videoService.getVideoByTutionId(this.tutionID).subscribe(
      (res) => {
        this.videosList = res;
        if(this.videosList.length > 0){
          this.isVideoListEmpty = false;
        }
        else{
          this.isVideoListEmpty = true;
        }
        console.log(this.videosList);
      }
    )
  }

  getNotes() {
    this.notesService.getNotesByTutionId(this.tutionID).subscribe(
      (res) => {
        this.notesList = res;
        if(this.notesList.length > 0){
          this.isNotesListEmpty = false;
        }
        else{
          this.isNotesListEmpty = true;
        }
        console.log(this.notesList);
      }
    )
  }




}
