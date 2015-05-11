// app/src/js/main.js

var message = require('./lib/message');
var _ = require('underscore');
var $ = require('jquery');

window.onload = function() {

    var messages = [
        "Hola!!..",
        "esto es..",
	"una prueba"
    ];

    _.each(messages, function(msg) {
        $('body').append(msg);
    });
};

