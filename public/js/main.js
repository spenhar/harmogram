// Generated by CoffeeScript 1.3.3
(function() {

  window.Sounder = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      this.Routers.main = new Sounder.Routers.Main();
      return Backbone.history.start();
    }
  };

  window.imChrome = function() {
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  };

  window.gimmeIntro = function() {
    var magicNumber, placeholders;
    placeholders = ['Uh Oh!', 'Errr...', 'Oops!', 'Damn...', 'Dammit!', 'Bollocks', 'Hmmm...'];
    magicNumber = Math.round(Math.random() * placeholders.length) - 1;
    return placeholders[magicNumber];
  };

  $(function() {
    if (imChrome()) {
      return Sounder.init();
    } else {
      $('html').addClass('not_chrome');
      return $('#custom-intro').text(gimmeIntro());
    }
  });

}).call(this);
