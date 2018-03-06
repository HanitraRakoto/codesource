import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CommentaireService {
    constructor(public http : Http){
        
    }

    public commenter (idJoueur: string, commentaire: string) :void {
        const url = "https://quizlogo.herokuapp.com/commentaire/save?idJoueur="+idJoueur+"&commentaire="+commentaire+"&key="+idJoueur
        this.http.get(url)
        .toPromise()
    }

    public listeCommentaire (idJoueur: string) {
        const url = "https://quizlogo.herokuapp.com/commentaire/find?key="+idJoueur
        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }
}