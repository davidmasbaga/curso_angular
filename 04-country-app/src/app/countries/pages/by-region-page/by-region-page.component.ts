import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type ValidRegion = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania'

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public region: Country[] = [];
  public regions: ValidRegion[] = [

    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?:ValidRegion



  constructor(private countryService: CountriesService) {}



  searchByRegion(region: ValidRegion):void {

    this.selectedRegion =region
    this.countryService
      .searchRegion(region)
      .subscribe((region) => (this.region = region));
  }
}
