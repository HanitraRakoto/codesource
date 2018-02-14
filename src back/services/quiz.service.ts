import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuizService {
    constructor(public http : Http){
        
    }

    public listeQuiz(){
        const url = "https://quizlogo.herokuapp.com/quiz/listeQuiz"

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }

    public listeQuizById(id: string){
        const url = "https://quizlogo.herokuapp.com/quiz/quiz?id="+id

        return this.http.get(url)
        .toPromise()
        .then(reponse => reponse.json())
        .catch(error => console.log(error));
    }

    public insererQuiz(idNiveau: number, photo: string, reponse: string) :void{
        const url = "https://quizlogo.herokuapp.com/quiz/save?idNiveau="+idNiveau+"&photo="+photo+"&reponse="+reponse

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }

    public modifierQuiz(id: string, idNiveau: number, photo: string, reponse: string) :void{
        const url = "https://quizlogo.herokuapp.com/quiz/update?id="+id+"&idNiveau="+idNiveau+"&photo="+photo+"&reponse="+reponse

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }

    public supprimerQuiz(id: string) :void{
        const url = "https://quizlogo.herokuapp.com/quiz/delete?idQuiz="+id

        this.http.get(url)
        .toPromise()
        .catch(error => console.log(error));
    }
}