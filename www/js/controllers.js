angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $http, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.nouveau = function() {
    $state.go('app.inscription');
  };

  $scope.charger = function() {
    $state.go('app.connection');
  };

  $scope.signIn = function() {
    $http.get("https://quizlogo.herokuapp.com/joueur/save?pseudo="+$scope.signIn.pseudo+"&mdp="+$scope.signIn.mdp).then(function(response){    
      $http.get("https://quizlogo.herokuapp.com/joueur/find?pseudo="+$scope.signIn.pseudo+"&mdp="+$scope.signIn.mdp).then(function(response){
        if (response.data.length != 0) {
          $scope.users = response.data;
          $scope.idJoueur = $scope.users[0].id;
          $http.get("https://quizlogo.herokuapp.com/sauvegarde/save?idJoueur="+$scope.idJoueur+"&idNiveau=1&idQuiz=1").then(function(response){
            $scope.points = 0;
            $scope.count = 0;
            $state.go('app.niveau');
          })
        }
        else {
          $state.go('app.inscription');
        }
      })
    })
  };

  $scope.logIn = function() {
    $http.get("https://quizlogo.herokuapp.com/joueur/find?pseudo="+$scope.logIn.pseudo+"&mdp="+$scope.logIn.mdp).then(function(response){
      console.log('Doing login', response.data.length);
      if (response.data.length != 0) {
        $scope.users = response.data;
        $scope.idJoueur = $scope.users[0].id;
        //$scope.points = $scope.users[0].argent;
        console.log('idJoueur', $scope.idJoueur);
        $http.get("https://quizlogo.herokuapp.com/sauvegarde/findByJoueur?idJoueur="+$scope.idJoueur).then(function(response){ 
          $scope.sauvegarde = response.data;
          $scope.points = $scope.sauvegarde.point;
          $scope.niveauJoueur = $scope.sauvegarde.idNiveau;
          $scope.quizJoueur = $scope.sauvegarde.idQuiz;
          console.log('points', $scope.points);
          console.log('niveauJoueur', $scope.niveauJoueur);
          console.log('quizJoueur', $scope.quizJoueur);

          // Deblocage
          $http.get("https://quizlogo.herokuapp.com/blocage/deblocage?idJoueur="+$scope.idJoueur).then(function(response){ 
            //console.log('tafiditra');
            //console.log('count', response.data.length);
            $scope.count = response.data.length;
            $state.go('app.niveau');
          })
          
        })
        
      }
      else {
        $state.go('app.connection');
      }
    })
    //$state.go('app.niveau');
  };

  $scope.logos = function($id,$pointQuiz) {
    /*console.log('id', $id);
    console.log('pointQuiz', $pointQuiz);*/
    $state.go('app.listelogos', { id: $id, pointQuiz: $pointQuiz });
  };

  $scope.verifReponse = function($reponse,$pointQuiz,$idQuiz,$idNiveau,$idDebut,$idFin,$pointQuiz) {
    console.log('Reponse base', $reponse);
    console.log('Reponse joueur', $scope.verifReponse.reponse);
    console.log('idJoueur', $scope.idJoueur);
    console.log('Points', $scope.points);
    console.log('PointQuiz', $pointQuiz);
    console.log('idQuiz', $idQuiz);
    console.log('idNiveau', $idNiveau);
    if ($reponse.toLowerCase() == $scope.verifReponse.reponse.toLowerCase()){
      $scope.points = $scope.points + $pointQuiz;
      $http.get("https://quizlogo.herokuapp.com/sauvegarde/update?idJoueur="+$scope.idJoueur+"&idNiveau="+$idNiveau+"&idQuiz="+$idQuiz+"&point="+$scope.points).then(function(response){    
        var alertPopup = $ionicPopup.alert({
          title: 'Yes !!',
          template: 'Vous avez gagner '+$pointQuiz+' points.'
        });
        alertPopup.then(function(res) {
          
          $http.get("https://quizlogo.herokuapp.com/blocage/save?idJoueur="+$scope.idJoueur+"&idNiveau="+$idNiveau+"&idQuiz="+$idQuiz).then(function(response){    
            //insert table blocage
            $scope.count ++;
            if ($scope.count == 5 || $scope.count == 10 || $scope.count == 15 || $scope.count == 20 || $scope.count == 25) {
              var alertPopup = $ionicPopup.alert({
                title: 'Félicitation !!',
                template: 'Vous avez débloqué le niveau suivant.'
              });
              alertPopup.then(function(res) {
              });
            }
          })

          if ($idQuiz+1 < $idDebut || $idQuiz+1 > $idFin) {
            $state.go('app.listelogos', { id: $idNiveau });
          }
          else {
            $state.go('app.logo', { idQuiz: $idQuiz+1, idNiveau: $idNiveau, idDebut: $idDebut, idFin: $idFin, pointQuiz: $pointQuiz });
          }

        });
      })
    }
    else {
      $scope.points = $scope.points - 1;
      $http.get("https://quizlogo.herokuapp.com/sauvegarde/update?idJoueur="+$scope.idJoueur+"&idNiveau="+$idNiveau+"&idQuiz="+$idQuiz+"&point="+$scope.points).then(function(response){    
        var alertPopup = $ionicPopup.alert({
          title: 'Oh non !!',
          template: 'Mauvaise reponse.'
        });
        alertPopup.then(function(res) {
        });
      })
    }
  };


  //Popup
  $scope.showAlert = function() {
    
        var alertPopup = $ionicPopup.alert({
           title: 'Title',
           template: 'Alert message'
        });
  
        alertPopup.then(function(res) {
           // Custom functionality....
        });
     };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('essaiNiveau', function($scope) {
  $scope.niveaux = [
    { nom: 'Niveau 1', id: 1, deblocage: 5, icon: 'icon_1.png', pointQuiz: 1 },
    { nom: 'Niveau 2', id: 2, deblocage: 10, icon: 'icon_2.png', pointQuiz: 2 },
    { nom: 'Niveau 3', id: 3, deblocage: 15, icon: 'icon_3.png', pointQuiz: 3 },
    { nom: 'Niveau 4', id: 4, deblocage: 20, icon: 'icon_4.png', pointQuiz: 4 },
    { nom: 'Niveau 5', id: 5, deblocage: 25, icon: 'icon_5.png', pointQuiz: 5 },
    { nom: 'Niveau 6', id: 6, deblocage: 30, icon: 'icon_6.png', pointQuiz: 6 }
  ];
  //console.log('essai Niveau count', $scope.count);
  //$scope.count = 6;
  if ($scope.count <= 5) {
    $scope.niveau2 = true;
  }
  if ($scope.count <= 10) {
    console.log('niveau3');
    $scope.niveau3 = true;
  }
  if ($scope.count <= 15) {
    console.log('niveau4');
    $scope.niveau4 = true;
  }
  if ($scope.count <= 20) {
    console.log('niveau5');
    $scope.niveau5 = true;
  }
  if ($scope.count <= 25) {
    console.log('niveau6');
    $scope.niveau6 = true;
  }
})

