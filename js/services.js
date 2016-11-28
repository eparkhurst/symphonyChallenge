angular.module('Symphony').factory('requestService', function($http){
  $http.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').then(function(response){
  })
  return {
    item:"from Requester"
  }
})
