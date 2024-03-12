import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        routerLink: 'number',
        items: [
          { label: 'Textos y Fechas ', icon: 'pi pi-align-left', routerLink:"/" },
          { label: 'Números', icon: 'pi pi-dollar', routerLink: 'number' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: 'uncommon' },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [{ label: 'Otro Elemento', icon: 'pi pi-cog' }],
      },
    ];
  }
}
