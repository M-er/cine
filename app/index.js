angular.module('cineAPP', ['ngMaterial'])

.config(function ($mdThemingProvider, $mdIconProvider) {
  $mdThemingProvider.theme('forest')
  .primaryPalette('brown')
  .accentPalette('green');

  $mdIconProvider
  .defaultIconSet('img/icons/sets/social-icons.svg', 24);
})
.controller('cineCtrl', function($scope) {
  $scope.imagePath1 = './assets/img/peliprueba1.jpg';
  $scope.imagePath2 = './assets/img/peliprueba2.jpg';
  $scope.peliculas = [];
  $scope.info1 ="SEMANA DEL 03 AL 09 DE ENERO"
  $scope.info2 ="SEMANA DEL 03 AL 09 DE ENERO"
  $scope.titulo1 = "Wifi Ralph"
  $scope.titulo2 = "Bumblebee"
  $scope.init = function(){
    console.log("Sistema inicializado.")
  }
  $scope.cine1 = "Milenium"
  $scope.cine2 = "Amadeus"
  $scope.fondo1 = "bg-primary"
  $scope.fondo2 = "bg-danger"
});
