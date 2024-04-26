import { Component, OnInit } from '@angular/core';
import { QuienSoyComponent } from '../quien-soy/quien-soy.component';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuienSoyComponent,LoginComponent,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   constructor(private authService : AuthService) {}
   userLogin : boolean = false;
  ngOnInit(): void {
   this.authService.user$.subscribe(user =>{
    if(user){
      this.authService.currentUserSig.set( {email: user.email! });
      this.userLogin = true;
      
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
