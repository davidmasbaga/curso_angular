import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

@Input() countries:Country[] =[]

}
