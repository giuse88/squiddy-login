Template.mock.events({

  'click button' : function() {
    Meteor.logout();
    Router.go('login');
  }

});