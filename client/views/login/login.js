Template.login.events({

  'click #submit-btn' : function(event, $target) {
    if ($('#login-form').valid()) {
      //
      var email = $('#email').value;
      var password = $('#email').password;
      //
      Meteor.loginWithPassword(email, password, function (err) {
        //
        if (err) {
          console.log("Error during login: ", err.reason);
          // TODO error rendering
        } else {
          console.log("Login sucessful")
        }
        //
      });
      //
    }
  },

  'click #google-btn' : function () {
    Meteor.loginWithGoogle(['email', 'profile'], function(obj) {
      console.log(obj);
    });
  }

});

Template.login.rendered = function () {

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
