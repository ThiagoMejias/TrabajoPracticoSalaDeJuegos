import { Component } from '@angular/core';
import { DeckOfCardsService } from '../../../../services/deck-of-cards.service';

@Component({
  selector: 'app-mayor-menor',
  standalone: true,
  imports: [],
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MayorMenorComponent {
  constructor(private deckService: DeckOfCardsService) {
      this.getRandomCard();
  }









   
  //#region llamadas a servicios  

  
  getRandomCard(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.deckService.getRandomCard().subscribe(
        (card) => {
          console.log(card);
          resolve(card);
        },
        (error) => {
          console.error('Error fetching random word:', error);
          reject('-1');
        }
      );
    });
  }


//#endregion
}
