import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'colorsHero'
})

export class ColorsPipe implements PipeTransform {
  transform(value: number) {
    if(value===0){
      return 'red';
    }
    if(value===1){
      return 'black';
    }
    if(value===2){
      return 'blue';
    }
    if(value===3){
      return 'green';
    }
    return "No color"

  }
}
