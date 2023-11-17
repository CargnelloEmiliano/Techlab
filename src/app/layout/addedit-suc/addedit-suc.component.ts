import { Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { getErrorMessage } from 'src/app/core/validators/character.validator';

@Component({
  selector: 'app-addedit-suc',
  templateUrl: './addedit-suc.component.html',
  styleUrls: ['./addedit-suc.component.scss']
})
export class AddeditSucursalesComponent {
  public formGroup: UntypedFormGroup = new UntypedFormGroup({});
  public activeTabIndex = 0;
  public errorFecha = false;
  public errMessage = getErrorMessage;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.formGroup = new UntypedFormGroup({
      num_suc: new UntypedFormControl(
        this.data.num_suc ? this.data.num_suc.trim() : '',
        Validators.compose([Validators.required])
      ),
      nombre: new UntypedFormControl(
        this.data.nombre ? this.data.nombre : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      direccion: new UntypedFormControl(
        this.data.direccion ? this.data.direccion : 0,
        Validators.compose([
          Validators.required,
          Validators.maxLength(100),
        ])
      ),
      empleados: new UntypedFormControl(
        this.data.empleados ? this.data.empleados : '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(8),
        ])
      ),
    });
  }

  ngOnInit() {}

  public closeDialog(): void {
    this.dialogRef.close(false);
  }


  public confirm(): void {
    if (this.formGroup.valid) {
      this.dialogRef.close({
        nombre: this.formGroup.get('nombre')?.value,
        num_suc: this.formGroup.get('num_suc')?.value,
        direccion: this.formGroup.get('direccion')?.value,
        empleados: this.formGroup.get('empleados')?.value,
      });
    }
  }
}
