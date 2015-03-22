console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var bigleagueAPI = (function(options) {
	var shared = {},
		options = options || {}
	
		var missionAnimation = new TimelineMax({paused: true});
		missionAnimation.to(".l-hero-logo, .l-mobile-logo", 0.5, { autoAlpha: 0, zIndex: 1, left: "40%", ease: Back.easeInOut});
		missionAnimation.to(".l-hero-mission, .l-logo-mission", 0.5, { autoAlpha: 1, ease: Back.easeInOut}, 0.25);

		// MOBILE ICON - HAMBURGER
		$(".l-mission-btn").on("click", function(){
			$(this).toggleClass("open");

	  		if ($(this).hasClass("played")) {
	  			missionAnimation.reverse();	
	  		} else {
	  			missionAnimation.play();
	  		}	
	  		$(this).toggleClass("played");
		});
	

	// init
	var init = function() {

	};

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	bigleagueAPI.init();

});
