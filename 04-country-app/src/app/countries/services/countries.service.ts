import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiurl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}


  searchCountryByAlphaCode(code:string):Observable<Country | null>{

    const url=`${this.apiurl}/alpha/${code}`

    return this.httpClient.get<Country[]>(url)

    .pipe(
     map( countries=> countries.length>0? countries[0]:null), //Valida una condición y devuelve algo si no la cumple (en este caso null si no hay pais)
     catchError(() => of(null))) //captura el error de la respuesta que le digamos en el of (en este caso null)

  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiurl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([]))); //Sirve para capturar si hay un error
  }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiurl}/name/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])))
  }

  searchRegion(term:string):Observable<Country[]>{
    const url = `${this.apiurl}/region/${term}`;
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])))
  }



}
