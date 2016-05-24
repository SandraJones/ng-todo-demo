var app = angular.module("TodoApp", ["ngRoute"]);//place for modules or plugins in parentheses

app.config(function($routeProvider){
	$routeProvider.when("/items/list", {
		templateUrl: "partials/item-list.html",
		controller:"ItemListCtrl"

	}).when("/items/new", {
		templateUrl: "partials/item-new.html",
		controller: "ItemNewCtrl"
		
	}).when("/items/:itemId", {//this will be dynamically changing and pulling the id right out of the url
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl"
	}).
	otherwise("/items/list");
});

