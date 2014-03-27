var myApp = angular.module('myApp', ['ui.router', 'ngResource', 'myApp.controllers','myApp.services','myApp.directives']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: '/templates/dashboard.html',
      controller: 'HomeController',
      resolve: {
        session: function(SessionService) {
          return SessionService.getCurrentUser();
        }
      }
    })
    .state('events', {
      url: '/events',
      templateUrl: '/templates/events.html',
      controller: 'EventsController'
    });
});
/*
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/dashboard.html',
      controller: 'HomeController',
      resolve: {
        session: function(SessionService) {
          return SessionService.getCurrentUser();
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
  });
*/
