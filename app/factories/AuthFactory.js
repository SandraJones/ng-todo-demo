"use strict";

app.factory("AuthFactory", function(firebaseURL) {
  let ref = new Firebase(firebaseURL);
  let currentUserData = null;

  return {  //returning a bunch of methods here
    /*
      Determine if the client is authenticated
     */
    isAuthenticated () {
      let authData = ref.getAuth();//.getAuth is a firebase method
      return (authData) ? true : false;  //if they exist we return true; chk firebase login area on firebase
    },

    getUser () {  //important because we are going to chk against this fn
      return currentUserData;
    },

    /*
      Authenticate the client via Firebase  this is how we chk login
     */
    authenticate (credentials) {  //one input credentials
      return new Promise((resolve, reject) => {
        ref.authWithPassword({  //.authWithPassword is a firebase method
          "email": credentials.email,  //passing the account info in here
          "password": credentials.password
        }, (error, authData) => {   
          if (error) {
            reject(error);
          } else {
            console.log("authWithPassword method completed successfully");
            currentUserData = authData;  //auth data is what is returned, we are overwriting currentUserData variable at top
            resolve(authData);
          }
        });
      });
    },

    /*
      Store each Firebase user's id in the `users` collection
     */
    storeUser (authData) {
      let stringifiedUser = JSON.stringify({ uid: authData.uid });

      return new Promise((resolve, reject) => {
        $http
          .post(`${firebaseURL}/users.json`, stringifiedUser)
          .then(
            res => resolve(res),
            err => reject(err)
          );
      });
    }

  };
});