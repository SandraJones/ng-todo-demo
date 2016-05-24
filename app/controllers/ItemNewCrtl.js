app.controller("ItemNewCtrl", function($scope, $http, $location) {
	$scope.newTask = {
		//want to add in the properties that I'm going to need
		//we want our firebase data to all have the same structure
		//we will assign empty strings to everything to catch user error
		assignedTo: "",
		dueDate: "",
		dependencies: "",
		isCompleted: false,
		location: "",
		task: "",
		urgency: ""
	};

	$scope.addNewItem = function() {
		$http.post(
			"https://todo-appskj.firebaseio.com/items.json", 
			JSON.stringify({
				assignedTo: $scope.newTask.assignedTo,
				dueDate: $scope.newTask.dueDate,
				dependencies: $scope.newTask.dependencies,
				isCompleted: $scope.newTask.isCompleted,
				location: $scope.newTask.location,
				task: $scope.newTask.task,
				urgency: $scope.newTask.urgency
		})
	)
	.success(function(response){
		console.log(response);
		$location.url("/items/list")//make sure it matches what we have in app.js
	});	
};
});