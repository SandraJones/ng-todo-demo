var app = angular.module("TodoApp", ["ngRoute"])
	.constant("firebaseURL", "https://todo-appskj.firebaseio.com/");//place for modules or plugins in parentheses

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/item-list.html",
		controller: "ItemListCtrl"
	
	}).when("/items/list", { 
		templateUrl: "partials/item-list.html",
		controller:"ItemListCtrl"

	}).when("/items/new", {
		templateUrl: "partials/item-new.html",
		controller: "ItemNewCtrl"
		
	}).when("/items/:itemId", {//this will be dynamically changing and pulling the id right out of the url
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl"
	}).
	when('/items/:itemId/edit', {
		templateUrl: 'partials/item-new.html',  
		controller: "ItemEditCtrl"
	}).
	when("/login", {
		templateUrl: "partials/login.html",
		controller: "LoginCtrl"
	}).
	otherwise("/");
});

//app tells computer that app.config is going to connect the index partial to the specific controller