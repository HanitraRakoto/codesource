import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class InscriptionService {
    constructor(public http : Http){
        
    }

    public inscription (pseudo: string, mdp: string) :void {
        let idJoueur;
        const url = "https://quizlogo.herokuapp.com/joueur/save?pseudo="+pseudo+"&mdp="+mdp
        this.http.get(url)
        .toPromise()
        .then(reponse =>{
            idJoueur = reponse.json().id
            console.log(idJoueur)
            const url1 = "https://quizlogo.herokuapp.com/sauvegarde/save?idJoueur="+idJoueur+"&idNiveau=1&idQuiz=1"
            this.http.get(url1)
            .toPromise()
            .then(reponse =>{
                const url2 = "https://quizlogo.herokuapp.com/classement/save?idJoueur="+idJoueur
                this.http.get(url2)
                .toPromise()
            })

        })
    }
}