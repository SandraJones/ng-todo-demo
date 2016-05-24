app.controller("ItemViewCtrl", function($scope, $http, $routeParams) { //allows you to pull out variables from your url
	$scope.items = [];
	$scope.selectedItem={};
	console.log("routeParams", $routeParams.itemId);

	$http.get("https://todo-appskj.firebaseio.com/items.json")
		   .success(function(itemObject) {
			   	var itemCollection = itemObject;
			   	console.log("itemObject", itemObject);
			   	Object.keys(itemCollection).forEach(function(key){ //returns an array of all the keys in the object, then it goes thru every key in that array and putting keyinto the funciton stores that value
			   		//give the obj at this spot an id property
			   		itemCollection[key].id=key;//adding an id=key is the firebase id
			   		//pushing the object into the items array
			   		$scope.items.push(itemCollection[key]);

			   		//going to see if there is a match btwn id = to routeparams and this returns an array
			   		$scope.selectedItem = $scope.items.filter(function(item){
			   			return item.id === $routeParams.itemId;
			   		})[0];
				   	})
		   });
	});
