(function(app) {
  function factory($http) {
    class GithubSvc {
      static fetchStories() {
        return $http.get('https://api.github.com/users')
      }
    }

    return GithubSvc;
  }

  app.factory('GithubSvc', ["$http", factory]);
})(angular.module('app'));
