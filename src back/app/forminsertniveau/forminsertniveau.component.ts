import { Component, OnInit } from '@angular/core';
import { NiveauService } from '../../services/niveau.service';

@Component({
  selector: 'app-forminsertniveau',
  templateUrl: './forminsertniveau.component.html',
  styleUrls: ['./forminsertniveau.component.css']
})
export class ForminsertniveauComponent implements OnInit {

  nom: string;
  icon: string;
  pointQuiz: number;
  deblocage: number;

  constructor(public niveauService: NiveauService) { }

  ngOnInit() {
  }

  insertNiveau(){
    this.niveauService.insererNiveau(this.nom, this.icon, this.pointQuiz, this.deblocage)
    window.location.href = 'tables'
  }

}
