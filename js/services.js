angular.module('Symphony').factory('requestService', function($http){
  return {
    getData:function(){
      return   $http.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').then(function(response){
        return response.data
      })
    }
  }
})
.factory('$exceptionHandler', [function($log, logErrorsToBackend) {
  return function myExceptionHandler(exception, cause) {
  };
}]);
