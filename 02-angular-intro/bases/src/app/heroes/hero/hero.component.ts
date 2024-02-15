import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name:string= 'Spiderman'
public age:number= 25
private city:string= 'New York, USA'


//los geters los invocamos sin parentensis ({{capitalizeName}})
get capitazeName():string{
  return this.name.toUpperCase()

}

//Los métodos los invocamos con parentesi {{getHeroDescription}}
getHeroDescription():string{
  return `${this.name} - ${this.age } - ${this.city}`
}


changeHero():void{
this.name = 'Ironman'

}

changeAge():void{
this.age=50
}


resetForm():void{
  this.name='Spiderman'
  this.age=25
}
}
