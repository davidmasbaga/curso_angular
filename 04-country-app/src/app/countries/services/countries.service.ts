import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiurl: string = 'https://restcountries.com/v3.1';
  private statusSubject = new BehaviorSubject<string>('default'); // Usa BehaviorSubject para manejar el estado
  public status$ = this.statusSubject.asObservable();

  constructor(private http: HttpClient) {}


  private getCountriesRequest(url:string):Observable<Country[]>{
    this.statusSubject.next('loading');
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([])),
      tap(() => { this.statusSubject.next('finished'); })
      )
  }



  searchCountryByAlphaCode(code:string):Observable<Country | null>{

    const url=`${this.apiurl}/alpha/${code}`

    return this.http.get<Country[]>(url)

    .pipe(
     map( countries=> countries.length>0? countries[0]:null), //Valida una condición y devuelve algo si no la cumple (en este caso null si no hay pais)
     catchError(() => of(null))) //captura el error de la respuesta que le digamos en el of (en este caso null)

  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiurl}/capital/${term}`;
    return this.getCountriesRequest(url)
  }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiurl}/name/${term}`;
    return this.getCountriesRequest(url)
  }

  searchRegion(term:string):Observable<Country[]>{
    const url = `${this.apiurl}/region/${term}`;
    return this.getCountriesRequest(url)
  }



}
