(function(app) {
  function controller(GithubSvc) {
    class GithubCtrl {
      constructor() {
        GithubSvc.fetchStories().
          success((users) => this.users = users);
      }
    }

    return new GithubCtrl();
  }

  app.controller('GithubCtrl', ["GithubSvc", controller]);
})(angular.module('app'));
