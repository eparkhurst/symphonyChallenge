angular.module('Symphony',[]).controller('MainController',function($scope, requestService){
  requestService.getData().then(function(data){
    console.log(data.bannerImage.ref);
    $scope.data = {}
    $scope.data.bannerImage  =data.bannerImage.ref
    $scope.data.pageTitle = data.pageTitle
    $scope.data.items = data.products
  })
})
