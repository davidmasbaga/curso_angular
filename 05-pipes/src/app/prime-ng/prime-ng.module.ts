import { NgModule } from '@angular/core';

import {  MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel'
import { TerminalModule } from 'primeng/terminal';



@NgModule({
  declarations: [],

  exports:[MenubarModule,
  ButtonModule, FieldsetModule, CardModule, PanelModule, TerminalModule  ]
})
export class PrimeNgModule { }
