angular
  .module('app', [
    'lbServices',
    'ui.router',
    'ngMaterial'
  ])
.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider', function($stateProvider,
      $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

    $mdIconProvider
         .defaultIconSet("svg/avatars.svg", 128)
         .icon("menu"       , "svg/menu.svg"        , 24)
         .icon("share"      , "svg/share.svg"       , 24)
         .icon("google_plus", "svg/google_plus.svg" , 24)
        .icon('hangout', 'svg/hangout.svg', 24)
        .icon('mail', 'svg/mail.svg', 24)
        .icon('message', 'svg/message.svg', 24)
        .icon('facebook', 'svg/facebook.svg', 24)
        .icon('twitter', 'svg/twitter.svg', 24)
        .iconSet("avatars", 'svg/avatar-icons.svg',128)
        .icon("phone"      , "svg/phone.svg"       , 24);

    $mdThemingProvider.theme('default')
         .primaryPalette('deep-purple')
         .accentPalette('pink');

    $stateProvider
      .state('all-categorias', {
        url: '/home',
        templateUrl: 'views/all-categorias.html',
        controller: 'CategoriaController'
      })
      .state('all-servicios', {
        url: '/servicios',
        templateUrl: 'views/all-servicios.html',
        controller: 'ServicioController'
      })
      .state('servicios-de-categoria', {
        url: '/servicios/:id',
        templateUrl: 'views/all-servicios.html',
        controller: 'CategoriaServiciosController'
      })
      .state('all-reservaciones', {
        url: '/reservaciones',
        templateUrl: 'views/all-reservaciones.html',
        controller: 'AllReservacionesController'
      })
      .state('all-proveedores', {
        url: '/proveedores',
        templateUrl: 'views/all-proveedores.html',
        controller: 'ProveedoresController'
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthLoginController'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/login.html',
        controller: 'AuthAdminLoginController'
      })
      .state('admin-logout', {
        url: '/admin-logout',
        templateUrl: 'views/login.html',
        controller: 'AuthAdminLoginController'
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController'
      })
      .state('mis-reservaciones', {
        url: '/mis-reservaciones',
        templateUrl: 'views/mis-reservaciones.html',
        controller: 'MisReservacionesController'
      })
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'views/sign-up-form.html',
        controller: 'SignUpController'
      })
      .state('sign-up-success', {
        url: '/sign-up/success',
        templateUrl: 'views/sign-up-success.html'
      });
    $urlRouterProvider.otherwise('/home');
  }
])
 .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
      if (next.authenticate && !$rootScope.currentUser) {
        event.preventDefault(); //prevent current page from loading
        $state.go('forbidden');
      }
    });
  }]);


