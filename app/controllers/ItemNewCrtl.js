app.controller("ItemNewCtrl", function($scope, $location, itemStorage) {
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
		itemStorage.postNewItem($scope.newTask)
			.then(function successCallback(response){  //after function, you put the function name
				console.log(response);
				$location.url("/items/list");
			});
	};
});
	