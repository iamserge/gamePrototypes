define(['jquery'], function($) {

	"use strict";

	var config = {
			notificationOverlayId: 'notificationOverlay',
			shownClass: 'shown',
			defaultTimeout: 3000
			
		},
		timer,
		$overlay;

	var init = function(options) {

		config = $.extend(true, config, options);

	};
	var generateOverlay = function(){

		var $overlay = $('<div />', {
				id: config.notificationOverlayId
			});
		$overlay.appendTo('body');

		return $overlay;
	}


	var showOverlay = function(content, closeAfterTime){
		$overlay = ($('#' + config.notificationOverlayId).length > 0) ? $('#' + config.notificationOverlayId) : generateOverlay();
		$overlay.html(content);
		setTimeout(function () {
			$overlay.addClass(config.shownClass);
		}, 10);

		$(window).scroll(hideOverlay);
		if (closeAfterTime) setTimeout(hideOverlay, config.defaultTimeout);
	};


	var hideOverlay = function() {
		$overlay.removeTransitionClass('shown', function(){
			$overlay.remove();
			$(window).off("scroll", hideOverlay);
		});
	};

	return {
		init: init,
		showOverlay: showOverlay,
		hideOverlay: hideOverlay
	};

});

