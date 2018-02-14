import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CommentaireService {
    constructor(public http : Http){
        
    }

    public commenter (idJoueur: number, commentaire: string) :void {
        const url = "https://quizlogo.herokuapp.com/commentaire/save?idJoueur="+idJoueur+"&commentaire="+commentaire
        this.http.get(url)
        .toPromise()
    }

    public listeCommentaire () {
        const url = "https://quizlogo.herokuapp.com/commentaire/find"
        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }
}