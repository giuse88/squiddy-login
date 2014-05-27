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
    Accounts.verifyEmail(this.params.token, function () {
      console.log("email verification");
      Router.go('/verified');
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
Router.onBeforeAction(mustBeSignedIn, {except: ['login', 'registration', 'verified', 'verifyEmail']});

