angular.module('Symphony',[]).controller('MainController',function($scope, requestService){
  $scope.test = requestService.item
})
