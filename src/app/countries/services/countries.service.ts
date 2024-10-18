import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public searchCapital(capital: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${capital}`)
      .pipe(catchError(() => of([])));
  }

  public searchCountry(name: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${name}`)
      .pipe(catchError(() => of([])));
  }

  public searchRegion(region: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(catchError(() => of([])));
  }

  public searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${alphaCode}`)
      .pipe(
        map(countries => countries[0] || null),
        catchError(() => of(null)));
  }

}
