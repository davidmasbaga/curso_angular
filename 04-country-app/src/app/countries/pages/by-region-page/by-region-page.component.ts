import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public region:Country[]=[]
  constructor(private countryService:CountriesService){}

  searchByRegion(term:string){
    this.countryService.searchRegion(term).subscribe(region=>this.region=region)

  }

}
