import { Component, EventEmitter, Output } from '@angular/core';
import { QuestionsService } from '../../../../services/questions.service';
import { Question } from '../../../Inteface/question';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question/question.component';
import { TransaltionService } from '../../../../services/transaltion.service';

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
  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  showResult: boolean = false;
  score: number = 0;
  correctAnswer: boolean = false;
  isWinner: boolean = false;
  textFinal: string = '';
  loading: boolean = false;
  constructor(private triviaService: QuestionsService, private _translationService : TransaltionService) { }

  ngOnInit(): void {
    this.getTriviaQuestions();
  }

   getTriviaQuestions(): void {
    this.loading = true;
    this.triviaService.getRandomQuestions(5).subscribe(async (data  : any)=> {
        this.questions = data;
        this.questions = await this._translationService.translateQuestions(this.questions);
        this.getOneQuestion();
        this.loading = false;
    });
  }

  getOneQuestion(): Question | null {
  
    if (this.questions.length === 0) {
      return null; 
    }

    const randomIndex = Math.floor(Math.random() * this.questions.length);
    const question = this.questions.splice(randomIndex, 1)[0];
    this.question = question;

    return this.question;
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
