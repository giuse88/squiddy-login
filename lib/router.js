Router.map( function () {

  this.route('index',
    {
    path : '/',
    template : 'login',
    layoutTemplate: 'layout',
    yieldTemplate : 'login'
    }
  );

  this.route( 'login',
    {
      path : '/login',
      layoutTemplate: 'layout',
      template : 'login',
      data : {
        text : "Dont' have an account?",
        linkText : 'Create Account',
        link : "registration"
      }
    }
  );

  this.route( 'registration',
    {
      path: '/registration',
      layoutTemplate: 'layout',
      template: 'registration',
      data: {
        text: "Have an  account?",
        linkText: "Log In",
        link : "login"
      }
    }
  );

  this.route( 'resetPassword',
    {
      path : '/resetPassword',
      layoutTemplate: 'layout',
      yieldTemplate : 'resetPassword'
    }
  );

  // I should use a controller here, to reuse the code between
  // login and reset in the footer
  this.route( 'forgotPassword',
    {
      path : '/forgotPassword',
      layoutTemplate: 'layout',
      yieldTemplate : 'forgotPassword',
      data: {
        text: "Have an  account?",
        linkText: "Log In",
        link : "login"
      }
    }
  );

  this.route('verifyEmail', {
    controller: 'AccountController',
    path: '/verify-email/:token',
    action: 'verifyEmail'
  });

  this.route('verified', {
    path: '/verified',
    template: 'verified'
  });

  this.route('dashboard', {
    path:'/dashboard',
    template : 'mock'
  });

});


// More info: https://github.com/EventedMind/iron-router/issues/3
AccountController = RouteController.extend({
  verifyEmail: function () {
    // todo check errors
    Accounts.verifyEmail(this.params.token, function (err) {
      console.log("verifying email");
      console.log(err);
   //   if (err)
   //     console.log("Error trying to verify your email", err);
//      else {
//        console.log("email verification");
        Router.go('/verified');
      console.log(err);

//      }
    });
  }
});

var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
    pause();
  }
};

var goToDashboard = function(pause) {
  if (Meteor.user()) {
    Router.go('dashboard');
    pause();
  }
};

Router.onBeforeAction(goToDashboard, {except:['dashboard']});
Router.onBeforeAction(mustBeSignedIn, {except: ['login', 'registration', 'verified', 'verifyEmail', 'forgotPassword']});

