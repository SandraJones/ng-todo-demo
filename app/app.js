//place for modules or plugins in parentheses
var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope ){
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});

app.controller("TodoCtrl", function($scope) {
	$scope.welcome = "Hello";
	$scope.showListView = true;

	$scope.newItem= function(){
		console.log("newItem");
		$scope.showListView = false;
	};
	$scope.allItem = function(){
		console.log("allItem");
		$scope.showListView = true;
	};


});
