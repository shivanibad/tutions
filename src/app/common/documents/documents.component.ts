import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/* docs:any[]=[
  {name:"Notes",link:"/notes"},
  {name:"Syllabus",link:"/syllabus"},
  {name:"Sample Papers",link:"/samplePapers"},
  {name:"Previous Year Papers",link:"/previousPapers"}
]; */
}
