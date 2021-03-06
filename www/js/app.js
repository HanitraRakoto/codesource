// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.niveau', {
    url: '/niveau',
    views: {
      'menuContent': {
        templateUrl: 'templates/niveau.html',
        controller: 'ListeNiveau'
        //controller: 'essaiNiveau'
      }
    }
  })

  .state('app.logo', {
    url: '/logo/:idQuiz/:idNiveau/:idDebut/:idFin/:pointQuiz',
    views: {
      'menuContent': {
        templateUrl: 'templates/logo.html',
        controller: 'Quiz'
        //controller: 'essaiDetailQuiz'
      }
    }
  })
  .state('app.inscription', {
    url: '/inscription',
    views: {
      'menuContent': {
        templateUrl: 'templates/inscription.html'
      }
    }
  })
  .state('app.connection', {
    url: '/connection',
    views: {
      'menuContent': {
        templateUrl: 'templates/connection.html'
      }
    }
  })
  .state('app.listelogos', {
    url: '/listelogos/:id/:pointQuiz',
    views: {
      'menuContent': {
        templateUrl: 'templates/listelogos.html',
        controller: 'ListeQuizByNiveau'
        //controller: 'essaiQuiz'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.classement', {
    url: '/classement',
    views: {
      'menuContent': {
        templateUrl: 'templates/classement.html',
        controller: 'ListeClassement'
      }
    }
  })

  .state('app.commentaire', {
    url: '/commentaire',
    views: {
      'menuContent': {
        templateUrl: 'templates/commentaire.html',
        controller: 'ListeCommentaire'
      }
    }
  })

  .state('app.information', {
    url: '/information',
    views: {
      'menuContent': {
        templateUrl: 'templates/information.html'
      }
    }
  })

  .state('app.jeu', {
    url: '/jeu',
    views: {
      'menuContent': {
        templateUrl: 'templates/jeu.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/jeu');
});
