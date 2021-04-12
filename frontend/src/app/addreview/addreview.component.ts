import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor( private ActivatedRoute: ActivatedRoute, private BooksService: BooksService, private UsersService: UsersService , private _router: Router ) { }

  book = {
    _id : '',
    title : '',
    author : '',
    genre : '',
    description : '',
    image : '',
    review: ''
  }

  user = { userid: '' }

  title = '';
  author = '';

  ngOnInit(): void {

        this.ActivatedRoute.queryParams
        .subscribe(params => {
          // console.log(params);

          this.user.userid = params['_id'];

          this.book._id = params['bookid'];
          this.book.title = params['title'];
          this.book.author = params['author'];
          this.book.genre = params['genre'];
          this.book.description = params['description'];
          this.book.image = params['image'];
        })

        this.title = this.book.title;
        this.author = this.book.author;

  }

  addReview(book)
  {
    if(confirm("Are you sure you want to make the changes?"))
    {
      console.log(book.review);
      this.UsersService.addReview(this.book.review, this.book._id, this.user.userid);
      alert("Book details are updated!");
      location.reload();
    }
  }

}
