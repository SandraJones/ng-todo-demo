app.controller("ItemListCtrl", function($scope, $http, $location, itemStorage) {//app.controller related to app.js
	$scope.items = [];
	//itemStorage here makes the stuff available to the DOM
		itemStorage.getItemList().then(function(itemCollection){
				console.log("itemCollection", itemCollection);
				//hey scope, here's your items; the html is putting it on the DOM
				$scope.items = itemCollection;
				//now $scope.items is what gets returned from the factory
		})
	
		$scope.itemDelete = function(itemId){
			console.log("itemId", itemId);
			itemStorage.deleteItem(itemId).then(function(response){
				itemStorage.getItemList().then(function(itemCollection){
					$scope.items = itemCollection;
				})
			})
	}
});
			//$scope objects have different limitations on diff files


		// 	$http
		// 		.delete(`https://todo-appskj.firebaseio.com/items/${itemId}.json`)
		// 		.success(function(response){
		// 			console.log(response);
		// 			getItems();
		// 		});
		// }

	//use similar syntax with the post and other methods
	// var getItems=function(){
	// 	$http.get("https://todo-appskj.firebaseio.com/items.json")
	// 	   .success(function(itemObject) {
	// 	   	var itemCollection = itemObject;
	// 	   	console.log("itemObject", itemObject);
	// 	   	Object.keys(itemCollection).forEach(function(key){ //returns an array of all the keys in the object, then it goes thru every key in that array and putting keyinto the funciton stores that value
	// 	   		//give the obj at this spot an id property
	// 	   		itemCollection[key].id=key;//adding an id=key is the firebase id
	// 	   		//pushing the object into the items array
	// 	   		$scope.items.push(itemCollection[key]);
	// 	   	})
	// 	   });
	//  }
	//  getItems();
		// it is only ./data because it gets called from index.html so we are in the root
		// <body ng-app = "TodoApp"> ties the app to the html
