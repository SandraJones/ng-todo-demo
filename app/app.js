var app = angular.module("TodoApp", []);//place for modules or plugins in parentheses

app.controller("NavCtrl", function($scope ){
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});

app.controller("TodoCtrl", function($scope) {
	$scope.welcome = "Hello";
	$scope.showListView = true;//if set to true then the button must be clicked to see it;
	$scope.task = "";
	$scope.newTask = {};
	$scope.items = [
	{
		id: 0, 
		task: "mow the lawn",
		isCompleted: true,
		dueDate: "12/5/17",
		assignedTo: "greg",
		location: "Zoe's house",
		urgency: "low",
		dependencies: ["sunshine, clippers, hat, water, headphones"]
	},
	{
		id: 1, 
		task: "grade quizzes Zoe",
		isCompleted: false,
		dueDate: "12/5/17",
		assignedTo: "Joe",
		location: "NSS",
		urgency: "high",
		dependencies: ["wifi, tissues, vodka"]
	},
	{
		id: 2, 
		task: "nap",
		isCompleted: true,
		dueDate: "12/5/17",
		assignedTo: "Zoe",
		location: "Zoe's house",
		urgency: "low",
		dependencies: ["hammock, pillow, cat"]
	}
	]

	$scope.addNewItem = function() {
		console.log("you added a new item", $scope.newTask);
		//this is where a send to firebase will go 
		$scope.items.push($scope.newTask);
		$scope.newTask.isCompleted = false;
		$scope.newTask.id= $scope.items.length;
		$scope.newTask.push($scope.newTask);
		$scope.newTask = "";
	}
	$scope.newItem= function(){
		console.log("newItem");
		$scope.showListView = false;
	};
	$scope.allItem = function(){
		console.log("allItem");
		$scope.showListView = true;
	};



});
