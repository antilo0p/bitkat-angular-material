angular
  .module('app')
  .controller('AllReservacionesController', ['$scope', '$state', 'Reservacion','Admin','$rootScope', function($scope,
      $state, Reservacion, Admin, $rootScope) {
    $scope.reservaciones = [];
    function getReservaciones() {
    Reservacion 
        .find({ include: ['servicio','proveedor'] })
        .$promise
        .then(function(results) {
          $scope.reservaciones= results;
        });
    }
    getReservaciones();

    $scope.addReservacion= function() {
    Reservacion 
        .create($scope.newReservacion)
        .$promise
        .then(function(reservacion) {
          $scope.newReservacion= '';
          $scope.reservacionForm.nombre.$setPristine();
          $('.focus').focus();
          getReservaciones();
        });
    };

    $scope.removeReservacion= function(item) {
     Reservacion 
        .deleteById(item)
        .$promise
        .then(function() {
          getReservaciones();
        });
    };
  }])
 .controller('MisReservacionesController', ['$scope', '$state', 'Reservacion', 'Cliente', '$rootScope', function($scope,
      $state, Reservacion, Cliente, $rootScope) {
    $scope.reservaciones = [];
    function getReservaciones() {
    Reservacion
        .find({
            filter: {
              where: {
                clienteId: $rootScope.currentUser.id
            },
            include: [
              'servicio',
              'proveedor'
            ]
          }
        })
        .$promise
        .then(function(results) {
          $scope.reservaciones= results;
        });
    }
    getReservaciones();

    $scope.addReservacion= function() {
    Reservacion
        .create($scope.newReservacion)
        .$promise
        .then(function(reservacion) {
          $scope.newReservacion= '';
          $scope.reservacionForm.nombre.$setPristine();
          $('.focus').focus();
          getReservaciones();
        });
    };

    $scope.removeReservacion= function(item) {
     Reservacion
        .deleteById(item)
        .$promise
        .then(function() {
          getReservaciones();
        });
    };
  }])

