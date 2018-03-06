import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexcontenuComponent } from './indexcontenu/indexcontenu.component';
import { GameComponent } from './game/game.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: 'index', component: IndexcontenuComponent },
  { path: 'game', component: GameComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'forum/:idJoueur', component: ForumComponent }
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
