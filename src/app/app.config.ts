import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {provideAuth,getAuth} from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
const firebaseConfig = {
  apiKey: "AIzaSyBOuj60P-u85SfMIKV2MP0rbEv1v02LS9k",
  authDomain: "trabajopracticojuegos.firebaseapp.com",
  projectId: "trabajopracticojuegos",
  storageBucket: "trabajopracticojuegos.appspot.com",
  messagingSenderId: "687233855117",
  appId: "1:687233855117:web:8f3d5fcd2f05f3a754fcc4"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom([
      provideFirebaseApp(()=>initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ])
  ]

};
