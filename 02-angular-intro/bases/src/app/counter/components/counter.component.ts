import { Component } from '@angular/core';

@Component({
  selector: 'counter-component',
 template:`
<p>Counter: {{counter}}</p>
<button class="fill" (click)="increaseBy()">+</button>
<button (click)="resetCounter()" >Reset</button>
<button class="fill" (click)="reduceBy()">-</button>

 `,
  styleUrl: './counter.component.css',
})

export class CounterComponent {
  public counter:number=0
  increaseBy(value: number = 1): void {
    this.counter += value;
  }
  reduceBy(value: number = 1): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 0;}



}

