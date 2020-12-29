import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Book } from 'src/app/classes/book';
import { BookService } from 'src/app/Services/book.service';


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  books:Book[];
  searchedBooks:Book[];

  pageSize:number=10;
  page:number = 1;

  isEmpty:boolean = true;

  searchForm: FormGroup = this.formBuilder.group({
    'val': new FormControl('', [Validators.required]),
    'name': new FormControl('', [Validators.required])
  });

  constructor(private bookService:BookService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBookBySearch();
  }

  getBookBySearch(){    
    this.bookService.getAllBooks().subscribe(
      (res)=>{
        this.books = res;
        this.searchedBooks = res;

        if(this.searchedBooks.length>0){
          this.isEmpty = false;
        }
        else{
          this.isEmpty = true;
        }

        console.log(this.books);
      }
    )
  }

  search(){
    let value = this.searchForm.value['val'];
    this.searchedBooks = [];
    this.searchedBooks = this.books.filter((book) => book.bookName.toLowerCase().includes(value.toLowerCase()));

    if(this.searchedBooks.length>0){
      this.isEmpty = false;
    }
    else{
      this.isEmpty = true;
    }
    console.log(this.searchedBooks);
  }

}
