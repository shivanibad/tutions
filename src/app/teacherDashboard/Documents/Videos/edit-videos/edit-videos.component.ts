import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/classes/video';
import { VideoService } from 'src/app/Services/video.service';

@Component({
  selector: 'app-edit-videos',
  templateUrl: './edit-videos.component.html',
  styleUrls: ['./edit-videos.component.css']
})
export class EditVideosComponent implements OnInit {

  editForm: FormGroup = this.formBuilder.group({
    'topic': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'class': new FormControl('', [Validators.required]),
    'subject': new FormControl('', [Validators.required]),
    'Description': new FormControl('', [Validators.required]),
    'videoLink': new FormControl('', [Validators.required]),
  });

  no: string;
  video: Video;
  isVideoAdded: boolean = false;
  isFailed:boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router , private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.no = params.get('no');
      console.log(this.no);
    });
    this.getVideobyId();
  }

  getVideobyId() {
    var numberValue = Number(this.no);
    this.videoService.getVideoById(numberValue).subscribe(
      (res) => {
        this.video = res;
        console.log(this.video);
      }
    )
  }

  Save() {
    let video: Video = {
      videoId: this.video.videoId,
      videoName: this.editForm.value['topic'],
      videoLink: this.video.videoLink,
      dateAdded: this.video.dateAdded,
      subject: this.video.subject,
      videoClass: this.video.videoClass,
      tutionId: this.video.tutionId
    }
    console.log(video);
    this.videoService.editVideo(video).subscribe(
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

  isValidInput(fieldName): boolean {
    return this.editForm.controls[fieldName].invalid &&
      (this.editForm.controls[fieldName].dirty || this.editForm.controls[fieldName].touched);
  }

}


