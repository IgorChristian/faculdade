import { PathLocationStrategy } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadasReceitaComponent } from './components/cadas-receita/cadas-receita.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/auth/auth.guard';
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'feed', component: FeedComponent },
      { path: 'cadas-receita', component: CadasReceitaComponent }
    ]
  },
  
  {
    path:'login', component:LoginComponent
  },

  {
    path:'register', component:RegisterComponent
  },

  { 
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

  {
    path:'**', component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
