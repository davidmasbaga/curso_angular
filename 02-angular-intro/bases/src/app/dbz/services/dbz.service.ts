import { Injectable } from '@angular/core';
import { DbzCharacters } from '../interfaces/dbz.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: DbzCharacters[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Frezzeer',
      power: 7500,
    },
    {
      id: uuid(),
      name: 'Bu',
      power: 12000,
    },
  ];

  // onDeleteCharacter(index:number):void{

  //   this.characters.splice(index, 1)

  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  onNewCharacter(character: DbzCharacters): void {
    const newCharacter: DbzCharacters = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }
}
