import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  public constructor(private countriesService: CountriesService) { }

  public searchByCountry(term: string): void {
    this.countriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries;
    });
  }

}
