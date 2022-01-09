import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { BOOKS } from '../mock-book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   books : Book[] = BOOKS;

  // book: Book =  { id: "1", title: 'The Lord of the Rings: Fellowship of the Ring', author: 'John R. R. Tolkien', publisher: 'Neolit'}
 
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
