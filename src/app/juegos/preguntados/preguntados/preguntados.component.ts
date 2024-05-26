import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../../../Inteface/question';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question/question.component';
import { TransaltionService } from '../../../../services/transaltion.service';
import { HarryPotterService } from '../../../../services/harry-potter.service';
import { Characters } from '../../../Inteface/questionHarryPotter';
@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [CommonModule,QuestionComponent],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent {
  question!: Question ;
  questions!: Question[];
  characters! : Characters[]; 
  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  showResult: boolean = false;
  score: number = 0;
  correctAnswer: boolean = false;
  isWinner: boolean = false;
  textFinal: string = '';
  loading: boolean = true;
  constructor(private _harryPoterService : HarryPotterService) { }

  ngOnInit(): void {
    this.getTriviaQuestions();
  }

   getTriviaQuestions(): void {
    this.loading = true;
      
    this._harryPoterService.getCharacters().subscribe( (data : Characters[]) => {
      this.characters = data;  
      this.questions = this.transformToQuestions(this.characters);
      this.loading = false;
      this.getOneQuestion();

    })
  }

  getOneQuestion(): Question | null {

    const index = Math.floor(Math.random() * this.questions.length);
    this.question = this.questions.splice(index, 1)[0];
    console.log(this.question);
    
    return this.question;
   
  }

  transformToQuestions(characters: Characters[]): Question[] {
  
    return characters
    .filter(character => character.urlImg !== '') // Filtrar solo los personajes con URL de imagen válida
    .map(character => {
      const incorrectAnswers = this.getIncorrectAnswers(characters, character.nameCharacter);
      return {
        urlImg: character.urlImg,
        correct_answer: character.nameCharacter,
        incorrect_answers: incorrectAnswers
      };
    });
  }
  getIncorrectAnswers(characters: Characters[], correctAnswer: string): string[] {
    const incorrectAnswers = characters
      .filter(character => character.nameCharacter !== correctAnswer)
      .map(character => character.nameCharacter)
      const shuffledAnswers = incorrectAnswers.sort(() => Math.random() - 0.5);
      return shuffledAnswers.slice(0, 3);
  }
    
  handleAnswerSelected(isCorrect: boolean) {
    if (isCorrect) {
      this.score +=1;
      if(this.getOneQuestion() == null){
          this.loading = true;
          this.isWinner = true;
          this.showResult = true;
          this.textFinal = 'Felcidades! respondiste todas las preguntas. y sumaste 10 puntos extra';
          this.score += 10;
        }
    } else {
      this.loading = true;
      this.showResult = true;
      this.textFinal = 'Lo siento, perdiste!';
    }
  }

  async restart(): Promise<void> {
    this.showResult = false;
    this.currentQuestionIndex = 0;
    this.selectedAnswer = '';
    this.score = 0;
    await this.getTriviaQuestions();
  }

}
