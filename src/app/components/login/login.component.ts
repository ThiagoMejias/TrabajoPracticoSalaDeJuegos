import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoggedIn : boolean = true;

//#region variables de formulario
  email: string = '';
  emailError: string = '';
  password: string = '';
  passwordError: string = '';
  username: string = '';
  usernameError: string = '';
  confirmPassword: string = '';
  confirmPasswordError: string = '';
// #endregion
  

  constructor(private authService : AuthService, private router : Router) {
    
  }

  cargarUsuario(){
    this.email = 'demianmejias@gmail.com';
    this.password = '12345T';
  }

  setLogin(){
    
    this.isLoggedIn = false;
  }

  login(){
    if(this.verifyFields())
    {
      this.authService
       .login(this.email, this.password).subscribe({
          next: ()=>{
            this.router.navigateByUrl('/');
          },
          error: (err)=>{
            console.log(err.code);
            Swal.fire({
              title: 'Error',
              text: this.authService.getErrorMessage(err.code),
              background: 'white', 
              icon: 'error'
            });
          }
        });
      }
     
            
  }
  register(){
    if(this.verifyFields())
    {
      this.authService.register(this.email, this.password,this.username).subscribe({
        next: ()=>{
          this.router.navigateByUrl('/');
        },
        error: (err)=>{
          console.log(err);
          
          Swal.fire({
            title: 'Error',
            text: this.authService.getErrorMessage(err.code),
            background: 'white', 
            icon: 'error'
          });
        } 
      });
    }
  }

  verifyFields(){
      this.emailError = '';
      this.passwordError = '';
      this.usernameError = '';
      this.confirmPasswordError = '';
      if (!this.isValidEmail(this.email)) {
        this.emailError = 'El formato del correo electrónico no es válido.';
        return false;
    }
      if (!this.email || !this.password) {
        this.emailError = !this.email ? 'El correo electrónico es obligatorio.' : '';
        this.passwordError = !this.password ? 'La contraseña es obligatoria.' : '';
        return false;
      }
      if (!this.isLoggedIn) {
        if (!this.username || !this.password || !this.confirmPassword) {
          this.usernameError = !this.username ? 'El nombre de usuario es obligatorio.' : '';
          this.passwordError = !this.password ? 'La contraseña es obligatoria.' : '';
          this.confirmPasswordError = !this.confirmPassword ? 'La confirmación de la contraseña es obligatoria.' : '';
          return false;
        }
        if(this.password.length < 6){
          this.passwordError = 'La contraseña debe tener al menos 6 caracteres';
          this.confirmPasswordError = 'La contraseña debe tener al menos 6 caracteres';
          return false;
        }
        if (this.password !== this.confirmPassword) {
          this.confirmPasswordError = 'Las contraseñas no coinciden.';
          return false;
        }
      } 

      return true; 
  }

  isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
