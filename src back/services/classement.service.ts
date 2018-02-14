import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ClassementService {
    constructor(public http : Http){
        
    }

    public listeClassement(){
        const url = "https://quizlogo.herokuapp.com/classement/classement"

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }
}