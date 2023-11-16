// * Angular Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// * Angular modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// * Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// * Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/sections/components/header/header.component';
import { LoginComponent } from './layout/login/login.component';
import { NavMenuComponent } from './layout/sections/components/nav-menu/nav-menu.component';
import { RegisterComponent } from './layout/register/register.component';
import { ChartGrapicComponent } from './layout/sections/home/components/line-grapic/chart-grapic.component';
import { TarjetasComponent } from './layout/sections/home/tarjetas/tarjetas.component';
import { BarrasGrapicComponent } from './layout/sections/home/components/barras-grapic/barras-grapic.component';
import { HomeComponent } from './layout/sections/home/home.component';
import { BalanceComponent } from './layout/sections/home/balance/balance.component';

import { NgApexchartsModule } from 'ng-apexcharts';

// * Environment
import { environment } from '../environments/environment';
import { SucursalesComponent } from './layout/sections/sucursales/sucursales.component';
import { VentasComponent } from './layout/sections/ventas/ventas.component';
import { ClientesComponent } from './layout/sections/clientes/clientes.component';
import { AddeditComponent } from './layout/addedit/addedit.component';
import { ConfirmDialogComponent } from './layout/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ChartGrapicComponent,
    TarjetasComponent,
    BarrasGrapicComponent,
    HomeComponent,
    BalanceComponent,
    SucursalesComponent,
    VentasComponent,
    ClientesComponent,
    AddeditComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgApexchartsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
