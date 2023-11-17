import {
  Input
} from "@angular/core";

import { Component } from '@angular/core';
import { ITransaction } from 'src/app/core/models/transaction.interface';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  displayedColumns: string[] = ['icon', 'nombre', 'monto', 'fecha', 'status'];
  @Input() public data: ITransaction[] = [];
  @Input() public number: any[] = [];

  constructor(){
    
  }

  ngOnInit(){
  }

  calcColor(element: string): string{
    switch(element){
      case 'Completado':
        return 'color: green'
      case 'Cancelado':
        return 'color: red'
      case 'trending_up':
        return 'color: green'
      case 'trending_down':
        return 'color: red'
      default:
        return 'color: gray'
    }
  }
}
