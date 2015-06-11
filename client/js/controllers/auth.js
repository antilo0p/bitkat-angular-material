angular
  .module('app')
  .controller('AuthLoginController', ['$scope', 'AuthClienteService', '$state',
      function($scope, AuthClienteService, $state) {
    $scope.user = {
      email: 'cliente1@bitkat.com',
      password: 'cliente'
    };

    $scope.login = function() {
      AuthClienteService.login($scope.user.email, $scope.user.password)
        .then(function() {
          $state.go('mis-reservaciones');
        });
    };
  }])
  .controller('AuthLogoutController', ['$scope', 'AuthClienteService', '$state',
      function($scope, AuthClienteService, $state) {
    AuthClienteService.logout()
      .then(function() {
        $state.go('all-categorias');
      });
  }])
  .controller('SignUpController', ['$scope', 'AuthClienteService', '$state',
      function($scope, AuthClienteService, $state) {
    $scope.user = {
      email: 'cliente9@bitkat.com',
      password: 'cliente'
    };
    $scope.register = function() {
      AuthClienteService.register($scope.user.email, $scope.user.password)
        .then(function() {
          $state.transitionTo('sign-up-success');
        });
    };
  }])
  .controller('AuthAdminLoginController', ['$scope', 'AuthAdminService', '$state',
      function($scope, AuthAdminService, $state) {
    $scope.user = {
      email: 'rigreyes@gmail.com',
      password: 'zatanaz'
    };
    $scope.login = function() {
      AuthAdminService.login($scope.user.email, $scope.user.password)
        .then(function() {
          $state.go('all-reservaciones');
        });
    };
  }])
  .controller('AuthAdminLogoutController', ['$scope', 'AuthAdminService', '$state',
      function($scope, AuthAdminService, $state) {
    AuthAdminService.logout()
      .then(function() {
        $state.go('all-categorias');
      });
  }])
  .controller('SignUpAdminController', ['$scope', 'AuthAdminService', '$state',
      function($scope, AuthAdminService, $state) {
    $scope.user = {
      email: 'newadmin@bitkat.com',
      password: 'newadmin'
    };

    $scope.register = function() {
      AuthAdminService.register($scope.user.email, $scope.user.password)
        .then(function() {
          $state.transitionTo('sign-up-success');
        });
    };
  }])

