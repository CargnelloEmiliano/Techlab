import { Component } from '@angular/core';
import { ITransaction } from 'src/app/core/models/transaction.interface';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent {

  constructor(private _fireBase: FirebaseService, 
    private _utilService: UtilService){}

  data: ITransaction[] = [];
  number0: any[] = [];
  number1: any[] = [];
  number2: any[] = [];
  number3: any[] = [];
  number4: any[] = [];
  number5: any[] = [];
  number6: any[] = [];
  number7: any[] = [];
  number8: any[] = [];
  number9: any[] = [];
  number10: any[] = [];
  number11: any[] = [];

  ngOnInit(){
    this._fireBase.get('Sucursales').subscribe({
      next: (res) => {
        if(res.length > 0){
          for (let i = 1; i <= res.length; i++) {
            (this as any)[`number${i}`] = Array.from({ length: 11 }, () => Math.floor(Math.random() * 5001));
          }
        }
      },
    })

    
    this.getTransaction();
  }

  getTransaction(){
    this._fireBase.get('Transactions').subscribe({
      next: (res) => {
        this.data = res;
      },
      error: () => {
        this._utilService.notification('Error al cargar las sucursales', 'error')
      },
    })
  }

}
