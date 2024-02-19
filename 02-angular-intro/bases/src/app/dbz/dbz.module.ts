import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


import { MainPageComponent } from './pages/main-page.component';
import { DbzList } from './components/dbz-list/dbz-list.component.ts.component';
import { DbzAddCharacter } from './components/add-character/add-character.component';



@NgModule({
  declarations: [MainPageComponent, DbzList, DbzAddCharacter],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports:[MainPageComponent, DbzList, DbzAddCharacter]
})
export class DbzModule { }
