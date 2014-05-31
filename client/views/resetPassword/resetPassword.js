
Template.resetPassword.events({
  'submit #reset-password' : function(event, $target) {
    event.preventDefault();
    //if ( valid());
    // get token
    var token =Router.current().params.token;
    console.log(Template);
    console.log("The token is : " + token);
    //
    var password = $('#password').val();
    var confirmation = $('#confirmatationPassword').val();
    console.log(password);
    console.log(confirmation);

    Accounts.resetPassword(token, password, function (err){
      if(err)
        console.log(err);
      else
        console.log("success");
    });
  }
});