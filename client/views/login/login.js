Template.login.events({

  'click #submit-btn' : function(event, $target){
    // prevent submit form
    //event.preventDefault();
    // retrieve the input field values
    console.log('test')
    console.log(' Login ' + $('#login-form').valid());
    /*
    // Trim and validate your fields here....
    // If validation passes, supply the appropriate fields to the
    Meteor.loginWithPassword(email, password, function(err){
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
      }
    });
    */
    return false;
  }

});

Template.login.rendered = function () {

  console.log('test');
  $('#login-form').validate({
    debug: true,

    rules: {
      email: {
        required: true,
        validEmail: true
      },
      password: {
        required: true
      }
    },

    invalidHandler: function (event, validator) {
      //display error alert on form submit
    },

    errorPlacement: function (label, element) { // render error placement for each input type
      $('<span class="error"></span>').insertAfter(element).append(label)
      var parent = $(element).parent('.input-with-icon');
      parent.removeClass('success-control').addClass('error-control');
    },

    highlight: function (element) { // hightlight error inputs
      var parent = $(element).parent();
      parent.removeClass('success-control').addClass('error-control');
    },

    unhighlight: function (element) { // revert the change done by hightlight

    },

    success: function (label, element) {
      var parent = $(element).parent('.input-with-icon');
      parent.removeClass('error-control').addClass('success-control');
      //console.log("valid");
    },

    submitHandler: function (form) {
						//form.submit();
    }
  });

}
