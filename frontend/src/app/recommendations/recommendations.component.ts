import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})

export class RecommendationsComponent implements OnInit {

  constructor( private BooksService: BooksService, private UsersService: UsersService, public _auth: AuthService, private _router: Router, private ActivatedRoute: ActivatedRoute ) { }

  title:String = "Books you may like";

  books = [{
    _id : '',
    title : '',
    author : '',
    genre : '',
    description : '',
    review: ''
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

    this.BooksService.getMyRecs(this.user)
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
      console.log(this.books);
      })

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
