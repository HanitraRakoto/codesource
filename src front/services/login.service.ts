import { Injectable } from "@angular/core";
import { Http } from "@angular/http";



@Injectable()
export class LoginService{

    constructor(public http : Http){
        
    }

    public verifLogin(pseudo: string, mdp: string){
        const url = "https://quizlogo.herokuapp.com/joueur/find?pseudo="+pseudo+"&mdp="+mdp

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }

}