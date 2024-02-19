import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { DbzCharacters } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}


  //Para que funcione el método privado

  //Recuperamos todos los characters con un getter
  get characters():DbzCharacters[]{
    return [...this.dbzService.characters]
  }


//Creamos un método que llame al servicio
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }


  //Creamos un método que llame al servicio
  onNewCharacter(character:DbzCharacters):void{
    this.dbzService.onNewCharacter(character)
  }
}
