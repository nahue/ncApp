angular.module('myApp.controllers', [])
  .controller('HomeController', function($scope, session, SessionService) {

    $scope.user = session.user;

  })
  .controller('EventsController', function($scope) {

  });
