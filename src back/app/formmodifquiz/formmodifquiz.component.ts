import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { NiveauService } from '../../services/niveau.service';

@Component({
  selector: 'app-formmodifquiz',
  templateUrl: './formmodifquiz.component.html',
  styleUrls: ['./formmodifquiz.component.css']
})
export class FormmodifquizComponent implements OnInit {

  id: string;
  idNiveau: number;
  photo: string;
  reponse: string;
  idAdmin: string;

  quizz = new Array();
  niveaux = new Array();

  constructor(public quizService: QuizService, public niveauService: NiveauService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.idAdmin = this.route.snapshot.paramMap.get('idAdmin')
    this.findNiveau()
    this.findQuizById()
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

  findQuizById(){
    this.quizService.listeQuizById(this.id, this.idAdmin)
    .then(reponse => {
        console.log(reponse)
        this.quizz = reponse
    })
  }

  updateQuiz(){
    console.log(this.id)
    console.log(this.idNiveau)
    console.log(this.photo)
    console.log(this.reponse)
    this.quizService.modifierQuiz(this.id, this.idNiveau, this.photo, this.reponse, this.idAdmin)
    window.location.href = 'tables/'+this.idAdmin
  }
}
