Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://postmaster%40squiddy.io:2lnd4eu59ot4@smtp.mailgun.org:587';

  Accounts.urls.verifyEmail = function(token) {
    return Meteor.absoluteUrl('verify-email/' + token);
  };

  Meteor.methods({

    'squiddyCreateUser' : function(registrationForm) {
      //
      console.log("squiddyCreateUser");
      //
      // TODO validation
      //
      console.log(registrationForm);
      var newUserId = Accounts.createUser(registrationForm);

      if (newUserId) {
        Accounts.sendVerificationEmail(newUserId);
      } else {
        console.log("Invalid user id");
        new Meteor.Error(500, 'Internal Server error', "Invalid user id");
      }
      console.log("created user" + newUserId);

    }
  })
});