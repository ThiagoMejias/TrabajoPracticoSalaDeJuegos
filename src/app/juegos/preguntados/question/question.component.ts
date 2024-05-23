import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Question } from '../../../Inteface/question';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit,OnChanges  {

  @Input() question!: Question; 
  optionsAnswer : string[] = [];
  selectedAnswer: string = '';
  @Output() answerSelected = new EventEmitter<boolean>(); 
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question']) {
      this.prepareQuestion();
    }
  }
  prepareQuestion(): void {
    console.log(this.question);
    this.optionsAnswer = [this.question.correct_answer, ...this.question.incorrect_answers];
    this.optionsAnswer.sort(() => Math.random() - 0.5);
  }
  
  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
    const isCorrect = (this.question.correct_answer == answer);
    this.answerSelected.emit(isCorrect);
  }

  nextQuestion(): void {
  
  }

}
