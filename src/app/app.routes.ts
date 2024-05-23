import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './juegos/mayorOMenor/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados/preguntados.component';
export const routes: Routes = [
    { path: '', component: HomeComponent},
    { 
        path: 'login',
        loadComponent: ()=> import('./components/home/home.component').then(()=> LoginComponent)
    },
    { path: 'ahorcado',  
      loadComponent: ()=> import('./juegos/ahorcado/ahorcado/ahorcado.component')
                            .then(()=> AhorcadoComponent)
    } ,
    { path: 'mayorOMenor',  
      loadComponent: ()=> import('./juegos/mayorOMenor/mayor-menor/mayor-menor.component')
                            .then(()=> MayorMenorComponent)
    },
    { 
      path: 'preguntados',  
      loadComponent: ()=> import('./juegos/preguntados/preguntados/preguntados.component')
                            .then(()=> PreguntadosComponent)
    }   

    
];
