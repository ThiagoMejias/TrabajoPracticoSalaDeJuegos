import { Injectable } from '@angular/core';
import { Question } from '../app/Inteface/question';
import translate from 'translate';
@Injectable({
  providedIn: 'root'
})
export class TransaltionService {

  constructor() { }
  async translateQuestions(questions: Question[]): Promise<Question[]> {
    try {
      const translatedQuestions: Question[] = [];
      
      for (const question of questions) {
        const translatedQuestion: Question = {
          category: await this.translate(question.category),
          type: await this.translate(question.type),
          difficulty: await this.translate(question.difficulty),
          question: await this.translate(question.question),
          correct_answer: await this.translate(question.correct_answer),
          incorrect_answers: await Promise.all(question.incorrect_answers.map(answer => this.translate(answer)))
        };
        
        translatedQuestions.push(translatedQuestion);
      }
      
      return translatedQuestions;
    } catch (error) {
      console.error('Error al traducir preguntas:', error);
      return [];
    }
  }

  async translate(texto: string): Promise<string> {
    try {

      const translation = await translate(
        texto
        .replace(/&#039;/g, '"')
        .replace(/&deg;/g, '°')
        .replace(/&quot;/g, '"')
        .replace(/&ouml;/g, 'ö')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, '&')
        .replace('&', 'and')
        .replace(/&nbsp;/g, ' ')
        , 'es');
       
        
      return translation;
    } catch (error) {
      console.error('Error de traducción:', error);
      return '';
    }
  }

  


}
