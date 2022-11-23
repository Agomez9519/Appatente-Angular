import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './pages/articles/articles.component';

import { FooterComponent } from './shared/footer/footer.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
//Se Importa el modulo de Material para usarlo en el Modulo principal de Angular
import { MaterialModule } from './modules/material/material.module';
import { AuthInterceptorProvider } from './auth/interceptors/cookies.interceptor';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



//Se importa el modulo de HttpClient para poder hacer peticiones HTTP





@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    FooterComponent,
    ToolbarComponent,    
    UserFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
   // provideFirebaseApp(() => initializeApp(environment.firebase)),
   // provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
