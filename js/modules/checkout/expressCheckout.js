define([
	'jquery',
	'knockout',
	'touchSwipe',
	'global/validation',
	'global/addToWishlist'
], 
function(
	$,
	ko,
	touchSwipe,
	Validation,
	addToWishlist 
) {

	"use strict";

	var config = {
		CollectionSection: {
			RequestUrl: '/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/json/collectionPoints.json',
			CollectionPointsContainerSelector: '#collectionPoints .points',
			CollectionOptionsSelector: '#collectionOptions',
			CollectionPointDetailsSelector: '#collectionPointDetails',
			CollectionPointDetailsMapSelector: '#collectionPointMap',
			UserLocationContainerSelector: '#userLocationContainer',
			UserLocationMapSelector: '#userLocationMap',
			GeoCodingURL: 'https://maps.googleapis.com/maps/api/geocode/json?result_type=postal_code&key=',
			GeoCodingKey: 'AIzaSyDcpqci0Z0_bZqS6Tw8piP1hDrr2C-mIpI'
		}
	};

	var $elements = new function(){
		//We define elements differently from guest checkout ( just set up selectors in config ) because 
		//because there are more steps in guest checkout and mostly selectors get passed to external modules 
		// rather than being used inside main module how they will be used here.

		this.homeDeliveryButton = $('#homeDeliveryButton');
		this.hiddenSections = $('.sectionsContainer');
		
	}

	var init = function() {

		var currentPageFlavour = Game.CurrentPage.PageFlavour;

		switch(currentPageFlavour) {

			case 'homeDelivery' :
				homeDeliverySectionController();

			case 'collection' :
				collectionSectionController();
		}
		selectCardController();
 		redeemRewardPointsController();
 		billingAddressController();
		initialiseBasketSummarySwipePanel();
	};

	//Controllers for different types of delivery sections
	var homeDeliverySectionController = function() {
		var selectAddress = function($address){
	 			//Function for all manipulations when address selected
	 			var selectAddressText = $elements.selectedAddress.html();
	 			$elements.selectedAddress.html($address.html())
	 			$address.html(selectAddressText).addClass('selected');
	 			$elements.moreAddressesContainer.slideToggle(function(){
	 				$address.removeClass('selected');
	 			});
	 			$elements.showMoreAddressesButton.show();
	 			// All the logic to percive address to the backend will go here.
	 		},

	 		showMoreAddresses = function(){
	 			$elements.moreAddressesContainer.slideToggle();
				$elements.showMoreAddressesButton.hide();
				$("html, body").animate({ scrollTop: $elements.moreAddressesContainer.offset().top - 100});
	 		},

	 		setupElements = function(){
	 			$.extend($elements, new function(){
		 			
					this.deliveryAddresses = $('#deliveryAddresses');
					this.showMoreAddressesButton = $('#showMoreAddressesButton');
					this.moreAddressesContainer = this.deliveryAddresses.find('.moreAddresses');
					this.selectedAddress = this.deliveryAddresses.find('.selected.address');
					this.addresses = this.moreAddressesContainer.find('.address');
		 		});
	 		},

	 		init = function(){
	 			
	 			setupElements();
	 			$elements.showMoreAddressesButton.on('click', function(e){
					e.preventDefault();
					if ($elements.addresses.length > 0) {
						showMoreAddresses();
					} 
				});
		 		
		 		$elements.addresses.on('click', function(){
		 			selectAddress($(this));
		 		});
	 		}
	 	init();
	}
	var collectionSectionController = function(){
		var setupElements = function(){
	 			$.extend($elements, new function(){
		 			this.collectionDeliverySectionContainer = $('#deliverySectionsContainer');
				});
	 		},
	 		init = function(){
	 			setupElements();
				require(['viewmodels/shared/collectionSection'], function(CollectionOptionsViewModel) {
					ko.applyBindings(new CollectionOptionsViewModel(config.CollectionSection), $elements.collectionDeliverySectionContainer[0]);
				});
			}
		init();
	}

	//Controllers for different payments sections
	var selectCardController = function(){
		var selectCard = function($card){
	 			//Function for all manipulations when address selected
	 			$card.addClass('selected');
	 			$elements.moreCardsContainer.slideToggle(function(){
	 				$card.removeClass('selected');
	 			});
	 			$elements.showMoreCardsButton.show();


	 			// All the logic to percive address to the backend will go here.
	 		},

	 		showMoreCards = function(){
	 			$elements.moreCardsContainer.slideToggle();
				$elements.showMoreCardsButton.hide();
				$("html, body").animate({ scrollTop: $elements.moreCardsContainer.offset().top - 100});
	 		},

	 		setupElements = function(){
	 			$.extend($elements, new function(){
		 			this.paymentCardsContainer = $('#paymentCards');
					this.showMoreCardsButton = $('#showMoreCardsButton');
					this.moreCardsContainer = this.paymentCardsContainer.find('.moreCards');
					this.selectedCard = this.paymentCardsContainer.find('.selected.card');
					this.paymentCards = this.moreCardsContainer.find('.card');
				});
	 		},

	 		init = function(){

	 			
	 			setupElements();
	 			$elements.showMoreCardsButton.on('click', function(e){
					e.preventDefault();
					if ($elements.paymentCards.length > 0) {
						showMoreCards();
					} 
				});
		 		
		 		$elements.paymentCards.on('click', function(){
		 			selectCard($(this));
		 		});
	 		}
	 	init();
	}
	var redeemRewardPointsController = function(){
		var setupElements = function(){
	 			$.extend($elements, new function(){
		 			this.rewardPointsContainer = $('#rewardPoints');
					this.rewardPointsButtons = this.rewardPointsContainer.find('.buttons a');
					this.rewardPointsAmountContainer = this.rewardPointsContainer.find('.rewardPointsAmount');
					this.rewardPointsInput = this.rewardPointsAmountContainer.find('input');
					this.redeemRewardPointsButton = this.rewardPointsAmountContainer.find('a');
				});
	 		},
	 		
	 		init = function(){
	 			setupElements();
	 			$elements.rewardPointsButtons.on('click', function(e){
					e.preventDefault();
					$elements.rewardPointsAmountContainer.slideToggle();
					$elements.rewardPointsButtons.filter('.selected').removeClass('selected');
					$(this).addClass('selected');
					
				});
	 		}


	 	init();
	}

	var billingAddressController = function(){
		var setupElements = function(){
	 			$.extend($elements, new function(){
		 			this.billingAddressCheckbox = $('#sameBillingAddress');
		 			this.manualBillingAddressContainer = $('#manualBillingAddress');
				});
	 		},
	 		
	 		init = function(){
	 			setupElements();
	 			$elements.billingAddressCheckbox.on('change', function(e){
					$elements.manualBillingAddressContainer.slideToggle();
				});
	 		}


	 	init();
	}


	var initialiseBasketSummarySwipePanel = function() {

		$("#summarySlider").swipe({

			swipe: function(event, direction, distance, duration, fingerCount, fingerData) {


				var $this = $(this);
				var $span1 = $this.find('span:first');
				var $span2 = $this.find('span:last');

				if(direction === 'down') {

					if($this.hasClass('open')) return;

					$('#summaryItems').slideDown('slow');
					$this.addClass('open');
					$span1.text('Slide up to');
					$span2.text('hide your basket');

				} else if(direction === 'up') {

					if(!$this.hasClass('open')) return;

					$('#summaryItems').slideUp('slow');
					$this.removeClass('open');
					$span1.text('Slide down to');
					$span2.text('view your basket');

				}

			},
			threshold: 10

		});

		// temporary - remove for production
		$("#summarySlider").on('click', function() {

			if($(this).hasClass('open')) {
				$('#summaryItems').slideUp();
				$(this).removeClass('open');
				$(this).find('span:first').text('Slide down to');
				$(this).find('span:last').text('view your basket');
			} else {
				$('#summaryItems').slideDown();
				$(this).addClass('open');
				$(this).find('span:first').text('Slide up to');
				$(this).find('span:last').text('hide your basket');
			}

		});
	};

	return {
		init: init
	};

});