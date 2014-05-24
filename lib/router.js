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

});

