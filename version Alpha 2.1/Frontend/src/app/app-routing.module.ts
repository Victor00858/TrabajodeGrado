import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import {SigninComponent} from './components/signin/signin.component';
import {GaleriaComponent} from './components/inicio/galeria/galeria.component';
import {LossesComponent} from './components/losses/losses.component'

import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: GaleriaComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path:'Losses',
    component: LossesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
