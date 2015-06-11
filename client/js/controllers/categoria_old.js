
angular
  .module('app')
  .controller('CategoriaController', ['$scope', '$state', 'Categoria','Empresa', '$rootScope', '$mdSidenav', '$mdBottomSheet', '$log', function($scope,
      $state, Categoria, Empresa, $rootScope, $mdSidenav, $mdBottomSheet, $log) {
    var self = this;
    
    self.selected = null;
    self.categories = [];
    self.selectCategory = selectCategory;
    self.toggleList = toggleCategoriesList;
    self.showServiceOptions = showServiceOptions;

    $scope.categorias= [];
    $rootScope.empresa = {};
    function getCategorias() {
      Categoria
        .find()
        .$promise
        .then(function(results) {
          self.categories = [].concat[results];
          self.selected = results[0];
          $scope.categorias= results;
        });
    }
    getCategorias();
    function toggleCategoriesList() {
        var pending = $mdBottomSheet.hide();
      
        pending.then(function() {
          $mdSidenav('left').toggle();
        });
    }
    function selectCategory( category ) {
      self.selected = angular.isNumber( category ) ? $scope.categories[category]: category;
      self.toggleCategoriesList();
    }
    function showServiceOptions($event) {
      var category = self.selcted;

      return $mdBottomSheet.show({
        parent: angular.element(document.getELementById('content')),
        templateUrl: 'views/serviceSheet.html',
        controller: [  '$scope', 'Categoria', 'Servicio', '$state','$mdBottomSheet', CategoriaServiciosController],
        controlerAs: "cp",
        bindToController: true,
        targetEvent: $event
      ]).then(function(clickedItem) {
        clickedItem && $log.debug( clickedItem.name + 'clicked!');
      });
        
    }
    function getEmpresa() {
     Empresa 
        .findOne()
        .$promise
        .then(function(results) {
          $rootScope.empresa= results;
        });
    }
    getEmpresa();
    $scope.addCategoria = function() {
    Empresa
        .findOne()
        .$promise
        .then(function(empresa) {
         Categoria
            .create($scope.newCategoria)
            .$promise
            .then(function(categoria) {
                $scope.newCategoria= '';
                $scope.categoriaForm.nombre.$setPristine();
                $('.focus').focus();
                getCategorias();
        });
      });
    };
    $scope.removeCategoria= function(item) {
      Categoria
        .deleteById(item)
        .$promise
        .then(function() {
          getCategorias();
        });
    };
  }])
 .controller('CategoriaServiciosController', ['$scope', 'Categoria', 'Servicio', '$state',
 '$stateParams',function($scope, Categoria, Servicio, $state, $stateParams) {
  $scope.servicios= []; 
  console.log('Getting services for category id:', $stateParams.id);
  Categoria
      .findOne({ filter: { where: { id: $stateParams.id} } })
      .$promise
      .then(function(categoria) {
          console.log('found categoria', categoria);
          Servicio
          .find({
            filter:{ where:{ categoriaId: $stateParams.id } }
          })
          .$promise
          .then(function(servicios) {
            console.log('category servicios', servicios);
            $scope.categoria = categoria;
            $scope.servicios = servicios;
        });
  });
}]);
