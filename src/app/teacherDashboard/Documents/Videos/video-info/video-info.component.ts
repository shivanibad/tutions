import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/classes/video';
import { VideoService } from 'src/app/Services/video.service';
import { TeacherDocumentsService } from '../../teacher-documents.service';

@Component({
  selector: '[app-video-info]',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css']
})
export class VideoInfoComponent implements OnInit {

  @Input('video') 
  video: Video;

  constructor(private route: ActivatedRoute,private router:Router, private videoService:VideoService) {}

  ngOnInit() {
  }
  
  onDelete(){
    this.videoService.deleteVideo(this.video.videoId).subscribe(
      (res)=>{
        console.log("video deleted");
        this.router.navigate["/teacherBar/tuitionPortal"];
      }
    )
  }
  onVideos(){
    this.router.navigate["/addVideos"];
  }

}
