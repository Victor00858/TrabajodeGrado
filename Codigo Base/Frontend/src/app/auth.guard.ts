import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private AuthService: AuthService,
    private Router: Router){

  }


  canActivate() : boolean {
    if (this.AuthService.LoggedIn()) {
     return true; 
    }
    this.Router.navigate(['/login']);
    return false;
  }
  
  
}
