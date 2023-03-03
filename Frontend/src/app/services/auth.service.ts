import { observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL  = 'http://localhost:4000';

  constructor(private http: HttpClient,
    private Router: Router) { }

  SignIn(user: any) {
    return this.http.post<any>(this.URL + '/login', user)
  }

  LoggedIn() : boolean {
    return !!localStorage.getItem('token') 
  }

  getToken() {
    return localStorage.getItem('token');
  }

  Logout(){
    localStorage.removeItem('token');
    this.Router.navigate(['/login']);
  }
  Profile(){
    localStorage.getItem('token');
    this.Router.navigate(['/Losses']);

  }
}
