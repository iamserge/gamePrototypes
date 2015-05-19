define(['jquery'], function($) {

	"use strict";

	var config = {
			loaderClass: 'loader'
		},
		timer;

	var init = function(options) {

		config = $.extend(true, config, options);

	};
	var generateUiLoader = function(){

		return $('<span />',{
			class: config.loaderClass,
			html: "Working... please wait"
		});
	}
	var blockUI = function(timeoutCallback, timeoutSeconds) {

		var $uiBlocker = $('<div id="uiBlocker"></div>');
		$uiBlocker.append(generateUiLoader());
		$('body').append($uiBlocker);

		if(typeof timeoutCallback === "function") {

			timeoutSeconds = (typeof timeoutSeconds === 'number') ? timeoutSeconds : config.UIBlocker.DefaultTimeoutSeconds;
			timeoutSeconds = timeoutSeconds * 1000;

			timer = setTimeout(timeoutCallback, timeoutSeconds);

		}

	};

	var unblockUI = function() {

		clearTimeout(timer);
		$('#uiBlocker').remove();

	};

	var insertLoader = function($element) {
		$element.append(generateUiLoader());
	}

	var removeLoader = function($element) {
		if ($element.find('.' + config.loaderClass).length > 0) $element.find('.' + config.loaderClass).remove();
	}
	
	return {
		init: init,
		blockUI: blockUI,
		unblockUI: unblockUI,
		insertLoader: insertLoader,
		removeLoader: removeLoader
	};

});

