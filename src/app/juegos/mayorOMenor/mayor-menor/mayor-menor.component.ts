import { Component, OnInit } from '@angular/core';
import { DeckOfCardsService } from '../../../../services/deck-of-cards.service';
import { Card } from '../../../Inteface/card';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-mayor-menor',
  standalone: true,
  imports: [],
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MayorMenorComponent implements OnInit {
 

  public card! : Card;
  public score : number = 0;
  previousCard!: Card; 
  
  public deckHaveCards : boolean = true;

  constructor(private deckService: DeckOfCardsService) {
    
  }


  ngOnInit(): void {
   
    this.deckService.waitForDeckInitialization().then(() => {
      this.getRandomCard();
    }).catch(error => {
      console.error('Failed to initialize deck:', error);
    });
  }


 async startGame(){
    await this.reshuffleDeck();
    this.score = 0;
    this.deckHaveCards = true;
    this.getRandomCard();

  }

  async requestCard(condition: string): Promise<void> {
    const previousCardValue = this.getCardValue(this.card.value);
    await this.getRandomCard();
    const newCardValue = this.getCardValue(this.card.value);
   
  
    if ((condition === 'mayor' && newCardValue > previousCardValue) ||
        (condition === 'menor' && newCardValue < previousCardValue)) {
      this.score++;
    }else{
      if(newCardValue != previousCardValue){
        Swal.fire({
          backdrop: false,
          background: '#fff !important',
          color: 'white',
          title: `${"Perdio!"}`,
          text: `Su puntaje ha sido de ${this.score}`,
          confirmButtonText: 'Jugar nuevamente',
          cancelButtonText: 'Volver al menú principal',
          showCancelButton: true
      }).then((result) => {
          if (result.value) {
              this.startGame();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
             window.location.href = '';
          }
      });
      }
    }
  }
 

  private getCardValue(value: string): number {
    switch(value) {
      case 'ACE': return 1;
      case '2': return 2;
      case '3': return 3;
      case '4': return 4;
      case '5': return 5;
      case '6': return 6;
      case '7': return 7;
      case '8': return 8;
      case '9': return 9;
      case '10': return 10;
      case 'JACK': return 11;
      case 'QUEEN': return 12;
      case 'KING': return 13;

      default: return 0;
    }
  }
  //#region llamadas a servicios  

  getRandomCard(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.deckService.getRandomCard()
        .subscribe(
          data => {
            this.previousCard = this.card; 
            this.card = data.card; 
            this.deckHaveCards = data.remaining > 0;
            resolve(); 
          },
          error => {
            console.error(error.message);
            reject(error); 
          }
        );
    });
  }

  reshuffleDeck(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.deckService.reshuffleDeck()
        .subscribe(
          data => {
           resolve();
          },
          error => {
            console.error(error.message);
            reject(error); 
          }
        );
    });
  }
  
  

//#endregion

}

