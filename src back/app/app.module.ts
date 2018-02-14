import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './tables/tables.component';
import { ForminsertniveauComponent } from './forminsertniveau/forminsertniveau.component';
import { ForminsertquizComponent } from './forminsertquiz/forminsertquiz.component';
import { FormmodifniveauComponent } from './formmodifniveau/formmodifniveau.component';
import { FormmodifquizComponent } from './formmodifquiz/formmodifquiz.component'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { NiveauService } from '../services/niveau.service';
import { QuizService } from '../services/quiz.service';
import { AdminService } from '../services/admin.service';
import { ClassementService } from '../services/classement.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TablesComponent,
    ForminsertniveauComponent,
    ForminsertquizComponent,
    FormmodifniveauComponent,
    FormmodifquizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    NiveauService,
    QuizService,
    AdminService,
    ClassementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
