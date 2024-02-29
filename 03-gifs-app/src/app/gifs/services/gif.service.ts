import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  public gifListService: Gif[] = [];

  private _tagsHistory: string[] = [];

  private apiKey: string = 'uYo6JM1fjC9d9tU12gNRmdWPRJ9jFHrN';

  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {

    this.getFromLocalStorage();
    console.log("Gif service Ready")
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    //Condición, si ya exite filtramos y sólo mostramos uno
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocaStorage();
  }

  private saveLocaStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private getFromLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return
    this.searchTagService(this._tagsHistory[0])
  }

  public searchTagService(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((res) => {
        this.gifListService = res.data;
      });
  }



}
