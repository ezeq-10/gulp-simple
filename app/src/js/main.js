// app/src/js/main.js
'use strict';

var message = require('./lib/message');
var _ = require('underscore');
var $ = require('jquery');

window.onload = function() {

  var messages = [
    "Hola!!..",
    "esto es..",
    "una prueba de gulp y browserify."
  ];

  _.each(messages, function(msg) {
    $('body').append($('<p>').text(msg));
  });
};

