import { Component, Input, OnInit } from '@angular/core';
import { BOOKS } from '../mock-book';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  //[x: string]: any;


  @Input() book!: Book;
  
  selectedBook?: Book;

  constructor(
    private router: Router,
    //private cookie: CookieService,
  ) { }

  ngOnInit(): void {
 
  }

  clickSeeMore(book: Book): void {
    this.router.navigateByUrl('/book-details');
    this.selectedBook = book;
    console.log(book);
    let obj = localStorage.setItem('objBook', JSON.stringify(book));
    
    
   // document.cookie = JSON.stringify({book}); 
  }


  
}
