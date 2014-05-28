LOGIN=(function(){

  /* This must be a bit more general* /
    need refactor.
   */

  function renderErrorLogin() {
    $('#error-login-message').removeClass("hidden");
  }

  function removeErrorLogin() {
    $('#error-login-message').removeClass("hidden");
  }

  function loginHandler(err){
    if (err) {
      renderErrorLogin();
    }else {
      Router.go('dashboard');
    }
  }

  return {
    renderErrorLogin : renderErrorLogin,
    removeErrorLogin : removeErrorLogin,
    loginHandler : loginHandler
  }

})();