import { Component, OnInit } from '@angular/core';
import { NiveauService } from '../../services/niveau.service';
import { ActivatedRoute } from '@angular/router';

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
  idAdmin: string;

  constructor(public niveauService: NiveauService, private route: ActivatedRoute) {
    this.idAdmin = this.route.snapshot.paramMap.get('idAdmin')
  }

  ngOnInit() {
  }

  insertNiveau(){
    this.niveauService.insererNiveau(this.nom, this.icon, this.pointQuiz, this.deblocage, this.idAdmin)
    window.location.href = 'tables/'+this.idAdmin
  }

}
