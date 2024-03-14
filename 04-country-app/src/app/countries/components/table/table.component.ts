import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-table',
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

  public status:string='default'

  constructor(private service:CountriesService){

    this.service.status$.subscribe(status=>{
      this.status=status
    })
  }

@Input() countries:Country[] =[]



}
