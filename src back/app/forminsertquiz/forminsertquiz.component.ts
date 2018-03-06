import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { NiveauService } from '../../services/niveau.service';

@Component({
  selector: 'app-forminsertquiz',
  templateUrl: './forminsertquiz.component.html',
  styleUrls: ['./forminsertquiz.component.css']
})
export class ForminsertquizComponent implements OnInit {

  idNiveau: number;
  photo: string;
  reponse: string;
  idAdmin: string;
  niveaux = new Array();

  constructor(public quizService: QuizService, public niveauService: NiveauService, private route: ActivatedRoute) {
    this.idAdmin = this.route.snapshot.paramMap.get('idAdmin')
    this.findNiveau()
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

  insertQuiz(){
    this.quizService.insererQuiz(this.idNiveau, this.photo, this.reponse, this.idAdmin)
    window.location.href = 'tables/'+this.idAdmin
  }
}
