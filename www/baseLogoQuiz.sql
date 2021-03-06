use logoQuiz;

db.createCollection('joueur');
db.joueur.insert({
	"_id":"1",
	"pseudo":"Hanitra",
	"photo":"hantr.jpeg",
	"argent":0,
	"point":0,
	"motDePasse":"hantrrak"
});
db.joueur.insert({
	"_id":"2",
	"pseudo":"Jerry",
	"photo":"jerry.jpeg",
	"point":0,
	"argent":0,
	"motDePasse":"jerrynant"
});

db.createCollection('niveau');
db.niveau.insert({
	"_id":"1",
	"nom":"Niveau 1",
	"icon":"icon_1.png",
	"pointQuiz":1,
	"deblocage":5
});
db.niveau.insert({
	"_id":"2",
	"nom":"Niveau 2",
	"icon":"icon_2.png",
	"pointQuiz":2,
	"deblocage":10
});
db.niveau.insert({
	"_id":"3",
	"nom":"Niveau 3",
	"icon":"icon_3.png",
	"pointQuiz":3,
	"deblocage":15
});
db.niveau.insert({
	"_id":"4",
	"nom":"Niveau 4",
	"icon":"icon_4.png",
	"pointQuiz":4,
	"deblocage":20
});
db.niveau.insert({
	"_id":"5",
	"nom":"Niveau 5",
	"icon":"icon_5.png",
	"pointQuiz":5,
	"deblocage":25
});
db.niveau.insert({
	"_id":"6",
	"nom":"Niveau 6",
	"icon":"icon_6.png",
	"pointQuiz":6,
	"deblocage":30
});

db.createCollection('quiz');
db.quiz.insert({
	"_id":"1",
	"idNiveau":1,
	"photo":"pringles1.png",
	"reponse":"pringles"
});
db.quiz.insert({
	"_id":"2",
	"idNiveau":1,
	"photo":"amazon1.png",
	"reponse":"amazon"
});
db.quiz.insert({
	"_id":"3",
	"idNiveau":1,
	"photo":"facebook1.png",
	"reponse":"facebook"
});
db.quiz.insert({
	"_id":"4",
	"idNiveau":1,
	"photo":"twitter1.png",
	"reponse":"twitter"
});
db.quiz.insert({
	"_id":"5",
	"idNiveau":1,
	"photo":"volkswagen1.png",
	"reponse":"volkswagen"
});
db.quiz.insert({
	"_id":"6",
	"idNiveau":2,
	"photo":"ikea2.png",
	"reponse":"ikea"
});
db.quiz.insert({
	"_id":"7",
	"idNiveau":2,
	"photo":"cocacola2.png",
	"reponse":"cocacola"
});
db.quiz.insert({
	"_id":"8",
	"idNiveau":2,
	"photo":"linkedin2.png",
	"reponse":"linkedin"
});
db.quiz.insert({
	"_id":"9",
	"idNiveau":2,
	"photo":"mercedes2.gif",
	"reponse":"mercedes"
});
db.quiz.insert({
	"_id":"10",
	"idNiveau":2,
	"photo":"suzuki2.png",
	"reponse":"suzuki"
});
db.quiz.insert({
	"_id":"11",
	"idNiveau":3,
	"photo":"mazda3.png",
	"reponse":"mazda"
});
db.quiz.insert({
	"_id":"12",
	"idNiveau":3,
	"photo":"asus3.png",
	"reponse":"asus"
});
db.quiz.insert({
	"_id":"13",
	"idNiveau":3,
	"photo":"bluetooth3.png",
	"reponse":"bluetooth"
});
db.quiz.insert({
	"_id":"14",
	"idNiveau":3,
	"photo":"converse3.png",
	"reponse":"converse"
});
db.quiz.insert({
	"_id":"15",
	"idNiveau":3,
	"photo":"kia3.jpg",
	"reponse":"kia"
});
db.quiz.insert({
	"_id":"16",
	"idNiveau":3,
	"photo":"warnerbros3.jpg",
	"reponse":"warnerbros"
});
db.quiz.insert({
	"_id":"17",
	"idNiveau":4,
	"photo":"kfc4.png",
	"reponse":"kfc"
});
db.quiz.insert({
	"_id":"18",
	"idNiveau":4,
	"photo":"carrefour4.png",
	"reponse":"carrefour"
});
db.quiz.insert({
	"_id":"19",
	"idNiveau":4,
	"photo":"fox4.png",
	"reponse":"fox"
});
db.quiz.insert({
	"_id":"20",
	"idNiveau":4,
	"photo":"internetexplorer4.png",
	"reponse":"internet explorer"
});
db.quiz.insert({
	"_id":"21",
	"idNiveau":4,
	"photo":"juventus4.png",
	"reponse":"juventus"
});
db.quiz.insert({
	"_id":"22",
	"idNiveau":5,
	"photo":"ubuntu5.png",
	"reponse":"ubuntu"
});
db.quiz.insert({
	"_id":"23",
	"idNiveau":5,
	"photo":"prada5.png",
	"reponse":"prada"
});
db.quiz.insert({
	"_id":"24",
	"idNiveau":5,
	"photo":"versace5.jpg",
	"reponse":"versace"
});
db.quiz.insert({
	"_id":"25",
	"idNiveau":5,
	"photo":"xbox5.png",
	"reponse":"xbox"
});
db.quiz.insert({
	"_id":"26",
	"idNiveau":5,
	"photo":"yahoo5.png",
	"reponse":"yahoo"
});
db.quiz.insert({
	"_id":"27",
	"idNiveau":6,
	"photo":"zippo6.png",
	"reponse":"zippo"
});
db.quiz.insert({
	"_id":"28",
	"idNiveau":6,
	"photo":"babolat6.png",
	"reponse":"babolat"
});
db.quiz.insert({
	"_id":"29",
	"idNiveau":6,
	"photo":"lindt6.png",
	"reponse":"lindt"
});
db.quiz.insert({
	"_id":"30",
	"idNiveau":6,
	"photo":"marvel6.png",
	"reponse":"marvel"
});
db.quiz.insert({
	"_id":"31",
	"idNiveau":6,
	"photo":"oralb6.png",
	"reponse":"oralb"
});

