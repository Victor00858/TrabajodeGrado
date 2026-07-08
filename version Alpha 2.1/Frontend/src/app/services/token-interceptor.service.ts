import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private AuthService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.AuthService.getToken()
    if (!token) return next.handle(req);

    const tokenizeReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(tokenizeReq);
  }

}
