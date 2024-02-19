import { Component, EventEmitter, Output } from '@angular/core';
import { DbzCharacters } from '../../interfaces/dbz.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.html',
})
export class DbzAddCharacter {
  @Output()
  public onNewCharacter: EventEmitter<DbzCharacters> = new EventEmitter(); //Esta sintaxis casi siempre es la misma para enviar formularios

  public character: DbzCharacters = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
