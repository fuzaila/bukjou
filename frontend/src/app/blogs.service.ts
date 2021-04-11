import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor( private http:HttpClient ) { }

  getBlogs(){
    return this.http.get("http://localhost:3000/blogs");
  }

  newBlog(item){
    return this.http.post("http://localhost:3000/addblog", { blog: item})
    .subscribe(data => {console.log(data)})
  }
  
  deleteBook(item){
    return this.http.post("http://localhost:3000/deletebook", { book: item})
    .subscribe(data => {console.log(data)})
  }
}
