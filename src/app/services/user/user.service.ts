import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = null;

  constructor(
    private http: HttpClient
  ) { }

  loadUser(){
    let token = localStorage.getItem("token");

    if(token){
      this.http.get<User>("/api/user").subscribe(user => {
        this.user = user;
      });
    }
  }

  isValid() {
    if (this.user == null) {
      return false
    }
    return this.http.get("http://localhost:asdsd/api/token=?");
  }
}
