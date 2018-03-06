import { Component, OnInit } from '@angular/core';
import { NiveauService } from '../../services/niveau.service';
import { QuizService } from '../../services/quiz.service';
import { ClassementService } from '../../services/classement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  idAdmin : string;
  niveaux = new Array();
  quizz = new Array();
  classements = new Array();

  constructor(public niveauService: NiveauService, public quizService: QuizService, public classementService: ClassementService, private route: ActivatedRoute) {
    this.idAdmin = this.route.snapshot.paramMap.get('idAdmin')
    this.findNiveau()
    this.findQuiz()
    this.findClassement()
  }

  ngOnInit() {
  }

  findNiveau(){
    this.niveauService.listeNiveau(this.idAdmin)
    .then(reponse => {
        console.log(reponse)
        this.niveaux = reponse
    })
  }

  findQuiz(){
    this.quizService.listeQuiz(this.idAdmin)
    .then(reponse => {
        console.log(reponse)
        this.quizz = reponse
    })
  }

  findClassement(){
    this.classementService.listeClassement(this.idAdmin)
    .then(reponse => {
        console.log(reponse)
        this.classements = reponse
    })
  }

  deleteNiveau(idNiveau){
    console.log(idNiveau)
    this.niveauService.supprimerNiveau(idNiveau, this.idAdmin)
    window.location.href = 'tables/'+this.idAdmin
  }

  deleteQuiz(idQuiz){
    console.log(idQuiz)
    this.quizService.supprimerQuiz(idQuiz, this.idAdmin)
    window.location.href = 'tables/'+this.idAdmin
  }
}
