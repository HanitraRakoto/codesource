import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexcontenuComponent } from './indexcontenu/indexcontenu.component';
import { GameComponent } from './game/game.component';
import { ForumComponent } from './forum/forum.component';
import { ContactComponent } from './contact/contact.component'; // <-- NgModel lives here
import { LoginService } from '../services/login.service';
import { InscriptionService } from '../services/inscription.service';
import { CommentaireService } from '../services/commentaire.service';
import { UploadListComponent } from './uploads/upload-list/upload-list.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexcontenuComponent,
    GameComponent,
    ForumComponent,
    ContactComponent,
    UploadListComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    LoginService,
    InscriptionService,
    CommentaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
