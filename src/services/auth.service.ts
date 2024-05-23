import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, user } from '@angular/fire/auth';
import {Firestore, collection,addDoc} from '@angular/fire/firestore';
import { User } from '../app/Inteface/user';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  firestore = inject(Firestore);
  usersCollection = collection(this.firestore, 'users');
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<User | null>(null);
  constructor() {
 
  }

  register(email: string, password: string, username: string): Observable<void> {
    const promiseUser = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(async (userCredential) => {
     
      const user = userCredential.user;
      
      const usersCollection = collection(this.firestore, 'users');
      await addDoc(usersCollection, {
        email: user.email,
        registrationDate: new Date(),
        username: username
      });
    });

    return from(promiseUser);
  }

   login(email: string, password: string) : Observable<void> {
    const promiseUser = signInWithEmailAndPassword(this.firebaseAuth, email, password).then(() =>{ });
    return from(promiseUser);
  }


  singOut() : Observable<void>{
   const promiseLogOut = this.firebaseAuth.signOut();
   return from(promiseLogOut);
  }


  public getErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
      case 'auth/invalid-credential':
        return 'La contraseña o el correo es invalido. Intente nuevamente';
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta. Por favor, inténtalo de nuevo.';
      case 'auth/email-already-in-use':
        return 'El correo electrónico ya está en uso. Por favor, utiliza otro.';
      case 'auth/too-many-requests':
        return 'Intento demasiadas veces.';
      case 'auth/weak-password':
        return 'La contraseña debe tener al menos 6 caracteres.';
      default:
        return 'Ocurrió un error desconocido. Por favor, inténtalo más tarde.';
    }
  }
}
