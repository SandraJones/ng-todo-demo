app.controller("ItemListCtrl", function($scope, $http, $location) {
	$scope.items = [];
	//use similar syntax with the post and other methods
	var getItems=function(){
		$http.get("https://todo-appskj.firebaseio.com/items.json")
		   .success(function(itemObject) {
		   	var itemCollection = itemObject;
		   	console.log("itemObject", itemObject);
		   	Object.keys(itemCollection).forEach(function(key){ //returns an array of all the keys in the object, then it goes thru every key in that array and putting keyinto the funciton stores that value
		   		//give the obj at this spot an id property
		   		itemCollection[key].id=key;//adding an id=key is the firebase id
		   		//pushing the object into the items array
		   		$scope.items.push(itemCollection[key]);
		   	})
		   });
	 }
	 getItems();
		// it is only ./data because it gets called from index.html so we are in the root
		// <body ng-app = "TodoApp"> ties the app to the html
		$scope.itemDelete = function(itemId){
			console.log("itemId", itemId);
			$http
				.delete(`https://todo-appskj.firebaseio.com/items/${itemId}.json`)
				.success(function(response){
					console.log(response);
					getItems();
				});
		}
});
