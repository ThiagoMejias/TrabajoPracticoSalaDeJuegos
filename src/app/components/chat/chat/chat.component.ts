import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
import { Auth, user } from '@angular/fire/auth';
import { MatIconModule } from '@angular/material/icon';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule,CommonModule, MatIconModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages$!: Observable<any[]>;
  newMessage: string = '';
  isOpen : boolean = false;
  userLogin : boolean = false;
  actualEmail: string | null = null;
  firebaseAuth = inject(Auth)
  user$ = user(this.firebaseAuth);
  constructor(private chatService: ChatService, private authService : AuthService,
    private datePipe: DatePipe) {}

  ngOnInit(): void {
    if (this.authService.currentUserSig != null) {
      this.user$.subscribe(user =>{
        if(user){
          this.userLogin = true;
        }
      });
      this.actualEmail = this.authService.getUser();
      this.messages$ = this.chatService.getMessages();
      
    }
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
    console.log(this.messages$.subscribe(data =>
      console.log(data)
      
    ));
    console.log(this.actualEmail);
    
  }

  convertTimestamp(timestamp: Timestamp): any {
    return this.datePipe.transform(timestamp.toDate(), 'short');
  }
  
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
