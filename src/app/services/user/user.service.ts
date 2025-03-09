import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = null;

  constructor(
    private http: HttpClient
  ) { }
}
