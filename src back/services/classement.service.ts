import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ClassementService {
    constructor(public http : Http){
        
    }

    public listeClassement(idAdmin: string){
        const url = "https://quizlogo.herokuapp.com/classement/classement?key="+idAdmin

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }
}