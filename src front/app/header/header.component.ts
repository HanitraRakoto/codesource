import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { InscriptionService } from '../../services/inscription.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pseudo: string;
  mdp: string;

  nom: string;
  motDePasse: string;

  constructor(public loginService: LoginService,public  inscriptionService: InscriptionService) {

  }

  ngOnInit() {
  }

  checkLogin(){
    this.loginService.verifLogin(this.pseudo, this.mdp)
    .then(reponse => {
      if(reponse.length != 0){
        console.log(reponse)
        //console.log(reponse[0].id)
        window.location.href = 'forum/'+reponse[0].id
      }else{
        console.log("diso")
      }
    })
  }

  signIn(){
    this.inscriptionService.inscription(this.nom, this.motDePasse)
    window.location.href = 'forum'
  }

}
