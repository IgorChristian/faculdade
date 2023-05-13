import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AuthGuard } from './services/auth/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FeedComponent } from './components/feed/feed.component';
import { CadasReceitaComponent } from './components/cadas-receita/cadas-receita.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    SidebarComponent,
    ProfileComponent,
    AdminComponent,
    CadasReceitaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // Defina aqui as rotas que não devem incluir o componente de navegação fixo
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: RegisterComponent },
      // Todas as outras rotas incluirão o componente de navegação fixo
      { path: '**', component: AppComponent },
    ]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
