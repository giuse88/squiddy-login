Template.login.events({

  'submit #login-form' : function(e, t){
    // prevent submit form
    e.preventDefault();
    // retrieve the input field values
    var userName = t.find('#txtemail').value
      , password = t.find('#txtpassword').value;

    // Trim and validate your fields here....
      //TODO
    //
    console.log(userName);
    console.log(password);
    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(userName, password, function(err){
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        console.log("Error when logging ");
        console.log(err.reason);
        // TODO
        // error rendering
      } else {
        // The user has been logged in.
        console.log("user logged in");
        /*
         This is a problem
         Router.go('/library');
         */
      }
    });
    return false;
  }
});

