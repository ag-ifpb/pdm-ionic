// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('categoriesController', function($scope, $http, $window, $state, $rootScope) {

  // var post = '[{"detail":"<p>Unhas decoradas com sapatinhos All Star Laranja com Branco &nbsp;e detalhes das passadeiras em preto. No desenho tem v?rios detalhes, incluindo as costuras.&nbsp;<\/p><p>Material Utilizado:<\/p><p><\/p><ul><li>Base ou esmalte incolor,<br><\/li><li>Esmalte Laranja,<\/li><li>Tinta branca para tecido,<br><\/li><li>Tinta preta&nbsp;para tecido,<br><\/li><li>Tinta Marrom para tecido,<\/li><li>Tinta Amarela para tecido,<\/li><li>Extra brilho<br><\/li><li>Pincel n 0 e 1<br><\/li><\/ul><p><\/p><p>Passo a passo:<br><\/p><ol><li>Passo: Esmalte as unhas com a base ou o esmalte incolor,<br><\/li><li>Passo: Esmalte as unhas com o esmalte laranja,<br><\/li><li>Passo: Quando o esmalte estiver seco, faça&nbsp;as francesinhas com&nbsp;a tinta&nbsp;branca&nbsp;para tecido,<br><\/li><li>Passo: Em seguida faça os contornos das lateriais do sapatinho&nbsp;com a tinta marrom para tecido,<br><\/li><li>Passo: E seguida, faça os pequenos pontinhos com a tinta amarela simbolizando duas costuras proximas aos contornos das laterias, estes pontinhos ficam entre os buraquinhos dos cadarços e as bordas das laterias<\/li><li>Passo: Em seguida, faça as pequenas bolinhas com a tinta preta para tecido representando os buraquinhos dos cadarços, as passadeiras,<\/li><li>Passo: Em seguida, com o pincel fino e com a tinta branca&nbsp;para tecido, faça os cadarços,<\/li><li>Passo: Espere secar e passe uma camada de extra brilho<\/li><\/ol>","category":"CA00000021", "title":"All Star Laranjinha", "description":"Unhas decoradas com sapatinhos All Star", "path":"https://2.bp.blogspot.com/-_az0e3oKZBk/V64oq3CBvII/AAAAAAAABBs/CIxdJTNzb9gIofYGL3je4H6EekzcEhqMACLcB/s1600/unhas_all_star1.jpg", "reference":"CA00000023"}]';

  $http.get('http://1v00r02n.service.ag-simplesebellas.appspot.com/query/nozip/postings/20').
  then(function(response) {
    $scope.posts = response.data;
  });

  // $scope.posts = JSON.parse(post);

  console.log($scope.post);

  $scope.setDetails=function(val){

    var x = $scope.posts.filter(function (post){
      return post.title === val;
    });

    $window.location.assign('details.html?details='+JSON.stringify(x));
  };

})

.controller('detailsController', function($scope, $rootScope, $window, $sce) {
  var details = $window.location.search.substr($window.location.search.indexOf('=')+1, $window.location.search.length);
  details = details.replace(/%20/g, ' ');
  details = details.replace(/%22/g, '"');
  details = details.replace(/%3C/g, '<');
  details = details.replace(/%3E/g, '>');
  details = details.replace(/%C3%A7/g, 'ç');
  details = details.replace(/%C3%A3/g, 'ã');
  details = details.replace(/%C3%B5/g, 'õ');
  details = details.replace(/%C3%A2/g, 'â');
  details = details.replace(/%C3%A1/g, 'á');
  details = details.replace(/%C3%BA/g, 'ú');
  details = details.replace(/%C3%A9/g, 'é');

  $scope.details = JSON.parse(details);

  $scope.details = $scope.details[0];

  $scope.renderHtml = function(htmlCode){
    return $sce.trustAsHtml($scope.details.detail);
  }

})

.controller('loaderController', function($scope, $window) {

  setTimeout(() => {
    $scope.goToHome();
  }, 1000);

  $scope.goToHome = function() {
    $window.location.assign('home.html');
  }

})
//
// .config(function($stateProvider, $urlRouterProvider) {
//
//   $stateProvider
//   .state('d', {
//     url: '/details',
//     templateUrl: 'details.html'
//   })
// });