.controller('essaiQuiz', function($scope, $stateParams) {
  $scope.idNiveau = $stateParams.id;
  $scope.listeQuizz = [
    { photo: 'facebook1.png', id: 1, deblocage: 5 },
    { photo: 'pringles1.png', id: 1, deblocage: 10 },
    { photo: 'amazon1.png', id: 3, deblocage: 15 },
    { photo: 'twitter1.png', id: 4, deblocage: 20 },
    { photo: 'volkswagen1.png', id: 5, deblocage: 25 },
    { photo: 'facebook1.png', id: 6, deblocage: 25 },
    { photo: 'volkswagen1.png', id: 7, deblocage: 25 },
    { photo: 'volkswagen1.png', id: 8, deblocage: 25 },
    { photo: 'volkswagen1.png', id: 9, deblocage: 25 },
    { photo: 'volkswagen1.png', id: 10, deblocage: 25 },
    { photo: 'volkswagen1.png', id: 11, deblocage: 25 }
  ];
})

.controller('essaiDetailQuiz', function($scope, $stateParams) {
  $scope.idQuiz = $stateParams.idQuiz;
  $scope.idQuizPrec = parseInt($scope.idQuiz) - 1;
  $scope.idQuizSuiv = parseInt($scope.idQuiz) + 1;
  $scope.quizz = [
    { photo: 'facebook1.png',reponse:'facebook' , id: 1 }
  ];
  $scope.taille = $scope.quizz[0].reponse.length;
  $scope.tableaux = new Array($scope.taille);
  for (var i = 0; i < $scope.taille; i++) {
    $scope.tableaux[i] = i;
  }
})

