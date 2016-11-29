angular.module('Symphony',[])
.filter('rangeFilter', ()=> {
  return ( items, rangeInfo ) =>{
    if(rangeInfo){
      var filtered = []
      var min = Number(rangeInfo.min)
      var max
      if(rangeInfo.max==null || rangeInfo.max.length ==0 ){
        max = 10000
      }else{
        max = Number(rangeInfo.max)
      }

      angular.forEach(items, (item) =>{
        if( item.defaultPriceInCents/100 >= min && item.defaultPriceInCents/100 <= max ) {
            filtered.push(item)
        }
      })
      return filtered
    }
  }
})
