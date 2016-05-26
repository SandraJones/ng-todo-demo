app.controller("ItemListCtrl", function($scope, $location, itemStorage) {//app.controller related to app.js
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
		