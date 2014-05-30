Template.registrationForm.rendered = function () {

  $('#registration-form').validate({
    debug: true,

    rules: {
      registrationFirstName: {
        required: true
      },
      registrationLastName: {
        required: true
      },
      registrationEmail : {
        required:true,
        validEmail: true
      },
      password: {
        required: true,
        minlength:8
      },
      registrationDOB: {
        required : true
      },
      passwordConfirmation : {
        required: true,
        equalTo : '#registrationPassword'
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
    },

    submitHandler: function (form) {
    }
  });
}

Template.registrationForm.events({

  'click #registationSubmit' : function() {
    console.log();
    if ($('#registration-form').valid()) {
      //
      var email = $('#registrationEmail').val();
      var password = $('#registrationPassword').val();
      //
      var profile = {
        "first_name" : $('#registrationFirstName').val(),
        "family_name": $('#registrationLastName').val(),
        "dob": $('#registrationDOB').val()
      };

      console.log(email);
      console.log(password);
      console.log(profile);
      Meteor.call('squiddyCreateUser', {email:email, password : password, profile : profile }, function(err) {

        if (err) {
          console.log(err);
          LOGIN.renderErrorLogin();
          Session.set('registrationResult', false);
        } else {
          Session.set('registrationResult', true);
        }

      })
    }
  }
});

Template.registration.helpers({

  'isRegistrationSuccessful' : function(){
    return Session.equals('registrationResult', true);
  }

});
