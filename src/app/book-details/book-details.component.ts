import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../model/book';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  [x: string]: any;

  constructor(
    private router: Router,
    private cookie: CookieService
  ) { 

   }

  ngOnInit(): void {
    /*
    let id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    let title = this.activatedRoute.snapshot.params.title;
    console.log(title);


    this.activatedRoute.paramMap.subscribe(params => {
      id = params.get('id');
      console.log(id);
      title = params.get('title');
      console.log('title');

      
    }

    )

        let cookieValue = this.cookie.get('');

    console.log(cookieValue)
    */


    this.getBookObj();
  }

  detsBookObj!: Book;
  getBookObj() {
    let storedItem = localStorage.getItem('objBook');
    if(storedItem !== null) {
      let bookObj = JSON.parse(storedItem);
      this.detsBookObj = bookObj;
      //console.log(this.detsBookObj);
    } 
    }

  clickBack() {
    this.router.navigateByUrl('/home')
  }

  onFavorite(){
    
  }
}


