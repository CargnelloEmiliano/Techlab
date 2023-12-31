import { Injectable } from '@angular/core';

// * Material

import { MatSnackBar } from '@angular/material/snack-bar';

// * Components
import { ErrorComponent } from 'src/app/shared/snackbar/error/error.component';
import { InformationComponent } from 'src/app/shared/snackbar/information/information.component';
import { SuccessComponent } from 'src/app/shared/snackbar/success/success.component';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private snackBar: MatSnackBar) {}


  notification(statusMessage: string, tipo?: string, duration?: number) {
    if (tipo) {
      let snackBar: any;
      if (tipo === 'success') {
        snackBar = SuccessComponent;
      } else if (tipo === 'warning') {
        snackBar = InformationComponent;
      } else if (tipo === 'error') {
        snackBar = ErrorComponent;
      }
      return this.snackBar.openFromComponent(snackBar, {
        duration: duration || 5000,
        data: statusMessage,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    } else {
      return this.snackBar.open(statusMessage, 'Cerrar', {
        duration: duration || 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
  }

//   openLoading(message: string = 'Cargando...') {
//     if (!this.dialogRef) {
//       this.dialogRef = this.matDialog.open(LoaderComponent, {
//         disableClose: true,
//       });
//       this.dialogRef.componentInstance.title = message;
//       this.dialogRef.updateSize('200px');
//       return this.dialogRef.afterClosed();
//     } else {
//       return undefined;
//     }
//   }

//   closeLoading(time?: number) {
//     if (this.dialogRef) {
//       setTimeout(() => {
//         this.dialogRef?.close();
//         this.dialogRef = null;
//       }, time || 0);
//     }
//   }
}
