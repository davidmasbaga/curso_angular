import { Component } from '@angular/core';

@Component({
  selector: 'layout-hero-page',
  templateUrl: './layout-hero-page.component.html',
  styles: ``
})
export class LayoutHeroPageComponent {


  public sidebarItems =[
    {
      label:'Listado',
      icon:'label',
      url:'./list'
    },
    {
      label:'Añadir',
      icon:'add',
      url:'./new-hero'
    },
    {
      label:'Buscar',
      icon:'search',
      url:'./search'
    },
  ]
}
