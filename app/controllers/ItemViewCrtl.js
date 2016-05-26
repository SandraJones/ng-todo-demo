app.controller("ItemViewCtrl", function($scope, $routeParams, itemStorage) { //allows you to pull out variables from your url
	$scope.items = [];
	$scope.selectedItem={};
	console.log("routeParams", $routeParams.itemId);

	itemStorage.getItemList().then(function(itemCollection){
		console.log("itemCollection from promise",itemCollection);
		$scope.items = itemCollection;

		$scope.selectedItem = $scope.items.filter(function(itemDoesntMatter){//.filter loops thru the array and passes one item in
			return itemDoesntMatter.id === $routeParams.itemId;
		})[0];
	})
});