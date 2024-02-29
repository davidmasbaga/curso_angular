
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl:'./card.component.html',


})
export class CardComponent implements OnInit {

  @Input()
  public gif!:Gif;


  public copyUrl(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      // Aquí puedes agregar alguna notificación al usuario de que se ha copiado correctamente.
      console.log('URL copiada al portapapeles');
    }).catch(err => {
      console.error('Error al copiar la URL al portapapeles: ', err);
    });
  }
  ngOnInit(): void {
    if (!this.gif)  throw new Error('Gif property is required')
  }
}
