import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor( private BooksService: BooksService, public _auth: AuthService, private _router: Router, private ActivatedRoute: ActivatedRoute ) { }
  
  title:String = "Books list";

  books = [{
    _id : '',
    title : '',
    author : '',
    genre : '',
    description : ''
  }]

  user = { userid : '' }


  showShortDesciption = true

 alterDescriptionText(book) {
    this.showShortDesciption = !this.showShortDesciption
 }

  ngOnInit(): void {

    this.ActivatedRoute.queryParams
        .subscribe(params => {
              this.user.userid = params['_id'];
              console.log(this.user.userid)
        })

    this.BooksService.getBooks().subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
      console.log(this.books);
  })
  }

  deleteBook(book)
  {
    if(confirm("Are you sure to delete?"))
    {
      this.BooksService.deleteBook(book);
      console.log("Delete called");
      alert("Deleted book");
      location.reload();
    }
  }

  addFavs(book)
  {
    if(confirm("Add book to your Favorites & Read list?"))
    {
      this.BooksService.addFavs(book, this.user)     
      .subscribe(
        res => {
          if(res.message == "Success")
          {
            alert("Added book to your favorites and read list.");
            location.reload();
          }
          if(res.message == "Failed")
          {
            alert("Book already exists in your favorites list.");
          }
        }
      )
    }
  }

  addRead(book)
  {
    if(confirm("Add book to your Read list?"))
    {
      this.BooksService.addRead(book, this.user)     
      .subscribe(
        res => {
          if(res.message == "Success")
          {
            alert("Added book to your read list.");
            location.reload();
          }
          if(res.message == "Failed")
          {
            alert("Book already exists in your list.");
          }
        }
      )
    }
  }

}
