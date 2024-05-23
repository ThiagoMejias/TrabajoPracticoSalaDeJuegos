import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Question} from '../app/Inteface/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private apiUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) { }


  getRandomQuestions(quantity: number): Observable<Question[]> {
    const url = `${this.apiUrl}?amount=${quantity}&type=multiple`;
    return this.http.get<{ results: Question[] }>(url).pipe(
      map((response : any) => response.results)
    );
  }

  
}
