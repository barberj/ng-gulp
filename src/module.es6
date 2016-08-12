(function(app) {
  var config = function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider.
      state('github', {
        url: '/github',
        controller: 'GithubCtrl as ctrl',
        templateUrl: 'github.html'
      });

    $urlRouterProvider.
      otherwise('/github');
  };

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', config]);
})(angular.module('app', [
  'ui.router',
  'templates'
]));
