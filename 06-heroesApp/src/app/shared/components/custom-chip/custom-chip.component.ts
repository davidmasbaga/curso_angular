import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-chip',
  templateUrl: './custom-chip.component.html',
  styleUrl: './custom-chip.component.css'
})
export class CustomChipComponent {
@Input()
public data:string=''
}
