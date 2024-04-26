import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
    { path: '', component: HomeComponent},
    { 
        path: 'login',
        loadComponent: ()=> import('./components/home/home.component').then(()=> LoginComponent)
    },
];
