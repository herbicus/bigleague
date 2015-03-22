console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var bigleagueAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	var missionAnimation = new TimelineMax({paused: true});
	
	missionAnimation.to(".l-hero-logo, .l-mobile-logo", 0.75, { autoAlpha: 0, zIndex: 1, left: "40%", ease: Back.easeInOut});
	missionAnimation.to(".l-baseball-img", 0.5, { autoAlpha: 0, zIndex: 1, scale: 0.8, ease: Quad.easeInOut}, 0.075);
	missionAnimation.to(".l-bubble-container", 0.5, { autoAlpha: 0, zIndex: 1, right: "3%", ease: Back.easeInOut}, 0.075);
	missionAnimation.to(".l-hero-mission, .l-mobile-mission", 0.75, { autoAlpha: 1, ease: Back.easeInOut}, 0.025);

	
	// Mission Toggle Btn
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
