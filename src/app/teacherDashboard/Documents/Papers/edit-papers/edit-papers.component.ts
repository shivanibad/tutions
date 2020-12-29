import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Paper } from 'src/app/classes/paper';
import { PaperService } from 'src/app/Services/paper.service';

@Component({
  selector: 'app-edit-papers',
  templateUrl: './edit-papers.component.html',
  styleUrls: ['./edit-papers.component.css']
})
export class EditPapersComponent implements OnInit {


  editForm: FormGroup = this.formBuilder.group({
    'name': new FormControl('', [Validators.required]),
    'subject': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'class': new FormControl('', [Validators.required]),
    'file': new FormControl('', [Validators.required]),
  });

  no: string;
  papers: Paper;
  
  isVideoAdded: boolean = false;
  isFailed:boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router , private paperService: PaperService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.no = params.get('no');
      console.log(this.no);
    });
    this.getPapersbyId();
  }

  getPapersbyId() {
    var numberValue = Number(this.no);
    this.paperService.getPaperById(numberValue).subscribe(
      (res) => {
        this.papers = res;
        console.log(this.papers);
        this.editForm.patchValue({
          name: this.papers.paperName,
          subject: this.papers.subject,
          date: "",
          class: this.papers.paperClass,
        });
      }
    )
  }

  onSave() {
    this.papers.paperName = this.editForm.value['name'];
    this.paperService.editPaper(this.papers).subscribe(
      (res)=>{
        console.log("edited");
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



