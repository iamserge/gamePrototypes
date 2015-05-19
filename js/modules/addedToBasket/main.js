define([
	'jquery', 
	'knockout',
	'global/resizeSlider',
	'global/notificationOverlay',
	'viewmodels/global/productRecs'
	], function($, ko, ResizeSlider, notificationOverlay, pdpProductRecsViewModel) {

	"use strict";

	var config = {
		productRecsOptions: {
			zoneID: "Prod_1",
			productID: Game.CurrentPage.PageInfo.ProductMediaID,
			categoryID: Game.CurrentPage.PageInfo.CategoryID,
			searchTerm: "",
			maxTitleHeight: 40,
			productRecsContainerSelector: '#productRecs',
			afterAdded: function(){
				var recsSlider = new ResizeSlider({
						elements: {
							slidesContainer: "#productRecs .productRecs"
						}
					});
			}
		}
	};

	var $elements = new function(){
		this.buttons =  $('#addedToBasketActions .buttons');
		this.subtotal = $('#addedToBasketActions .orderSubtotal');
		this.extras = $('#addedToBasketExtras');
		this.warranties = this.extras.find('.warranties');
		this.warrantyButtons = this.warranties.find('.addToBasket');
		this.productRecs = $('#productRecs');
		this.headerBasketQuantity = $('#basketIcon .quantity');
	}
	var	actionFixedHeaderHandler = function() {
		var buttonsOffsetTop = $elements.buttons[0].offsetTop,
			fixed = false;

		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop();

			if (scrollTop > buttonsOffsetTop && !fixed) {
				$elements.buttons.addClass('fixed');
				$elements.subtotal.addClass('buttonsFixed');
				fixed = true;
			} 

			if (scrollTop < buttonsOffsetTop && fixed) {
				$elements.buttons.removeClass('fixed');
				$elements.subtotal.removeClass('buttonsFixed');
				fixed = false;
			}

		})
	}


	var addWarrantyToBasketHandler = function () {
		var overlayContent = '<p>' + Game.CurrentPage.StoreText.WarrantyAddedText + '</p>',
			addWarratyToBasket = function (url) {
			$.get(url, function (res) {
				
				if (typeof res.orderQuantity != 'undefined') $elements.headerBasketQuantity.text(res.orderQuantity);
				notificationOverlay.showOverlay(overlayContent, true);
			});
		}
		$elements.warrantyButtons.on('click', function (e) {
			e.preventDefault();
			addWarratyToBasket($(this).parent().find('select').val());
			
		})
	}
	
	var	init = function() {

	
		//actionFixedHeaderHandler();
		addWarrantyToBasketHandler();
		var addOnsSlider = new ResizeSlider({
			elements: {
				slidesContainer: "#addedToBasketExtras #addOns"
			},
			differentHeights: true
		});


		ko.applyBindings(new pdpProductRecsViewModel(config), $elements.productRecs[0])

	};
					
	return {
		init: init
	};

});