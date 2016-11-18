angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
  

    .state('signin', {
    url: '/signin',
    templateUrl: 'templates/signin.html',
    controller: 'pakkaUICtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'pakkaUICtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('discover', {
    url: '/discover',
    templateUrl: 'templates/discover.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('forgot', {
    url: '/forgot',
    templateUrl: 'templates/forgot.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('mymusic', {
    url: '/mymusic',
    templateUrl: 'templates/mymusic.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('invite', {
    url: '/invite',
    templateUrl: 'templates/invite.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('rewards', {
    url: '/rewards',
    templateUrl: 'templates/rewards.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('playmusic', {
    url: '/playmusic',
    templateUrl: 'templates/playmusic.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('playerqueue', {
    url: '/playerqueue',
    templateUrl: 'templates/playerqueue.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('editprofile', {
    url: '/editprofile',
    templateUrl: 'templates/editprofile.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('editorpick', {
    url: '/editorpick',
    templateUrl: 'templates/editorpick.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('newrelease', {
    url: '/newrelease',
    templateUrl: 'templates/newrelease.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('topchart', {
    url: '/topchart',
    templateUrl: 'templates/topchart.html',
    controller: 'pakkaUICtrl'
  })
  
  .state('featured', {
    url: '/featured',
    templateUrl: 'templates/featured.html',
    controller: 'pakkaUICtrl'
  })
  
$urlRouterProvider.otherwise('/signin')

  

});