import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    usuario: '',
    password: ''
  };
  constructor(private AuthService: AuthService,
    private Router: Router) {
    
   }

  ngOnInit(): void {
  };

  SignIn() {
    this.AuthService.SignIn(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.Router.navigate(['/Losses']);
      },
      err => console.log('Error:', err)
    );
  }
}
