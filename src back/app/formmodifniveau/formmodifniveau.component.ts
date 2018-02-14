import { Component, OnInit } from '@angular/core';
import { NiveauService } from '../../services/niveau.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formmodifniveau',
  templateUrl: './formmodifniveau.component.html',
  styleUrls: ['./formmodifniveau.component.css']
})
export class FormmodifniveauComponent implements OnInit {

  id: string;
  nom: string;
  icon: string;
  pointQuiz: number;
  deblocage: number;

  niveaux = new Array();

  constructor(public niveauService: NiveauService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.findNiveauById()
  }

  ngOnInit() {
  }

  findNiveauById(){
    this.niveauService.listeNiveauById(this.id)
    .then(reponse => {
        console.log(reponse)
        this.niveaux = reponse
    })
  }

  updateNiveau(){
    console.log(this.id)
    console.log(this.nom)
    console.log(this.icon)
    console.log(this.pointQuiz)
    console.log(this.deblocage)
    this.niveauService.modifierNiveau(this.id, this.nom, this.icon, this.pointQuiz, this.deblocage)
    window.location.href = 'tables'
  }

}
