require.config({

	paths: {
		"jquery": "libs/jquery-1.8.1",
		"underscore": "libs/underscore",
		"backbone": "libs/backbone",
		"handlebars": "libs/handlebars-1.0.rc.1"
	},

	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'handlebars': {
			exports: 'Handlebars'
		}
	},

	waitSeconds: 12

  });

require([ "jquery","main" ], function( $, Main ) {

	$(function() {
		Main.start();
	});

});

