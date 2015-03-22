console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var bigleagueAPI = (function(options) {
	var shared = {},
		options = options || {}
	

	

	// init
	var init = function() {

	};

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	bigleagueAPI.init();

});