.controller('ListeNiveau', function($scope, $http, $stateParams) {
  //$scope.idNiveau = $stateParams.id;
  //console.log('joueur', $scope.idJoueur);
  console.log('count', $scope.count);
  $http.get("https://quizlogo.herokuapp.com/niveau/listeNiveau").then(function(response){ 
    $scope.niveaux = response.data;

    /*for (var i = 1; i < response.data.length; i++) {
      if ($scope.count <= $scope.niveaux[i].deblocage) {
        console.log('niveau', i);
        //$scope.niveau.i = true;
      }
    }*/
    if ($scope.count <= 5) {
      $scope.niveau2 = true;
    }
    if ($scope.count <= 10) {
      console.log('niveau3');
      $scope.niveau3 = true;
    }
    if ($scope.count <= 15) {
      console.log('niveau4');
      $scope.niveau4 = true;
    }
    if ($scope.count <= 20) {
      console.log('niveau5');
      $scope.niveau5 = true;
    }
    if ($scope.count <= 25) {
      console.log('niveau6');
      $scope.niveau6 = true;
    }
    
  })
})

.controller('ListeQuizByNiveau', function($scope, $stateParams, $http) {
  $scope.idNiveau = $stateParams.id;
  $scope.pointQuiz = $stateParams.pointQuiz;
  $http.get("https://quizlogo.herokuapp.com/quiz/find?idNiveau="+$scope.idNiveau).then(function(response){
    $scope.listeQuizz = response.data;
    $scope.idDebut = parseInt($scope.listeQuizz[0].id);
    $scope.idFin = $scope.idDebut + $scope.listeQuizz.length - 1;
    console.log('idDebut', $scope.idDebut);
    console.log('idFin', $scope.idFin);
  })
})

.controller('Quiz', function($scope, $stateParams, $http, $state) {
  $scope.idQuiz = parseInt($stateParams.idQuiz);
  $scope.idDebut = parseInt($stateParams.idDebut);
  $scope.idFin = parseInt($stateParams.idFin);
  $scope.idNiveau = $stateParams.idNiveau;
  $scope.pointQuiz = parseInt($stateParams.pointQuiz);
  console.log('idQuiz', $scope.idQuiz);
  console.log('idDebut', $scope.idDebut);
  console.log('idFin', $scope.idFin);
  console.log('niveau', $scope.idNiveau);
  console.log('joueur', $scope.idJoueur);
  if ($scope.idQuiz < $scope.idDebut || $scope.idQuiz > $scope.idFin) {
    $state.go('app.listelogos', { id: $scope.idNiveau });
  }
  else {
    $http.get("https://quizlogo.herokuapp.com/quiz/quiz?id="+$scope.idQuiz).then(function(response){
      $scope.quizz = response.data;
      $scope.reponse = $scope.quizz[0].reponse;

      //verification blocage quiz
      $http.get("https://quizlogo.herokuapp.com/blocage/blocage?idJoueur="+$scope.idJoueur+"&idNiveau="+$scope.idNiveau+"&idQuiz="+$scope.idQuiz).then(function(response){
        console.log("tafiditra",response.data.length);
        if (response.data.length != 0) {
          $scope.input = true;
          $scope.bouton = true;
        }
      })

    })
  }
})

.controller('ListeClassement', function($scope, $http) {
  $http.get("https://quizlogo.herokuapp.com/classement/classement").then(function(response){ 
    $scope.classements = response.data;
  })
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
