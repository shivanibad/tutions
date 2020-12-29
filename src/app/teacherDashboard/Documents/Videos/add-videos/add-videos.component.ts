import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Video } from 'src/app/classes/video';
import { TutionService } from 'src/app/Services/tution.service';
import { VideoService } from 'src/app/Services/video.service';
import { TeacherDocumentsService } from '../../teacher-documents.service';

@Component({
  selector: 'app-add-videos',
  templateUrl: './add-videos.component.html',
  styleUrls: ['./add-videos.component.css']
})
export class AddVideosComponent implements OnInit {

  video: Video;
  isVideoAdded: boolean = false;
  isFailed:boolean = false;

  addForm: FormGroup = this.formBuilder.group({
    'topic': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'class': new FormControl('', [Validators.required]),
    'subject': new FormControl('', [Validators.required]),
    'Description': new FormControl('', [Validators.required]),
    'videoLink': new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder, private videoService: VideoService, private router: Router, private tutionServcie:TutionService) { }

  ngOnInit() {
  }

  isValidInput(fieldName): boolean {
    return this.addForm.controls[fieldName].invalid &&
      (this.addForm.controls[fieldName].dirty || this.addForm.controls[fieldName].touched);
  }

  Save() {

    let video: Video = {
      videoId: null,
      videoName: this.addForm.value['topic'],
      videoLink: this.addForm.value['videoLink'],
      dateAdded: this.addForm.value['date'],
      subject: this.addForm.value['subject'],
      videoClass: this.addForm.value['class'],
      tutionId: this.tutionServcie.tution.tutionId
    }

    console.log(video);

    this.videoService.addVideo(video).subscribe(
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
    );
  }

  closeAlert(){
    this.isVideoAdded = false;
    this.isFailed = false;
  }


}
