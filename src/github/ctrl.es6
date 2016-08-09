(function(app) {
  function controller($scope, GithubSvc) {
    class GithubCtrl {
      constructor() {
        GithubSvc.fetchStories().
          success((users) => $scope.users = users);
      }
    }

    return new GithubCtrl();
  }

  app.controller('GithubCtrl', ["$scope", "GithubSvc", controller]);
})(angular.module('app'));
