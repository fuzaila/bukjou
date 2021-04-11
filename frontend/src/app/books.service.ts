import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient ) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }

  getMyBooks(user){
    return this.http.post<any>("http://localhost:3000/mybooks", { user: user })
  }

  getMyFavBooks(user){
    return this.http.post<any>("http://localhost:3000/myfavbooks", { user: user })
  }

  newBook(item){
    return this.http.post<any>("http://localhost:3000/addbook", { book: item})
  }

  updateBook(item){
    return this.http.post("http://localhost:3000/updatebook", { book: item})
    .subscribe(data => {console.log(data)})
  }

  deleteBook(item){
    return this.http.post("http://localhost:3000/deletebook", { book: item})
    .subscribe(data => {console.log(data)})
  }

  addRead(item, user){
    return this.http.post<any>("http://localhost:3000/addread", { book: item, user: user})
  }

  addFavs(item, user){
    return this.http.post<any>("http://localhost:3000/addfavs", { book: item, user: user})
  }

  deleteMyFavs(item, user){
    return this.http.post<any>("http://localhost:3000/deletemyfavs", { book: item, user: user})
  }

  deleteMyBook(item, user){
    return this.http.post<any>("http://localhost:3000/deletemybook", { book: item, user: user})
  }

}
