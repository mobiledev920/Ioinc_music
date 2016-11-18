// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ngCordova', 'ionic', 'starter.controllers'])

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

      .state('app.pageList', {
      url: '/pageList',
      views: {
          'menuContent': {
              templateUrl: 'templates/page-list.html',
              controller: 'AppCtrl'
          }
      }
  })
  
      .state('app.pageDetails', {
      url: '/pageDetails',
      views: {
          'menuContent': {
              templateUrl: 'templates/page-details.html',
              controller: 'AppCtrl'
          }
      }
  })

  .state('app.photos', {
      url: '/photos',
      views: {
          'menuContent': {
              templateUrl: 'templates/page-photos.html',
              controller: 'AppCtrl'
          }
      }
  })

  .state('app.redes', {
      url: '/redes',
      views: {
          'menuContent': {
              templateUrl: 'templates/page-twitter.html',
              controller: 'AppCtrl'
          }
      }
  })

      .state('app.pageDetailsMusic', {
      url: '/pageDetailsMusic',
      views: {
        'menuContent': {
            templateUrl: 'templates/page-details-music.html',
            controller: 'AppCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/pageDetails');
});