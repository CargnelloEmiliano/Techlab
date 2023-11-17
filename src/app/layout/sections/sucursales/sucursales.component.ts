
import { Component } from '@angular/core';
import { ITransaction } from 'src/app/core/models/transaction.interface';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { UtilService } from 'src/app/core/services/util.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddeditSucursalesComponent } from '../../addedit-suc/addedit-suc.component';
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent {
  displayedColumns: string[] = ['num_suc', 'nombre', 'direccion', 'empleados', 'acciones'];
  data: ITransaction[] = [];
  
  constructor(private _fireBase: FirebaseService, private _utilService: UtilService, private dialog: MatDialog){
    this.getTransaction()
  }

  calcColor(element: string): string{
    switch(element){
      case 'A':
        return 'color: green'
      case 'B':
        return 'color: red'
      case 'trending_up':
        return 'color: green'
      case 'trending_down':
        return 'color: red'
      default:
        return 'color: gray'
    }
  }

  getTransaction(){
    this._fireBase.get('Sucursales').subscribe({
      next: (res) => {
        this.data = res;
      },
      error: () => {
        this._utilService.notification('Error al cargar las Sucursales', 'error')
      },
    })
  }

  private openDialog(
    title: string,
    par_modo: string,
    edit: boolean,
    data?: any
  ): MatDialogRef<AddeditSucursalesComponent, any> {
    return this.dialog.open(AddeditSucursalesComponent, {
      data: {
        title: title,
        edit: edit,
        par_modo: par_modo,
        nombre: data?.nombre,
        direccion: data?.direccion,
        num_suc: data?.num_suc,
        empleados: data?.empleados
      },
    });
  }

  public new(): void {
    const dialogRef = this.openDialog(
      '',
      'C',
      true
    );

    dialogRef.afterClosed().subscribe((res) => {
      this._fireBase.add(res, 'Sucursales')
    })
  }

  async OnClickDelete(element: any){
    const respondes = await this._fireBase.delete('Sucursales', element.id);
  }

  async OnClickUpdate(element: any){
    const dialogRef = this.openDialog(
      '',
      'U',
      true,
      element
    );

    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
      if(res){
        this._fireBase.edit('Sucursales', res, element.id)
      }
    })
  }
}
