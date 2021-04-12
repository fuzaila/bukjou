import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient ) { }

  newUser(item){
    return this.http.post<any>("http://localhost:3000/adduser", { user: item })
  }

  // getMyReviews(item){
  //   return this.http.post<any>("http://localhost:3000/myreview", { user: item })
  // }

  addReview(review, bookid, userid){
    
    var info = {
      user: userid,
      book: bookid,
      review: review
    }
    console.log(info);
    return this.http.post<any>("http://localhost:3000/addreview", { user: info })
  }

}
