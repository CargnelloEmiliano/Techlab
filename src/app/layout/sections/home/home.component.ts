import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// * Interfaces
import { ICard } from 'src/app/core/models/tarjeta.interface';
import { ITransaction } from 'src/app/core/models/transaction.interface';

// * Services
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  displayedColumns: string[] = ['checkbox', 'monto', 'cuotas', 'fecha', 'mensual', 'interes', 'action'];
  data: ITransaction[] = [];
  card: ICard = {};
  constructor(private _fireBase: FirebaseService, 
    private _utilService: UtilService){}

    ngOnInit(){
    this.getTransaction();
    this.getCard();
  }

  getTransaction(){
    this._fireBase.get('Transactions').subscribe({
      next: (res) => {
        this.data = res;
      },
      error: () => {
        this._utilService.notification('Error al cargar las transacciones', 'error')
      },
    })
  }

  getCard(){
    this._fireBase.get('Tarjeta').subscribe({
      next: (res) => {
        this.card = res[0];
      },
      error: () => {
        this._utilService.notification('Error al cargar la tarjeta', 'error')
      },
    })
  }
}
