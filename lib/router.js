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
      yieldTemplate : 'login'
    }
  );

  this.route( 'registration',
    {
      path : '/registration',
      layoutTemplate: 'layout',
      yieldTemplate:'registration'
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
