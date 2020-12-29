import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paper } from 'src/app/classes/paper';
import { PaperService } from 'src/app/Services/paper.service';
import { TeacherDocumentsService } from '../../teacher-documents.service';

@Component({
  selector: '[app-paper-info]',
  templateUrl: './paper-info.component.html',
  styleUrls: ['./paper-info.component.css']
})
export class PaperInfoComponent implements OnInit {
  @Input('paper') paper: Paper;

  constructor(private route: ActivatedRoute, private paperService:PaperService, private router:Router) {
    
   }

  ngOnInit() {
  }
  onDelete(){
    this.paperService.deletePaper(this.paper.paperId).subscribe(
      (res)=>{
        console.log("paper deleted");
        this.router.navigate["/teacherBar/tuitionPortal"];
      }
    )
  }
  onPapers(){
    this.router.navigate["/addPapers"];
  }
}
