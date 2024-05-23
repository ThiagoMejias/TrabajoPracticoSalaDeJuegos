import { Injectable, inject } from '@angular/core';
import { Firestore, collection,collectionData} from '@angular/fire/firestore';
import { Auth,user } from '@angular/fire/auth';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }
  firebaseAuth = inject(Auth)
  firestore = inject(Firestore);
  user$ = user(this.firebaseAuth);
  userCollection = collection(this.firestore, 'users');
 
  getUsernameByEmail(email: string): Observable<string> {
    return collectionData(this.userCollection).pipe(
      map(data => {
        const user = data.find((user: any) => user.email === email);
        return user ? user["username"] : null;  // Devuelve el nombre de usuario o null si no se encuentra
      })
    );
  }



}

