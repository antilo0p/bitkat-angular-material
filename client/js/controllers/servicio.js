angular
  .module('app')
  .controller('ServicioController', ['$scope', '$state', 'Servicio', function($scope,
     $state, Servicio) {
    $scope.servicios= [];
    function getServicios() {
     Servicio 
        .find()
        .$promise
        .then(function(results) {
          $scope.servicios= results;
        });
    }
    getServicios();

    $scope.addServicio= function() {
    Servicio 
        .create($scope.newServicio)
        .$promise
        .then(function(servicio) {
          $scope.newServicio= '';
          $scope.servicioForm.nombre.$setPristine();
          $('.focus').focus();
          getServicios();
        });
    };

    $scope.removeServicio= function(item) {
     Servicio 
        .deleteById(item)
        .$promise
        .then(function() {
          getServicios();
        });
    };
  }]);
