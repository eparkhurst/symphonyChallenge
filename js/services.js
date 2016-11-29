angular.module('Symphony').factory('requestService', ($http)=>{
  return {
    getData:()=>{
      return   $http.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').then((response)=>{
        var data = response.data
        data.items = data.products.map((e)=>{
          e.mainImage.ref = "https:"+e.mainImage.ref
          return e
        })
        return data
      })
    }
  }
})
