var app = angular.module("TodoApp", ["ngRoute"])
	.constant("firebaseURL", "https://todo-appskj.firebaseio.com/");//place for modules or plugins in parentheses

//this function is not related to angular at all, we are putting it here and we want to use it in our html

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		console.log("User is authenticated, resolve route promise");
		resolve();
	} else {
		console.log("user is not authenticated, reject route promise");
		reject();
	}
})

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/item-list.html",
		controller: "ItemListCtrl",
		resolve: {isAuth}
	
	}).when("/items/list", { 
		templateUrl: "partials/item-list.html",
		controller:"ItemListCtrl",
		resolve: {isAuth}

	}).when("/items/new", {
		templateUrl: "partials/item-new.html",
		controller: "ItemNewCtrl",
		resolve: {isAuth}
		
	}).when("/items/:itemId", {//this will be dynamically changing and pulling the id right out of the url
		templateUrl: "partials/item-details.html",
		controller: "ItemViewCtrl",
		resolve: {isAuth}
	}).
	when('/items/:itemId/edit', {
		templateUrl: 'partials/item-new.html',  
		controller: "ItemEditCtrl",
		resolve: {isAuth}
	}).
	when("/login", {
		templateUrl: "partials/login.html",
		controller: "LoginCtrl"
	}).
	when("/logout", {
		templateUrl: "partials/login.html",
		controller: "LoginCtrl"
	}).	
	otherwise("/");
});

//app tells computer that app.config is going to connect the index partial to the specific controller

app.run(($location) => {
	let todoRef = new Firebase("https://todo-appskj.firebaseio.com/");

	todoRef.onAuth(authData => {
		if(!authData) {  //if there is no authentication data, or if you are not authenticated then go here
			$location.path("/login");//if you are unauthorized you will be directed to login page
		};
	});
});


