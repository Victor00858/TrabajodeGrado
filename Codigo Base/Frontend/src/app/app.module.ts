import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/inicio/header/header.component';
import { GaleriaComponent } from './components/inicio/galeria/galeria.component';
import { FooterComponent } from './components/inicio/footer/footer.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LossesComponent } from './components/losses/losses.component';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    GaleriaComponent,
    FooterComponent,
    AcercadeComponent,
    ContactoComponent,
    LossesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