db.createCollection('sauvegarde');
db.sauvegarde.insert({
	"_id":1,
	"idJoueur":1,
	"idNiveau":3,
	"idQuiz":2,
	"point":0
});

db.createCollection('classement');
db.classement.insert({
	"_id":1,
	"idSauvegarde":1
});
db.classement.insert({
	"_id":2,
	"idSauvegarde":2
});
db.classement.insert({
	"_id":3,
	"idSauvegarde":3
});
db.classement.insert({
	"_id":4,
	"idSauvegarde":4
});
db.classement.insert({
	"_id":5,
	"idSauvegarde":5
});
db.classement.insert({
	"_id":6,
	"idSauvegarde":6
});
db.classement.insert({
	"_id":7,
	"idSauvegarde":7
});

db.createCollection('classementtemp');
db.classementtemp.insert({
	"_id":1,
	"idSauvegarde":1
});

db.createCollection('admin');
db.admin.insert({
	"_id":1,
	"nom":"hanitra",
	"motDePasse":"rakoto"
});
db.admin.insert({
	"_id":2,
	"nom":"jerry",
	"motDePasse":"nant"
});

db.createCollection('commentaire');
db.commentaire.insert({
	"_id":"1",
	"idJoueur":"1",
	"valeur":"blablbalblablababa"
});

db.createCollection('blocage');
db.blocage.insert({
	"idJoueur":"1",
	"idNiveau":2,
	"idQuiz":1
});
db.blocage.insert({
	"idJoueur":"1",
	"idNiveau":2,
	"idQuiz":2
});

// Mlab
Account name : hanitrajerry
user name : hanitrajerry
Mot de passe : Hanitra22Jerry10
database name : logoquiz
user database : kill kill

connection bdd : mongodb://kill:kill@ds113648.mlab.com:13648/logoquiz
url : https://quizlogo.herokuapp.com/
git : https://git.heroku.com/quizlogo.git 

//Git hub
user name : HanitraRakoto
mdp : Hanitra22Jerry10

//modification github
git add .
git commit -m "Add existing file"
git push origin master
