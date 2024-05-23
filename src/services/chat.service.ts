import { Injectable, inject } from '@angular/core';
import {Firestore, collection,addDoc,collectionData} from '@angular/fire/firestore';
import { Auth,user } from '@angular/fire/auth';
import { UserService } from './user.service';
import { firstValueFrom, map } from 'rxjs';
import { orderBy } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

    constructor() { }
    private _userService = inject(UserService)
    firebaseAuth = inject(Auth)
    firestore = inject(Firestore);
    user$ = user(this.firebaseAuth);
    chatCollection = collection(this.firestore, 'chat');
 

    getMessages() {
      return collectionData(this.chatCollection).pipe(
        map((messages : any )=> {
          messages.sort((a : any, b : any) => a.timestamp - b.timestamp);
          return messages;
        })
      );
    }
    async sendMessage(text: string): Promise<void> {

      if (this.user$) {
        this.user$.subscribe(async user => {
         
          if(user?.email){
            let username = await firstValueFrom(this._userService.getUsernameByEmail(user.email));
              addDoc(this.chatCollection,{
              text : text,
              username: username,
              email : user?.email,
              timestamp: new Date()
              }).then((status) => {
                  console.log(status);  })
                .catch((error) => { 
                  console.log(error);
              });
          }
          
          
        });
         
      }
  }
}
