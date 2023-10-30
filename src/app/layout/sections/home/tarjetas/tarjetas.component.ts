import { Component, Input } from '@angular/core';
import { ILineGrapic } from 'src/app/core/models/line-grapic.interface';
import { ICard } from 'src/app/core/models/tarjeta.interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent {

  @Input() public data: ICard = {};
}
