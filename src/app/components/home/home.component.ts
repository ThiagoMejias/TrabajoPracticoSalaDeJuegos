import { Component, OnInit } from '@angular/core';
import { QuienSoyComponent } from '../quien-soy/quien-soy.component';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { CardGamerComponent } from '../card-gamer/card-gamer.component';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuienSoyComponent,LoginComponent,MatIconModule,CardGamerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   constructor(private authService : AuthService, private chatService : ChatService) {}
   userLogin : boolean = false;
  ngOnInit(): void {
   this.authService.user$.subscribe(user =>{
    if(user){
      this.authService.currentUserSig.set( {email: user.email! });
      this.userLogin = true;
      // this.chatService.sendMessage("test");
    }else{
      this.authService.currentUserSig.set(null);
      this.userLogin = false;
    }
   })
  }

  logout(){
    this.authService.singOut();
  }
  
}
