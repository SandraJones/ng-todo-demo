"use strict";

app.controller("LoginCtrl", function($scope, $location, $http, firebaseURL, AuthFactory){  //libraries, constants, then ones I make
	let ref = new Firebase(firebaseURL);

	$scope.account = {
		email: "",
		password: ""
	};//clears out info when you get there

	 $scope.register = () => {
        console.log("you clicked register");
        ref.createUser({
            email: $scope.account.email,
            password: $scope.account.password
        }, (error, userData) => {
            if(error){
                console.log(`Error creating user: ${error}`)
            } else{
                console.log(`Created user account with uid: ${userData.uid}`)
                $scope.login();
            }
        });
    };

    $scope.login = () => {
    	console.log("youclickedlogin");
    	AuthFactory
    		.authenticate($scope.account)
    		.then(() => {
    			$location.path("/");
    			$scope.$apply(); //.apply is needed to help angular get you to the right path within firebase 
    		})
    };
});