define(['jquery','global/uiBlocker', 'global/notificationOverlay'], function($,uiBlocker, notificationOverlay) {

	"use strict";

	var config = {

	};
	var $elements = new function(){
		this.body = $('body');
		this.main = $('main');
		this.wishlistQuantityHeader = $('#saveForLaterIcon .quantity');
	}

	var overlayContent = '<p>' + Game.CurrentPage.StoreText.ItemAddToWishlistText + '</p><a class="button" href="' + Game.Global.Vars.wishListURL + '">' + Game.CurrentPage.StoreText.GoToWishlistButtonTitle +'</a>';

	var showOverlay = function(){
		$elements.overlay.addClass('shown');
		uiBlocker.unblockUI();
		$(window).scroll(hideOverlay);
		setTimeout(hideOverlay, 3000);
	};


	var hideOverlay = function() {
		$elements.overlay.removeTransitionClass('shown', function(){
			$elements.overlay.remove();
			$(window).off("scroll", hideOverlay);
		});
	};

	var updateHeaderCount = function(res) {

		$elements.wishlistQuantityHeader.html(res.wishListCount);
	}

	var sendRequest = function(requestUrl){
		$elements.body.append($elements.overlay);
		uiBlocker.blockUI();

		$.get(requestUrl, function(res){
			uiBlocker.unblockUI();
			notificationOverlay.showOverlay(overlayContent, true);
			updateHeaderCount(res);
		});
	};

	var setupAddToWishlistAction = function($button) {
		$button.on('click', function(e){
			e.preventDefault();
			//console.log($button.attr('href').replace('https:','http:'));
			location.href = $button.attr('href');
			//sendRequest($button.attr('href'));
		});
	}

	return {
		setupAddToWishlistAction: setupAddToWishlistAction
	};

});

