//place for modules or plugins in parentheses
var app = angular.module("TodoApp", []);

app.controller("TodoCtrl", function($scope) {
	$scope.welcome = "Hello";
})
