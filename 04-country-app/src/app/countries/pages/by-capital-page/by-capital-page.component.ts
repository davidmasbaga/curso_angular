import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

public capital:Country[]=[]

constructor(
  private countriesService:CountriesService

  ){


  }



searchByCapital(term:string){
this.countriesService.searchCapital(term).subscribe(countries=>{
this.capital= countries
});



}




}
