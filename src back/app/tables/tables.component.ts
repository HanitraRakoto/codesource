import { Component, OnInit } from '@angular/core';
import { NiveauService } from '../../services/niveau.service';
import { QuizService } from '../../services/quiz.service';
import { ClassementService } from '../../services/classement.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  niveaux = new Array();
  quizz = new Array();
  classements = new Array();

  constructor(public niveauService: NiveauService, public quizService: QuizService, public classementService: ClassementService ) {
    this.findNiveau()
    this.findQuiz()
    this.findClassement()
  }

  ngOnInit() {
  }

  findNiveau(){
    this.niveauService.listeNiveau()
    .then(reponse => {
        console.log(reponse)
        this.niveaux = reponse
    })
  }

  findQuiz(){
    this.quizService.listeQuiz()
    .then(reponse => {
        console.log(reponse)
        this.quizz = reponse
    })
  }

  findClassement(){
    this.classementService.listeClassement()
    .then(reponse => {
        console.log(reponse)
        this.classements = reponse
    })
  }

  deleteNiveau(idNiveau){
    console.log(idNiveau)
    this.niveauService.supprimerNiveau(idNiveau)
    window.location.href = 'tables'
  }

  deleteQuiz(idQuiz){
    console.log(idQuiz)
    this.quizService.supprimerQuiz(idQuiz)
    window.location.href = 'tables'
  }
}
