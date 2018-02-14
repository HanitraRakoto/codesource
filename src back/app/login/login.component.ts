import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nom: string;
  motDePasse: string;

  constructor(public adminService: AdminService) { }

  ngOnInit() {
  }

  checkLogin(){
    this.adminService.verifLogin(this.nom, this.motDePasse)
    .then(reponse => {
      if(reponse.length != 0){
        console.log(reponse)
        window.location.href = 'tables'
      }else{
        console.log("diso")
      }
    })
  }

}
