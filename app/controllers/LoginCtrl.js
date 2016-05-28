"use strict";

app.controller("LoginCtrl", function($scope, $location, $http, firebaseURL, AuthFactory){  //libraries, constants, then ones I make
	let ref = new Firebase(firebaseURL);

	// $scope.hasUser = false;



	$scope.account = {
		email: "",
		password: ""
	};//clears out info when you get there
	if($location.path() === "/logout") {
		ref.unauth();  //ref.unauth is killing your auth token
	}

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
    			// $scope.hasUser = true;
    			$location.path("/");
    			$scope.$apply(); //.apply is needed to help angular get you to the right path within firebase 
    		})
    };
});