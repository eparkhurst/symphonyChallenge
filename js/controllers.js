angular.module('Symphony').controller('MainController',($scope, requestService)=>{

  $scope.orderBy = "defaultPriceInCents"
  $scope.selectedTab = "defaultPriceInCents"
  $scope.range = {min:null,max:null}
  $scope.open=false;

  $scope.toggle = ()=>{
    $scope.open = !$scope.open
  }

  $scope.changeOrder = (order)=>{
    $scope.orderBy = order;
    $scope.selectedTab = order
  }

  requestService.getData().then((data)=>{
    $scope.data = data
  })

})
