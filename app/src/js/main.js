var message = require('./lib/message');
var _ = require('underscore');
var $ = require('jquery');

window.onload = function() {
  'use strict';

  var messages = [
    "Hola!!..",
    "esto es..",
    "una prueba de gulp y browserify."
  ];

  _.each(messages, function(msg) {
    $('body').append($('<p>').text(msg));
  });
};

