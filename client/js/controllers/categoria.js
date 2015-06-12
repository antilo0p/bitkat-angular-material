
angular
  .module('app')
  .controller('CategoriaController', ['$scope', '$state', 'Categoria','Empresa','Servicio', 'Reservacion', '$rootScope', '$mdSidenav', '$mdBottomSheet','$mdUtil', '$mdDialog', '$animate','$log', function($scope,
      $state, Categoria, Empresa, Servicio, Reservacion, $rootScope, $mdSidenav,$mdBottomSheet, $mdUtil, $mdDialog, $animate, $log) {
    var self = this;
    
    self.selected = null;
    self.categories = [];
    self.selectCategory = selectCategory;
    self.reserva_servicio = reserva_servicio;
    self.submit_reserva = submit_reserva;
    self.close_reserva= close_reserva;
    self.toggleCategoriesList= toggleCategoriesList;
    self.showServiceOptions = showServiceOptions;
    self.update_fecha = update_fecha;
    $scope.success= '';
    $scope.imagePath = 'img/washedout.png'
    $scope.categorias= [];
    $rootScope.empresa = {}
    function getEmpresa() {
     Empresa
        .findOne()
        .$promise
        .then(function(results) {
          $rootScope.empresa= results;
        });
    }
    getEmpresa();
    function getCategorias() {
      Categoria
        .find({ filter: { include:'servicios'} })
        .$promise
        .then(function(results) {
          self.categories = results;
          self.selected = results[0];
          $scope.categorias= results;
          $rootScope.categorias = results;
        });
    }
    getCategorias();
    function toggleCategoriesList() {
 //       var pending = $mdBottomSheet.hide() || getCategorias();
 //       pending.then(function() {
 //        $mdSidenav('left').toggle();
 //      });
     $mdSidenav('left')
          .toggle()
          .then(function(){
          $log.debug('activada');
      });
    }
   function reserva_servicio(event, servicio, nueva_fecha) {
     if (event === null && servicio === null ) {
         // var service_target = $scope.service_target;
          console.log('usando service scope ', $scope.service_target);
      } else {
         var service_target = servicio;
      }
     var fecha_hoy = new Date();
     $scope.hoy = fecha_hoy;
     if (event === null &&  servicio === null && nueva_fecha !== null ) {
        var la_fecha = new Date(nueva_fecha);
        console.log('Formated fecha valida:', la_fecha.toISOString());
       // var slots = Servicio.disponibilidad([ { id: $scope.service_target.id }, { fecha: la_fecha.toLocaleDateString() } ]);
        console.log('slots using scope servicio id: ', $scope.service_target.id);
        var slots = Servicio.disponibilidad({ id: $scope.service_target.id, fecha: la_fecha.toISOString() });
      } else {
        var slots = Servicio.disponibilidad({ id: servicio.id});
        $scope.service_target = servicio;
        $scope.nueva_fecha_reserva = fecha_hoy;
      }
     $scope.slots = slots;
     $scope.reservacion = {
         servicio: $scope.service_target,
         servicioId: $scope.service_target.id,
         clienteId: "555e5cdb9777e8e4254833f5",
         inicio: '',
         status: 0,
         fecha: fecha_hoy
      };
      if ( nueva_fecha === null ) {
      $mdSidenav('right')
          .toggle()
           .then(function () {
             $log.debug("reservacion en proceso...");
        });
      }  else {
            $log.debug("nuevos slots cargados");
      }
    }

    function submit_reserva($event, horario, reservacion ) {
        var reservacion = $scope.reservacion;
        var reserva_inicio = new Date(horario);
        var reserva_fin = new Date(reserva_inicio.setMinutes(parseInt($scope.service_target.duracion)));
        console.log('reserva inicio: ' + horario + '-' + reserva_inicio);
        console.log('reserva inicio: ' + horario + '-' + reserva_fin);
        var hoy = $scope.hoy;
        var servicio = $scope.service_target;
        console.log('hoy:' + $scope.hoy + ' - ' + $scope.service_target.nombre);
        console.log($scope.reservacion);
        Reservacion.create({
            nota: $scope.reservacion.nota,
            inicio: reserva_inicio,
            fin: new Date(reserva_fin),
            fecha_creacion: hoy,
            clienteId: $scope.reservacion.clienteId,
            servicioId: $scope.reservacion.servicioId,
            slot: 1,
        }).$promise
          .then(function(reserva){
              console.log('reservacion creada', reserva);
              $scope.success = 'Reservacion '+ reserva.id + ' para ' + reserva.inicio  + ' creada.';
              success_reserva();
          });
    }

    function update_fecha(event ) {
      console.log('event', event);
      format_fecha = $scope.reservacionForm.nueva_fecha.$viewValue.toString().split("-");
      string_fecha = format_fecha[1] +'-'+format_fecha[2]+'-'+format_fecha[0]; 
      console.log('formated received fecha from date picer :', string_fecha);
      target = new Date(string_fecha);
      console.log('nueva fecha:', target);
      $scope.nueva_fecha_reserva = target;

      reserva_servicio(null, null,$scope.nueva_fecha_reserva);
    }

    function success_reserva(event){
      $mdDialog.show(
         $mdDialog.alert()
          .title('Reservado')
          .content($scope.success)
          .ariaLabel('Confirmacion de Reserva')
          .ok('Entendido!')
          .targetEvent(event)
         );
        $scope.success='';
        close_reserva();
    }
   function close_reserva() {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("reservacion cerrada ");
        });
    }

    function selectCategory( category ) {
      self.selected = angular.isNumber( category ) ? $scope.categories[category]: category;
      self.toggleCategoriesList();
    }

    function showServiceOptions($event) {
      var category = self.selected;
      var actions = [
        { name: 'E-mail', icon: 'mail', value: 'mailto:rigreyes@gmail.com' },
        { name: 'Telefono', icon: 'phone', value: 'tel:3333675990' },
        { name: 'Facebook', icon: 'facebook', value: 'http://facebook.com/antilo0p'}
      ];
      $scope.actions = actions;
      return $mdBottomSheet.show({
        parent: angular.element(document.getElementById('content')),
        templateUrl: 'views/serviceSheet.html',
        controller: [ '$scope', '$log','$mdBottomSheet', BottomController],
        controllerAs: "cp",
        bindToController: true,
        targetEvent: $event
      }).then(function(action) {
        $log.debug( action + ' hizo click!');
 //       $scope.alert=id;
      });

      function BottomController( $scope,$log, $mdBottomSheet) {
        this.category = category;
       // this.service_target =  service_target;
        //this.service_target_id = service_target_id;
        this.actions = actions;
        this.Contacta= function(action) {
            $log.debug( action + ' - Contacto!');
            $mdBottomSheet.hide(action);
          };
      }
    }
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
