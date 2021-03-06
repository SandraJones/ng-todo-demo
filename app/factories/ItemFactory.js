"use strict";
app.factory("itemStorage", function($q, $http, firebaseURL){  

	var getItemList=function(){  //the whole todo or chore
	var items = [];
		return $q(function(resolve, reject){
		$http.get(firebaseURL + "items.json")
		   .success(function(itemObject) {
			  	var itemCollection = itemObject;
			   	Object.keys(itemCollection).forEach(function(key){ 
			   		itemCollection[key].id=key;
			   		items.push(itemCollection[key]);
			   	})
				  resolve(items);
					})
	   		.error(function(error){		
	   		  reject(error);
	   		});
		})
	}

	var deleteItem = function(itemId) {
		return $q(function(resolve, reject){
				$http
					.delete(firebaseURL + "items/" + itemId + ".json")
					.success(function(objectFromFirebase){
						resolve(objectFromFirebase)
					})
					//delete url has to be concatenated because we are passing in the itemId
		})
	}

	var postNewItem= function(newItem){
		return $q(function(resolve, reject){
			$http.post(
					firebaseURL + "items.json",			
					JSON.stringify({
						assignedTo: newItem.assignedTo,
						dueDate: newItem.dueDate,
						dependencies: newItem.dependencies,
						isCompleted: newItem.isCompleted,
						location: newItem.location,
						task: newItem.task,
						urgency:newItem.urgency
					})
				)
			.success(
				function(objectFromFirebase){
					resolve(objectFromFirebase);  //resolve means what giving it 
					// back the data so it's a way to complete the promise, but it doesn't mean anything
				}
			);
		});
	}

	var getSingleItem = function(itemId){	
				return $q(function(resolve, reject){
				$http.get(firebaseURL + "items/" + itemId + ".json")
				   .success(function(itemObject) {
					  	resolve(itemObject);
					   	})
			   		.error(function(error){		
			   		  reject(error);
			   });
			})		
	}

	var updateItem = function(itemId, newItem){
     return $q(function(resolve, reject) {
        $http.put(
          firebaseURL + "items/" + itemId + ".json",
            JSON.stringify({
                assignedTo: newItem.assignedTo,
                dependencies: newItem.dependencies,
                dueDate: newItem.dueDate,
                isCompleted: newItem.isCompleted,
                location: newItem.location,
                task: newItem.task,
                urgency: newItem.urgency
            })
         )
          .success(
              function(objectFromFirebase) {
                  resolve(objectFromFirebase);
              }
          );
        });
  };

  var updateCompletedStatus = function(newItem){
      return $q(function(resolve, reject) {
          $http.put(
              firebaseURL + "items/" + newItem.id + ".json",
              JSON.stringify({
                  assignedTo: newItem.assignedTo,
                  dependencies: newItem.dependencies,
                  dueDate: newItem.dueDate,
                  isCompleted: newItem.isCompleted,
                  location: newItem.location,
                  task: newItem.task,
                  urgency: newItem.urgency
              })
          )
          .success(
              function(objectFromFirebase) {
                  resolve(objectFromFirebase);
              }
          );
      });
  };

     //key and a function, key and a function, key and a function
	return {getItemList:getItemList, updateCompletedStatus:updateCompletedStatus, 
	 	updateItem:updateItem, getSingleItem:getSingleItem, deleteItem:deleteItem, 
	 	postNewItem:postNewItem}
//way to call from any file, have access because in app.controller itemStorage is passed in so we can use these functions everywhere
});

// line 1 //order of q and http here do not matter if I do it this way
	//q handles promises for angular; q is angular's version of promises and http is like xhr
	//"itemStorage" is the name your project knows your factory b
// ==========================================
// Object.keys(itemCollection).forEach(function(key){ //returns an array of all the keys in the object, then it goes thru every key in that array and putting keyinto the funciton stores that value
			   		//give the obj at this spot an id property
			   		// itemCollection[key].id=key;//adding an id=key is the firebase id
			   		//pushing the object into the items array
			   		// items.push(itemCollection[key]);