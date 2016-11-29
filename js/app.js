angular.module('Symphony',[]).controller('MainController',function($scope, requestService){
  requestService.getData().then(function(data){
    $scope.data = {}
    $scope.data.bannerImage  =data.bannerImage.ref
    $scope.data.pageTitle = data.pageTitle
    $scope.data.items = data.products.map((e)=>{
      e.mainImage.ref = "https:"+e.mainImage.ref
      return e
    })
    $scope.orderBy = "msrpInCents"
    $scope.selectedTab = "msrpInCents"
    $scope.range = {min:null,max:null}
    $scope.open=false;

    $scope.toggle = function(){
      console.log("hit");
      console.log($scope.open);
      $scope.open = !$scope.open
    }

    $scope.changeOrder = function(order){
      $scope.orderBy = order;
      $scope.selectedTab = order
    }
  })
})
.filter('rangeFilter', function() {
  function filter( items, rangeInfo ) {
    var filtered = [];
    var max;
    var min;
    if(rangeInfo.max==null || rangeInfo.max.length ==0 ){
      max = 1000
    }else{
      max = Number(rangeInfo.max);
    }
    min = Number(rangeInfo.min);
    angular.forEach(items, function(item) {
      if( item.msrpInCents/100 >= min && item.msrpInCents/100 <= max ) {
          filtered.push(item);
      }
    });
    return filtered;
  };

  return filter
})
