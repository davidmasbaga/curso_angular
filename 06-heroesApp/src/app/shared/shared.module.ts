import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CustomChipComponent } from './components/custom-chip/custom-chip.component';




@NgModule({
  declarations: [
  ErrorPageComponent,
  CustomChipComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
   ErrorPageComponent,
   CustomChipComponent
  ]
})
export class SharedModule { }
