import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  constructor( private BooksService: BooksService, public _auth: AuthService, private _router: Router, private ActivatedRoute: ActivatedRoute ) { }

  title:String = "My Books";

  books = [{
    _id : '',
    title : '',
    author : '',
    genre : '',
    description : ''
  }]

  user = { userid : '' }

  showShortDesciption = true

  alterDescriptionText(book) 
  {
    this.showShortDesciption = !this.showShortDesciption
  }

  ngOnInit(): void 
  {
    this.ActivatedRoute.queryParams
        .subscribe(params => {
              this.user.userid = params['_id'];
        })

    this.BooksService.getMyBooks(this.user)
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
      })
  }

  deleteMyBook(book)
  {
    if(confirm("Are you sure to delete book from your read list? This will also remove the book from your favorites."))
    {
      this.BooksService.deleteMyBook(book, this.user)      
      .subscribe(
        res => {
          if(res.message == "Success")
          {
            alert("Deleted book from your list.");
            this._router.navigate(['userdash/:' + this.user.userid + '/books']);
          }
          if(res.message == "Failed")
          {
            alert("Failed to delete book.");
          }
        }
      )
    }
  }

  addFavs(book)
  {
    if(confirm("Add book to your Favorites?"))
    {
      this.BooksService.addFavs(book, this.user)     
      .subscribe(
        res => {
          if(res.message == "Success")
          {
            alert("Added book to your favorites.");
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

}
