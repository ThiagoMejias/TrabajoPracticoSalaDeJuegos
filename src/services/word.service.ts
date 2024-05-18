import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class WordService {
  private apiUrl = 'https://random-word-api.vercel.app/api?words=';


  constructor(private http: HttpClient) {}

  getRandomWord(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}`);
  }



}
