import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class NiveauService {
    constructor(public http : Http){
        
    }

    public listeNiveau(){
        const url = "https://quizlogo.herokuapp.com/niveau/listeNiveau"

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }

    public listeNiveauById(id: string){
        const url = "https://quizlogo.herokuapp.com/niveau/findById?id="+id

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }

    public insererNiveau(nom: string, icon: string, pointQuiz: number, deblocage: number) :void{
        const url = "https://quizlogo.herokuapp.com/niveau/save?nom="+nom+"&icon="+icon+"&pointQuiz="+pointQuiz+"&deblocage="+deblocage

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }

    public modifierNiveau(id: string, nom: string, icon: string, pointQuiz: number, deblocage: number) :void{
        const url = "https://quizlogo.herokuapp.com/niveau/update?id="+id+"&nom="+nom+"&icon="+icon+"&pointQuiz="+pointQuiz+"&deblocage="+deblocage

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }

    public supprimerNiveau(id: string) :void{
        const url = "https://quizlogo.herokuapp.com/niveau/delete?id="+id

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }
}