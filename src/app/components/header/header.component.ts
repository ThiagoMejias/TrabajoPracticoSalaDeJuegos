import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userLogin : boolean = false;
  constructor(private authService : AuthService) {}
  ngOnInit(): void {
    this.authService.user$.subscribe(user =>{
     if(user){
       this.userLogin = true;
     }else{
       this.userLogin = false;
     }
    })
   }
  logout(){
    localStorage.removeItem('user')
    this.authService.signOut();

    window.location.href = "/login";
  }
}
