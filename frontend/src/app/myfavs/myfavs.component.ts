import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-myfavs',
  templateUrl: './myfavs.component.html',
  styleUrls: ['./myfavs.component.css']
})
export class MyfavsComponent implements OnInit {

  constructor( private BooksService: BooksService, public _auth: AuthService, private _router: Router, private ActivatedRoute: ActivatedRoute ) { }

  title:String = "My Favorite Books";

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
        })

    this.BooksService.getMyFavBooks(this.user)
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data));
     })
  }

  deleteMyFavs(book)
  {
    if(confirm("Are you sure to delete book from your Favorite list?"))
    {
      this.BooksService.deleteMyFavs(book, this.user)      
      .subscribe(
        res => {
          if(res.message == "Success")
          {
            alert("Deleted from your favorites.");
            // this._router.navigate(['userdash/:' + this.user.userid + '/myfavs']);
            location.reload();
          }
          if(res.message == "Failed")
          {
            alert("Failed to delete book.");
          }
        }
      )
    }
  }

}
