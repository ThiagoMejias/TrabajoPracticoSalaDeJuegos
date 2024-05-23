import { Component } from '@angular/core';
import { WordService } from '../../../../services/word.service';
import { CommonModule } from '@angular/common';
import { TransaltionService } from '../../../../services/transaltion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
  public title: string = "Ahorcado";
  public idioma: string = 'es';
  public wordToGuess: string = "";
  public lettersWordToGuess!: string [];
  public palabraOculta: string = "";
  public tries: number = 0;
  public inGame : boolean = false;
  public maxTries : number = 7
  public letters: string[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", 'ñ', "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  public isLetterDisabled: boolean[] = Array(this.letters.length).fill(false);
  public correctLetters: { [key: string]: boolean } = {};
  constructor(private wordService: WordService, private _translateService: TransaltionService) {

   }
 
  async startGame(): Promise<void> {
    this.inGame = true;
    this.tries = 0;
    this.correctLetters = {}
    this.isLetterDisabled.fill(false);
    this.wordToGuess = (await this.getRandomWord())[0];
    this.wordToGuess = await this._translateService.translate(this.wordToGuess);
    this.correctLetters = {};
    for (const letter of this.wordToGuess) {
        this.correctLetters[letter] = false;
    }
    this.lettersWordToGuess = this.wordToGuess.split('');
  

  }

  isLetterVisible(letter: string): boolean {
    return this.correctLetters[letter];
  }

  checkLetter(letter: string, index : number): void {
    if (this.wordToGuess.includes(letter)) {
      this.correctLetters[letter] = true;
    } else{
      this.tries++;
    }
    this.isLetterDisabled[index] = true;
     this.checkPlayerWin();
  }



  async checkPlayerWin(): Promise<void> {
    let titlePersonalized: string ='';
    let textPersonalized: string = '';
    if (Object.values(this.correctLetters).every(value => value == true)) {
      titlePersonalized = '¡Felicidades!';
      textPersonalized = '¡Has ganado! ¿Desea jugar de nuevo?';
   
    } else if (this.tries == this.maxTries) {
      this.isLetterDisabled.fill(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      titlePersonalized = '¡Lo siento!';
      textPersonalized = `¡Has perdido! La palabra correcta era ${this.wordToGuess} \n ¿Desea jugar de nuevo?`;
    }
    if(titlePersonalized != ''){
      this.isLetterDisabled.fill(true);
      Swal.fire({
        backdrop: false,
        background: '#fff !important',
        color: 'white',
        title: `${titlePersonalized}`,
        text: `${textPersonalized}`,
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


  

  
  //#region llamadas a servicios  

  
    getRandomWord(): Promise<string> {
      return new Promise((resolve, reject) => {
        this.wordService.getRandomWord().subscribe(
          (word) => {
            this.wordToGuess = word;
            resolve(word);
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

