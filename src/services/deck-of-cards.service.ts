import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckOfCardsService {

  private apiUrl = 'https://deckofcardsapi.com/api/deck';

  constructor(private http: HttpClient) { }

  getRandomCard(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/new/draw/?count=1`);
  }
}
