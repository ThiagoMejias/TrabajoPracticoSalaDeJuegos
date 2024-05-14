import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile, user } from '@angular/fire/auth';
import { User } from '../app/Inteface/user';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<User | null| undefined>(undefined);
  constructor(private db : AngularFireDatabase) {
 
  }

   register(email: string, password: string, username : string) : Observable<void> {
     const promiseUser = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
                        .then((userCredential) =>{ 
                          const user = userCredential.user;
                          return updateProfile(user,{ 
                            displayName : username
                          }).then(() => {
                            const registrationDate = new Date().toISOString();
                            return this.db.object(`users/${user.uid}/registrationDate`).set(registrationDate);
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
