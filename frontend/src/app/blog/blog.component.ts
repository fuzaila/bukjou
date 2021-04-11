import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor( private BlogsService: BlogsService, public _auth: AuthService, private _router: Router, private ActivatedRoute: ActivatedRoute ) { }

  title:String = "Blogs";

  blogs = [{
    _id : '',
    title : '',
    date : '',
    brief : '',
    link : ''
  }]

  user = { userid : '' }

  ngOnInit(): void {

    this.ActivatedRoute.queryParams
        .subscribe(params => {
              this.user.userid = params['_id'];
              console.log(this.user.userid)
        })

    this.BlogsService.getBlogs().subscribe((data)=>{
      this.blogs = JSON.parse(JSON.stringify(data));

  })
  }

}
