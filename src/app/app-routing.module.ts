import { PathLocationStrategy } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login', component:LoginComponent
  },
  { 
    path: '', redirectTo: './pages/home', pathMatch: 'full'
  },

  {
    path:'**', component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
