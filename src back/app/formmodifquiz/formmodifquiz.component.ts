import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';

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

  quizz = new Array();

  constructor(public quizService: QuizService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.findQuizById()
  }

  ngOnInit() {
  }

  findQuizById(){
    this.quizService.listeQuizById(this.id)
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
    this.quizService.modifierQuiz(this.id, this.idNiveau, this.photo, this.reponse)
    window.location.href = 'tables'
  }
}
