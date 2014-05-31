Template.forgotPassword.events({

  'submit #forgot-password' : function(event, $target) {
//   if ($('#forgot-password').valid()) {
      event.preventDefault();
      var email = $('#forgot-password .email').val();

      // render a loading icon
      Accounts.forgotPassword({email: email}, function(err) {
        if(err)
          console.log(err);
        else {
          console.log("Success");
        }
      });
      console.log(email);
  }

});
