angular.module('Symphony',[]).controller('MainController',function($scope, requestService){
  requestService.getData().then(function(data){
    console.log(data);
    $scope.test = data.extraInfo
    $scope.items = data.products
  })
})
