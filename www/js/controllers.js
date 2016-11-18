angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicPopover, $cordovaDialogs, $cordovaMedia, $cordovaFile) {
$scope.options = {
  loop: false,
  effect: 'fade',
  speed: 500,
}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('Slide change is beginning');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.slider.activeIndex;
  $scope.previousIndex = data.slider.previousIndex;
});  
 
$scope.showModal = function(templateUrl) {
  $ionicModal.fromTemplateUrl(templateUrl, {
    scope: $scope
  }).then(function(modal) {  
    $scope.modal = modal;
    $scope.modal.show();
  });  
  
}

$scope.closeModal = function() {
  $scope.modal.hide();
  $scope.modal.remove()
};

$scope.openModal = function(id) {
    switch (id) {
      
      case 'Cabas':
        $scope.artist = 'Cabas';
        $scope.name = 'Sabrá Dios';
        $scope.song = 'SABRA_DIOS.mp3';
        break;
        case 'Jose':
        $scope.artist = 'José Gaviria';
        $scope.name = 'Cuando Te Beso';
        $scope.song = 'CUANDO_TE_BESO.mp3';
        break;
        case 'Santi':
        $scope.artist = 'Santiago Cruz';
        $scope.name = 'Yo Lo Comprendo';
        $scope.song = 'YO_LO_COMPRENDO.mp3';
        break;
        case 'Albert':
        $scope.artist = 'Alberto Plaza';
        $scope.name = 'Historia De Un Amor';
        $scope.song = 'HISTORIA_DE_UN_AMOR.mp3';
        break;
        case 'Carlos':
        $scope.artist = 'Carlos Ponce';
        $scope.name = 'Por Debajo De La Mesa';
        $scope.song = 'POR_DEBAJO_DE_LA_MESA.mp3';
        break;
        case 'Lucas':
        $scope.artist = 'Lucas Arnau';
        $scope.name = 'Llorar Por Dentro';
        $scope.song = 'LLORAR_POR_DENTRO.mp3';
        break;
        case 'Chabuco':
        $scope.artist = 'Chabuco';
        $scope.name = 'La Gloria Eres Tú;';
        $scope.song = 'LA_GLORIA_ERES_TU.mp3';
        break;
        case 'Jorge':
        $scope.artist = 'Jorge Villamizar';
        $scope.name = 'No Te Importa Saber';
        $scope.song = 'NO_TE_IMPORTA_SABER.mp3';
        break;
        case 'Victor':
        $scope.artist = 'Victor Manuel';
        $scope.name = 'Madrigal';
        $scope.song = 'MADRIGAL.mp3';        
        break;
        case 'Ana':
        $scope.artist = 'Ana Belén';
        $scope.name = 'Contigo En La Distancia';
        $scope.song = 'CONTIGO_EN_LA_DISTANCIA.mp3';
        break;
      default:
        break;
    }

      var isAndroid = ionic.Platform.isAndroid();
      var src = "";

      if (isAndroid) {
          src = "/android_asset/www/mp3/";
      }
      else
      {
        src = "mp3/";
      }

      src += $scope.song; 
      
      var media = $cordovaMedia.newMedia(src);

      media.play();

    $scope.artist = id;
    $scope.playerModal.show();
}
 
$scope.updateSlideStatus = function(slide) {
  var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
  if (zoomFactor == $scope.zoomMin) {
    $ionicSlideBoxDelegate.enableSlide(true);
  } else {
    $ionicSlideBoxDelegate.enableSlide(false);
  }
};

    $scope.about = function() {
        $cordovaDialogs.alert('Sura Música 2016. Todos los derechos reservados.', 'Acerca de...', 'Aceptar')
    .then(function() {
      // callback success
    });
    };

    $ionicModal.fromTemplateUrl('templates/player-modal.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.playerModal = modal;
    });

   

     $ionicPopover.fromTemplateUrl('templates/popoverMusic.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popoverMusic = popover;
  });
    
});