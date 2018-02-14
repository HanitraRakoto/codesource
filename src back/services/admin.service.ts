import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AdminService {
    constructor(public http : Http){
        
    }

    public verifLogin(nom: string, motDePasse: string){
        const url = "https://quizlogo.herokuapp.com/admin/login?nom="+nom+"&motDePasse="+motDePasse

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }
}