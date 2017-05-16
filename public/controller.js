var app = angular.module('myModule');
app.controller("myController",function($scope,$http){

$http.get('/random')
.then(function(response){

  $scope.posts=response.data
  console.log(response.data);
});

});
