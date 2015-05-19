define([
	'jquery', 
	'knockout'
	], function($, ko) {

	"use strict";

	var config = {
		MaxCharCount: 300
	}

	var $elements = new function(){
		this.feedbackText = $('#sellerDetailsInfo p, #sellerFeedback .reviews .review p');
	}
	var	feedbackTextHandler = function() {
		$elements.feedbackText.each(function(){
			var $text = $(this);
			if ($text.text().length > config.MaxCharCount) $text.addClass('collapsed');

		});
		$(document).on('click', 'p.collapsed', function(){
			$(this).toggleClass('collapsed');
		});
	}


	
	var	init = function() {
		feedbackTextHandler();
		
		
	};
					
	return {
		init: init
	};

});