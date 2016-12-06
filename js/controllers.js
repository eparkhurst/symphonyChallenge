angular.module('Symphony').controller('MainController',($scope, requestService)=>{

  $scope.orderBy = "defaultPriceInCents"
  $scope.selectedTab = "defaultPriceInCents"
  $scope.range = {min:null,max:null}
  $scope.open=false;
  $scope.cartDisplay=[]
  $scope.cart = {};
  $scope.noMouse = true

  $scope.addItem = (item)=>{
    console.log(item);
    if($scope.cart[item.id]){
      $scope.cart[item.id].quantitiy ++
    }else{
      $scope.cart[item.id] = {
        quantitiy:1,
        info:item
      }
    }
    createCartDisplay($scope.cart)
  }
  function createCartDisplay(cart){
    $scope.cartDisplay = []
    var keyArray = Object.keys(cart)
    for (var i = 0; i < keyArray.length; i++) {
      $scope.cartDisplay.push(cart[keyArray[i]].info)
    }
  }

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
