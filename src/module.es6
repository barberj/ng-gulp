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
        template: `
          <h1>Github Users</h1>
          <ul>
            <li ng-repeat='user in ctrl.users'>
              <a href='https://github.com/{{user.login}}'>
                {{user.login}}
              </a>
            </li>
          </ul>`});

    $urlRouterProvider.
      otherwise('/github');
  };

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', config]);
})(angular.module('app', [
  'ui.router'
]));
