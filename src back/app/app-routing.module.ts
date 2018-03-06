import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './tables/tables.component';
import { ForminsertniveauComponent } from './forminsertniveau/forminsertniveau.component';
import { ForminsertquizComponent } from './forminsertquiz/forminsertquiz.component';
import { FormmodifniveauComponent } from './formmodifniveau/formmodifniveau.component';
import { FormmodifquizComponent } from './formmodifquiz/formmodifquiz.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'tables/:idAdmin', component: TablesComponent },
  { path: 'forminsertniveau/:idAdmin', component: ForminsertniveauComponent },
  { path: 'forminsertquiz/:idAdmin', component: ForminsertquizComponent },
  { path: 'formmodifniveau', component: FormmodifniveauComponent },
  { path: 'formmodifniveau/:id/:idAdmin', component: FormmodifniveauComponent },
  { path: 'formmodifquiz', component: FormmodifquizComponent },
  { path: 'formmodifquiz/:id/:idAdmin', component: FormmodifquizComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
