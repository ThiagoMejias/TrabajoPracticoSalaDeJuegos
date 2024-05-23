import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Card } from '../app/Inteface/card';

@Injectable({
  providedIn: 'root'
})
export class DeckOfCardsService {

  private apiUrl = 'https://deckofcardsapi.com/api/deck';
  private deckId: string | null = null;
  private deckInitialized: Promise<void>;

  constructor(private http: HttpClient) {
    this.deckInitialized = this.initializeDeck();
  }


  private initializeDeck(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get<{ deck_id: string }>(`${this.apiUrl}/new/shuffle/?deck_count=1`)
        .subscribe(data => {
          this.deckId = data.deck_id;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  getRandomCard(): Observable<{ card: Card, remaining: number }> {
    if (!this.deckId) {
      throw new Error('Deck ID is not set');
    }
    return this.http.get<{ cards: Card[], remaining: number }>(`${this.apiUrl}/${this.deckId}/draw/?count=1`)
      .pipe(
        map(response => {
          if (response.cards.length === 0) {
            // No more cards to draw, reshuffle the deck
            this.reshuffleDeck();
            throw new Error('No more cards in the deck');
          }
          return { card: response.cards[0], remaining: response.remaining };
        })
      );
  }

  reshuffleDeck(): Observable<boolean> {
    return this.http.get<{ success: boolean }>(`${this.apiUrl}/${this.deckId}/shuffle/`)
      .pipe(
        map(data => data.success) 
      );
  }

  waitForDeckInitialization(): Promise<void> {
    return this.deckInitialized;
  }


}

