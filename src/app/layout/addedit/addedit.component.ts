import { Component, Inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.scss']
})
export class AddeditComponent {
  public formGroup: UntypedFormGroup = new UntypedFormGroup({});
  public activeTabIndex = 0;
  public errorFecha = false;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    
    this.formGroup = new UntypedFormGroup({
      nombre: new UntypedFormControl(
        this.data.nombre ? this.data.nombre.trim() : '',
        Validators.compose([Validators.required])
      ),
      apellido: new UntypedFormControl(
        this.data.apellido ? this.data.apellido : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      saldo: new UntypedFormControl(
        this.data.saldo ? this.data.saldo : 0,
        Validators.compose([
          Validators.required,
          Validators.maxLength(100),
        ])
      ),
      status: new UntypedFormControl(
        this.data.status ? this.data.status : '',
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
        apellido: this.formGroup.get('apellido')?.value,
        saldo: this.formGroup.get('saldo')?.value,
        status: this.formGroup.get('status')?.value,
      });
    }
  }
}
