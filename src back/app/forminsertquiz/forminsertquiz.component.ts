import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-forminsertquiz',
  templateUrl: './forminsertquiz.component.html',
  styleUrls: ['./forminsertquiz.component.css']
})
export class ForminsertquizComponent implements OnInit {

  idNiveau: number;
  photo: string;
  reponse: string;

  constructor(public quizService: QuizService) { }

  ngOnInit() {
  }

  insertQuiz(){
    this.quizService.insererQuiz(this.idNiveau, this.photo, this.reponse)
    window.location.href = 'tables'
  }
}
