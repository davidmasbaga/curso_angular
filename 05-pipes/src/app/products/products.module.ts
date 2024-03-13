import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ColorsPipe } from './pipes/colors.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPagesComponent,
    UncommonPagesComponent,
    OrderComponent,
    //Pipes
    ToggleCasePipe,
    SortByPipe,
    CanFlyPipe,
    ColorsPipe

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
