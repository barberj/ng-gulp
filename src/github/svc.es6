(function(app) {
  function service($http) {
    class GithubSvc {
      fetchStories() {
        return $http.get('https://api.github.com/users')
      }
    }

    return new GithubSvc();
  }

  app.service('GithubSvc', ["$http", service]);
})(angular.module('app'));
