import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { RegisterComponent } from './layout/register/register.component';
import { HomeComponent } from './layout/sections/home/home.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
