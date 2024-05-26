import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './juegos/mayorOMenor/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados/preguntados.component';
import { AdivinaElNumeroComponent } from './juegos/adivinaElNumero/adivina-el-numero/adivina-el-numero.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { authGuard } from './guards/auth.guard';
export const routes: Routes = [
    { path: '', 
    component: HomeComponent,
    canActivate: [authGuard]
    },
    
    { 
      path: 'login',
      loadComponent: ()=> import('./components/login/login.component').then(()=> LoginComponent)
    },
    { 
      path: 'sobreMi',
      loadComponent: ()=> import('./components/quien-soy/quien-soy.component').then(()=> QuienSoyComponent),
      canActivate: [authGuard]
    },
    { 
      path: 'ahorcado',  
      loadComponent: ()=> import('./juegos/ahorcado/ahorcado/ahorcado.component')
                            .then(()=> AhorcadoComponent),
      canActivate: [authGuard]
    } ,
    { 
      path: 'mayorOMenor',  
      loadComponent: ()=> import('./juegos/mayorOMenor/mayor-menor/mayor-menor.component')
                            .then(()=> MayorMenorComponent),
      canActivate: [authGuard]
    },
    { 
      path: 'adivinaElNumero',  
      loadComponent: ()=> import('./juegos/adivinaElNumero/adivina-el-numero/adivina-el-numero.component')
                            .then(()=> AdivinaElNumeroComponent),
      canActivate: [authGuard]
    },
    { 
      path: 'preguntados',  
      loadComponent: ()=> import('./juegos/preguntados/preguntados/preguntados.component')
                            .then(()=> PreguntadosComponent),
      canActivate: [authGuard]
      
    }   

    
];
