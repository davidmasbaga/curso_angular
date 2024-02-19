import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DbzCharacters } from '../../interfaces/dbz.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
})
export class DbzList {
  // @Output()
  // public onDeleteCharacter:EventEmitter<DbzCharacters>=new EventEmitter()

  @Input()
  public characterList: DbzCharacters[] = [];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;


    this.onDeleteId.emit(id);
  }
}
