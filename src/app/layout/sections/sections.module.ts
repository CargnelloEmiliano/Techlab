// * Angular Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// * Angular modules
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// * Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AppssModule } from './app-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppssModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
