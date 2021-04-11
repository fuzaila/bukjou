import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Router } from '@angular/router';
import { BlogsModel } from '../blog/blogs.model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  constructor(private BlogsService: BlogsService, private _router: Router) { }

  blogItem = new BlogsModel(null, null, null, null);

  ngOnInit(): void {
  }

  addBlog()
  {
    if(confirm("Do you want to continue to add the blog?"))
    {
      this.BlogsService.newBlog(this.blogItem);
      console.log("Add blog called");
      alert("Successfully added!");
      this._router.navigate(['/admindash/blog']);
    }
  }


}
