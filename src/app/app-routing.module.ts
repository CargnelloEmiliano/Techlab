import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { RegisterComponent } from './layout/register/register.component';
import { HomeComponent } from './layout/sections/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { ClientesComponent } from './layout/sections/clientes/clientes.component';
import { SucursalesComponent } from './layout/sections/sucursales/sucursales.component';
import { VentasComponent } from './layout/sections/ventas/ventas.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'ventas', component: VentasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
