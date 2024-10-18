import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent {

  public country?: Country;

  public constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {
    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id)))
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');
        return this.country = country;
      });
  }
}
