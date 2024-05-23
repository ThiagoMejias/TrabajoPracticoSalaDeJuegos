import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
import { Auth, user } from '@angular/fire/auth';
import { MatIconModule } from '@angular/material/icon';

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
  actualEmail: string | null = null;
  firebaseAuth = inject(Auth)
  user$ = user(this.firebaseAuth);
  constructor(private chatService: ChatService, private authService : AuthService) {}

  ngOnInit(): void {
    if (this.authService.currentUserSig != null) {
     
      this.user$.subscribe(user =>{
        this.actualEmail = user!.email;
        console.log(this.actualEmail);
        
      });
      
      this.messages$ = this.chatService.getMessages();
      this.messages$.subscribe(messages =>console.log(messages));
    }
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
