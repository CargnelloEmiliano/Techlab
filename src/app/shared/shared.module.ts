import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ErrorComponent } from './snackbar/error/error.component';
import { InformationComponent } from './snackbar/information/information.component';
import { SuccessComponent } from './snackbar/success/success.component';


@NgModule({
  declarations: [
    SuccessComponent,
    ErrorComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    MatTableModule,
    NgApexchartsModule,
    MatPaginatorModule  
  ],
  providers: [
  ],
})
export class SharedModule {}
