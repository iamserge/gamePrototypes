define([
	'jquery', 
	'knockout',
	'viewmodels/pdp/marketplaceTable',
	'viewmodels/global/productRecs',
	'global/simpleSlider',
	'global/resizeSlider', 
	'global/validation',
	'global/uiBlocker' ,
	'global/addToWishlist',
	'global/ajaxSubPage'], 
	function(
		$, 
		ko, 
		pdpMarketplaceTableViewModel,
		pdpProductRecsViewModel,
		ScreenshotSlider,
		ResizeSlider,
		validation, 
		uiBlocker,
		addToWishlist,
		ajaxSubPage
	){

		"use strict";

		var config = {
			marketplaceRequestUrl: '/webapp/wcs/stores/servlet/MarketplaceSupplierItemsInterface',
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
			this.formatsButton = $('#otherFormats');
			this.addToBasketMainButton = $('#addToBasket')
			this.otherOffersButton = $('#otherOffers');
			this.buttons = $('#pdpCTAs .buttons');
			this.addToWishlistButton = this.buttons.find('.addToWishlist');
			this.topInfo = $('#pdpCTAs .topInfo');
			this.sections = {};
			this.sections.marketplaceTable = $('#pdpMarketplace');
			this.sections.productRecs = $('#productRecs');
		}



		var	buyButtonFixedHeaderHandler = function() {
				
			var buttonsOffsetTop = $elements.buttons.offsetTop,
				fixed = false;

			$(window).scroll(function () {
				var scrollTop = $(window).scrollTop();

				if (scrollTop > buttonsOffsetTop && !fixed) {
					$elements.buttons.addClass('fixed');
					$elements.topInfo.addClass('buttonsFixed');
					fixed = true;
				} 

				if (scrollTop < buttonsOffsetTop && fixed) {
					$elements.buttons.removeClass('fixed');
					$elements.topInfo.removeClass('buttonsFixed');
					fixed = false;
				}

			})
		}

		var scrollToMoreOffersHandler = function(){
			$elements.otherOffersButton.on('click',function(e){
				e.preventDefault();
				$elements.sections.marketplaceTable.slideToggleSection();
				$("html, body").animate({ scrollTop: $elements.sections.marketplaceTable.offset().top - 100 });
				
			})
		}

	
		var	init = function(pageOptions) {

			config = $.extend({}, config, pageOptions);
			
			if (typeof pageOptions != "undefined" && pageOptions.flavour != 'package') ko.applyBindings(new pdpMarketplaceTableViewModel(config), $elements.sections.marketplaceTable[0]);
			ko.applyBindings(new pdpProductRecsViewModel(config), $elements.sections.productRecs[0])
			/* Setup sliders */
			var topSlider = new ScreenshotSlider({
				pageFlavour: (typeof pageOptions != "undefined") ? pageOptions.flavour : 'pdp',
				generateIndicators: true

			});

			

			/* setup AddToWishlist action */
			addToWishlist.setupAddToWishlistAction($elements.addToWishlistButton);


			/* setup Ajax sub page action */
			ajaxSubPage.setupAjaxSubPageAction($elements.formatsButton);


			
			/* Small handlers */
			buyButtonFixedHeaderHandler();
			scrollToMoreOffersHandler();


			
		};
						
		return {
			init: init
		};

	});