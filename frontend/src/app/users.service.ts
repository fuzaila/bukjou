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

}
