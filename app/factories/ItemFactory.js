"use strict";
app.factory("itemStorage", function($q, $http, firebaseURL, AuthFactory){  

	var getItemList=function(){  //the whole todo or chore
	var items = [];
	let user = AuthFactory.getUser();
	console.log("user", user);
		return $q(function(resolve, reject){
		$http.get(`${firebaseURL}items.json?orderBy="uid"&equalTo="${user.uid}"`)
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
		let user = AuthFactory.getUser();//getting all stuff I got from my user and calling it user
		console.log("user", user);
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
						urgency:newItem.urgency,
						uid: user.uid
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
		let user = AuthFactory.getUser();
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
                urgency: newItem.urgency,
                uid: user.uid
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
});