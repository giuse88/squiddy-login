Template.footer.helpers({

 'loginPaths' : function() {

   if(Router.current().path === "/registration")
      return  Router.path('login');

   if(Router.current().path === "/login")
     return  Router.path('registration');

    // default
    return Router.path('login');
  },

 'isRouteActive' : function (route) {
    var result = Router.current().path ===  ("/"+route) ;
    console.log("IsRouteActive : " + result);
    return result;
 }

});