// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Sounder.Collections.Channels = (function(_super) {

    __extends(Channels, _super);

    function Channels() {
      return Channels.__super__.constructor.apply(this, arguments);
    }

    Channels.prototype.model = Sounder.Models.Channel;

    Channels.prototype.url = 'http://api.shuffler.fm/v1/genres?api-key=kscothchd0q6c7u2pfw1';

    return Channels;

  })(Backbone.Collection);

}).call(this);
