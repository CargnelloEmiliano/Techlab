import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISections } from 'src/app/core/models/sections.interface';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})

export class NavMenuComponent {
  sections: ISections[] = [
   {title: 'Inicio', URL: '/inicio', icon: 'bi-alarm p-2'},
   {title: 'Prestamos', URL: '/prestamos', icon: 'bi-alarm p-2'},
   {title: 'Operaciones', URL: '/operaciones', icon: 'bi-alarm p-2'},
   {title: 'Ofert', URL: '/ofert', icon: 'bi-alarm p-2'},
   {title: 'Seguros', URL: '/seguros', icon: 'bi-alarm p-2'},
   {title: 'Puntos', URL: '/puntos', icon: 'bi-alarm p-2'},
   {title: 'Ayuda', URL: '/ayuda', icon: 'bi-alarm p-2'},
   {title: 'Cerrar sesión', URL: '/logout', icon: 'bi-alarm p-2'}, 

  // {title: 'Inicio', URL: '/inicio', icon: 'home'},
  // {title: 'Prestamos', URL: '/prestamos', icon: 'payment'},
  // {title: 'Operaciones', URL: '/operaciones', icon: 'compare_arrows'},
  // {title: 'Ofert', URL: '/ofert', icon: 'loyalty'},
  // {title: 'Seguros', URL: '/seguros', icon: 'security'},
  // {title: 'Puntos', URL: '/puntos', icon: 'card_giftcard'},
  // {title: 'Ayuda', URL: '/ayuda', icon: 'help_outline'},
  // {title: 'Cerrar sesión', URL: '/logout', icon: 'exit_to_app'}, 
  ]


  constructor(private router: Router){}
  
  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
