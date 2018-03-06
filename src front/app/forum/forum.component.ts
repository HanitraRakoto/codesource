import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../../services/commentaire.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  //idJoueur: number;
  idJoueur: string;
  commentaire: string;
  commentaires=new Array();

  constructor(public commentaireService: CommentaireService, private route: ActivatedRoute) {
    //this.idJoueur = parseInt(this.route.snapshot.paramMap.get('idJoueur'))
    this.idJoueur = this.route.snapshot.paramMap.get('idJoueur')
    this.findCommentaire()
  }

  ngOnInit() {
  }

  findCommentaire(){
    this.commentaireService.listeCommentaire(this.idJoueur)
    .then(reponse => {
        console.log(reponse)
        this.commentaires = reponse
    })
  }

  insertCommentaire(){
    this.commentaireService.commenter(this.idJoueur, this.commentaire)
    window.location.href = 'forum/'+this.idJoueur
  }
}
