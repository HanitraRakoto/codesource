import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class NiveauService {
    constructor(public http : Http){
        
    }

    public listeNiveau(idAdmin: string){
        const url = "https://quizlogo.herokuapp.com/niveau/listeNiveau?key="+idAdmin

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }

    public listeNiveauById(id: string, idAdmin: string){
        const url = "https://quizlogo.herokuapp.com/niveau/findById?id="+id+"&key="+idAdmin

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }

    public insererNiveau(nom: string, icon: string, pointQuiz: number, deblocage: number, idAdmin: string) :void{
        const url = "https://quizlogo.herokuapp.com/niveau/save?nom="+nom+"&icon="+icon+"&pointQuiz="+pointQuiz+"&deblocage="+deblocage+"&key="+idAdmin

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }

    public modifierNiveau(id: string, nom: string, icon: string, pointQuiz: number, deblocage: number, idAdmin: string) :void{
        const url = "https://quizlogo.herokuapp.com/niveau/update?id="+id+"&nom="+nom+"&icon="+icon+"&pointQuiz="+pointQuiz+"&deblocage="+deblocage+"&key="+idAdmin

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }

    public supprimerNiveau(id: string, idAdmin: string) :void{
        const url = "https://quizlogo.herokuapp.com/niveau/delete?id="+id+"&key="+idAdmin

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }
}