import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adivina-el-numero',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adivina-el-numero.component.html',
  styleUrl: './adivina-el-numero.component.css'
})
export class AdivinaElNumeroComponent {
  randomNumber!: number;
  guess!: number;
  message!: string;
  timeLeft!: number;
  interval: any;
  score : number = 0;
  difficulty : string = "";

  constructor() {

  }

  ngOnInit(): void {
   
  }
  
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  setDifficulty(difficulty: string): void {
    this.difficulty = difficulty;
    this.startNewGame();
  }

  showDifficulty(): void {
    this.difficulty = "";
  }
  startNewGame(): void {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.guess = 0;
    this.message = 'Introduce un número entre 1 y 100';
    console.log(this.randomNumber);
    
    this.timeLeft = 30; 
    this.startTimer();
  }

  startTimer(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.message = '¡Tiempo agotado! Has perdido.';
        clearInterval(this.interval);
      }
    }, 1000);
  }

  getCounterClass() {
    if (this.timeLeft <= 10) {
      return 'red';
    } else if (this.timeLeft <= 20) {
      return 'yellow';
    } else {
      return '';
    }
  }

  checkGuess(): void {
    if (this.timeLeft > 0) {
      if (this.difficulty === 'easy') {
        this.checkEasyGuess();
      } else if (this.difficulty === 'hard') {
        this.checkHardGuess();
      }
    }
  }
  checkEasyGuess(): void {
    if (this.timeLeft > 0) {
      if (this.guess < this.randomNumber) {
        this.message = 'El número es mayor';
      } else if (this.guess > this.randomNumber) {
        this.message = 'El número es menor';
      } else {
        this.message = '¡Correcto! Has adivinado el número, su puntaje es: ' + this.calculateScore();
        clearInterval(this.interval);
      }
    }
  }

  checkHardGuess(): void {
    const difference = Math.abs(this.guess - this.randomNumber);
    if (difference === 0) {
      this.message = '¡Correcto! Has adivinado el número, su puntaje es: ' + this.calculateScore();
      clearInterval(this.interval);
    }else if(difference <= 5){
      this.message = 'Te estas quemando!';
    } else if (difference <= 10) {
      this.message = '¡Caliente!';
    } else if (difference <= 20) {
      this.message = '¡Tibio!';
    } else if(difference <= 30) {
      this.message = '¡Frío!';
    }else{
      this.message = 'Te estas congelando!'
    }
  }

  calculateScore() {
    return  this.difficulty == "easy" ? this.score = this.timeLeft * 3 : this.score = this.timeLeft * 6 ;
  }

}
