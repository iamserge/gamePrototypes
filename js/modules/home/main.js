define(['jquery', 'knockout', 'viewmodels/home', 'global/simpleSlider'], function($, ko, HomeViewModel, SimpleSlide) {

	"use strict";

	var config = {};

	var init = function() {

		config = Game.Config;

		var consoleSlider = new SimpleSlide({
							elements: {
								slidesContainer: "#platformSelector .inner"
							},
							scrollToSlide: false,
							adjustSizes: false

						});
		var homepageSlider = new SimpleSlide({
							elements: {
								slidesContainer: ".homepageSlider .inner"
							},
							generateIndicators: true

						});

	};

	var setupPlatformSelector = function() {

		




		
		
	};

	return {
		init: init
	};

});