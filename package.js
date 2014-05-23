// internal: is optional, will not show with meteor list if false.
Package.describe({
  summary: "Login package for ",
  internal: true
});

Package.on_use(function (api, where) {
  var clientFiles = [
    'client/views/login/login.html',
    'client/views/login/login.js',
    'client/views/registration/registration.html',
    'client/views/registration/registration.js',
    'client/views/stylesheet/squiddy-login.css',
    'client/views/main.html',
    'client/views/main.js'
  ];

  api.add_files(clientFiles, 'client');

  //this to export Constructors
  //  if (api.export) {
  //    api.export('Errors');
  //  }

  console.log("SQUIDDY-Login : Loaded asset.")
});

Package.on_test(function (api, where) {
  // same api methods as Package.on_use's callback function parameter
});