import { Injectable } from '@angular/core';
import {Video} from './Videos/video';
import {Notes} from './Notes/notes';
import {Papers} from './Papers/papers';

@Injectable({
  providedIn: 'root'
})
export class TeacherDocumentsService {


video:Video[]=[
  {
    no:1,
    name:"Compounds",
    link:"https://youtu.be/vRNwz9Yx5nA",
    date:"2020/09/09",
    desc:"compounds chapter"
}]

notes:Notes[]=[
  {
    no:1,
    name:"Compounds",
    date:"2020/09/09",
    desc:"compounds chapter",
    file:"https://youtu.be/vRNwz9Yx5nA"
}]


papers:Papers[]=[
  {
    no:1,
    name:"Compounds",
    date:"2020/09/09",
    desc:"compounds chapter",
    file:"..."
}]
  constructor() { 
  }


  getVideos() {
    return this.video;
  }


  getVideobyId(no:number){
    return this.video[no];
  }


  addVideos(value: any) {
    this.video.push(value);
    console.log(this.video);
  }

deleteVideo(value:number){
this.video.splice(value-1,1);
}
 



getNotes() {
  return this.notes;
}


getNotesbyId(no:number){
  return this.notes[no];
}


addNotes(value: any) {
  this.notes.push(value);
  console.log(this.notes);
}

deleteNotes(value:number){
this.notes.splice(value-1,1);
}



getPapers() {
  return this.papers;
}


getPapersbyId(no:number){
  return this.papers[no];
}


addPapers(value: any) {
  this.papers.push(value);
  console.log(this.papers);
}

deletePapers(value:number){
this.papers.splice(value-1,1);
}




}
