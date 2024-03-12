import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css',
})
export class UncommonPagesComponent {
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public clients: string[] = ['Fernando', 'Maria', 'Ana', 'Pedro', 'Juana'];

  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos 1 cliente esperando',
    other: 'Tenemos # clientes esperando',
  };

  public randomObject = {
    hero: 'Ironman',
    age: 48,
    person: 'Tony Stark',
    isMarvel: true,
  };

  deleteClient(): void {
    this.clients.shift();
  }

  changePerson() {
    console.log('Hola mundo');
    this.name = 'Melissa';
    this.gender = 'female';
  }



  //Async Piper

  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value=>console.log(value))
  )


public promiseValue:Promise<string>= new Promise((resolve, reject)=>{

  setTimeout(()=>{
  resolve('Tenemos data')
  console.log('promesa')
  this.randomObject.hero = 'Spiderman'
  },6000)
})

}
