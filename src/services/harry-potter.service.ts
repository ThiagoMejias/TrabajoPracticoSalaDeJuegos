import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private urlApi = "https://hp-api.onrender.com/api/characters";
  constructor(private http: HttpClient) { }
  
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.urlApi).pipe
      (map(data => data.map((item : any)=> ({
        nameCharacter: item.name,
        urlImg: item.image
      })))
      );
  }


}
