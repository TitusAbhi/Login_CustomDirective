
var app = angular
 .module('myApp', ["ngRoute"])
 .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });;



