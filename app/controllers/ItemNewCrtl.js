app.controller("ItemNewCtrl", function($scope) {
	$scope.newTask = {};
	$scope.items = [];

	$scope.addNewItem = function() {
		console.log("you added a new item", $scope.newTask);
		//this is where a send to firebase will go 
		$scope.newTask.isCompleted = false;
		$scope.newTask.id= $scope.items.length;
		$scope.items.push($scope.newTask);
		$scope.newTask = "";
	};
	});
