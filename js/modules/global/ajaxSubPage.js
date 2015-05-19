define(['jquery','global/uiBlocker'], function($, uiBlocker) {

	"use strict";

	var config = {};
	var $elements = new function(){

		this.body = $('body');
		this.main = $('main');
	}

	var showRightSection = function(res){

		uiBlocker.unblockUI();
		$elements.main.addClass('hidden');
		$elements.rightSection.append(res).addClass('shown');
		$(document).on('click', '#rightSection .backButton', hideRightSection);

	};


	var hideRightSection = function() {
		
		$elements.main.removeClass('hidden');
		$elements.rightSection.removeTransitionClass('shown', function(){$elements.rightSection.remove()});

	};

	var sendRequest = function(requestUrl) { 
		$elements.rightSection = $('<section />', {
			id: 'rightSection',
			html: '<a href="#" class="backButton">Back</a>'
		});
		$elements.body.append($elements.rightSection);
		uiBlocker.blockUI();
		$.get(requestUrl, function(res){
			showRightSection(res);
		});

	};

	var setupAjaxSubPageAction = function($button) {

		$button.on('click', function(e){
			e.preventDefault();
			sendRequest($button.attr('href'));
		});

	}

	return {
		setupAjaxSubPageAction: setupAjaxSubPageAction
	};

});

