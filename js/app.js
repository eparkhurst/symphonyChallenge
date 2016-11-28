angular.module('Symphony',[]).controller('MainController',function($scope, requestService){
  requestService.getData().then(function(data){
    $scope.test = data.extraInfo
    console.log(data);
  })
})
