import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})



export class ListComponent {
public heroNames:string[]=['Spiderman','Ironman','Hulk','Thor']
public deletedHero?:string;


deleteLastHero(){
 this.deletedHero = this.heroNames.pop()

}
}
