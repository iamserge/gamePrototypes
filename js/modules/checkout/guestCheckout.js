define([
	'jquery',
	'knockout',
	'touchSwipe',
	'viewmodels/checkout/step1',
	'viewmodels/shared/collectionSection',
	'viewmodels/shared/deliveryAddresses',
	'global/validation',
	'global/addToWishlist'
], 
function(
	$,
	ko,
	touchSwipe,
	Step1ViewModel,
	CollectionOptionsViewModel,
	DeliveryAddressesViewModel,
	Validation,
	addToWishlist 
) {

	"use strict";

	var config = {
		Basket: {
			SaveForLaterButtons: '#productsList .product .saveForLater'
		},
		Step1: {
			LoginDetailsFormSelector: '#loginDetailsEntry',
			PasswordFieldSelector: 'input[name="userPassword"]'
		},
		Step2: {
			EnterHomeAddressFormContainer: '#homeDeliverySection',
			FindAddressEndpoint: '/webapp/wcs/stores/servlet/AjaxQASAddressInterface?',
			FindAddressFormSelector: '#postcodeFields',
			InternationalAddressLinkSelector: '#internationalDeliveryLink',
			AddressResultsListSelector: '#addressResultsList',
			ManualAddressLinkSelector: '#manualAddressLink',
			AddressDetailsFormSelector: '#addressDetails',
			InternationalAddressFormSelector: '#internationalAddressForm',
			CreateAccountButtonSelector: '#createAccount',
			MaxResultsAmount: 100
		},
		Step3: {
			ManualAdressFormSelector: '#manualAddressDetails',
			ManualAdressFormSubmitButton: '#manualAddressDetails #continueButton'

		},
		Step5: {
			YourDetailsFormSelector: '#yourDetailsForm',
			YourDetailsFormSubmitButton: '#yourDetailsForm #continueToPayment'
		},
		PaymentDetails: {
			eVoucherFormSelector: '#checkoutVoucher',
			eVoucherButtonSelector: '#checkoutVoucher a',
			GiftCardFormSelector: '#checkoutGiftCard',
			GiftCardFormButtonSelector: '#checkoutGiftCard a',
			PayNowFormSelector: '#payNowForm',
			PayNowFormButtonSelector: '#payNowForm #payNowButton',
			SameBillingAddressCheckboxSelector: '#sameBillingAddress',
			ManualBillingAddressFormSelector: '#manualBillingAddress'
		
		},
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

	var init = function(options) {

		var currentPageName = Game.CurrentPage.PageName;

		switch(currentPageName) {

			case 'basket':
				basketController();
				break;

			case 'checkoutStep1':
				ko.applyBindings(new Step1ViewModel(config));
				break;

			case 'checkoutStep2':
				ko.applyBindings(new DeliveryAddressesViewModel(config.Step2), $(config.Step2.EnterHomeAddressFormContainer)[0])
				initialiseBasketSummarySwipePanel();
				break;

			case 'checkoutStep3':
				checkoutStep3Controller();
				initialiseBasketSummarySwipePanel();
				break;

			case 'checkoutStep4':
				initialiseBasketSummarySwipePanel();
				break;

			case 'checkoutStep5':
				checkoutStep5Controller();
				initialiseBasketSummarySwipePanel();
				break;
				
			case 'checkoutPaymentDetails':
				paymentDetailsController();
				initialiseBasketSummarySwipePanel();
				break;
				
			case 'checkoutCollectionOptions':
				ko.applyBindings(new CollectionOptionsViewModel(config.CollectionSection));
				initialiseBasketSummarySwipePanel();
				break;
		}

	};

	var basketController = function(){
		/* setup AddToWishlist action */
		addToWishlist.setupAddToWishlistAction($(config.Basket.SaveForLaterButtons));
	}
	var checkoutStep3Controller = function(){
		var manualAddressFormValidationRules = {
				"postCode": [
					{
						"errorMessage": Game.CurrentPage.StoreText.PostcodeCannotContainSpecialCharactersError,
						"rule": "postcode"
					}
				]
			}
		
		var  manualAddressFormValidation = new Validation($(config.Step3.ManualAdressFormSelector), {
			specificValidationRules: manualAddressFormValidationRules
		});

		manualAddressFormValidation.validateOnClick($(config.Step3.ManualAdressFormSubmitButton));
	}

	var checkoutStep5Controller = function(){
		var yourDetailsFormValidationRules = {
				
				"emailAddress": [
					{
						"errorMessage": Game.CurrentPage.StoreText.EmailAddressInvalidError,
						"rule": "email"
					}
				],
				"password": [
					{
						"errorMessage": Game.CurrentPage.StoreText.PasswordInvalidError,
						"rule": "password"
					}
				]
			}
		
		var  yourDetailsFormValidation = new Validation($(config.Step5.YourDetailsFormSelector), {
			specificValidationRules: yourDetailsFormValidationRules
		});

		yourDetailsFormValidation.validateOnClick($(config.Step5.YourDetailsFormSubmitButton));
	}

	var paymentDetailsController = function() {
		var eVoucherValidationRules = {
				"voucherCode": [
					{
						"errorMessage": Game.CurrentPage.StoreText.eVoucherNumberNotCorrectError,
						"rule": function(val) {
							return /^\d{13}$/.test(val);
						}
					}
				],
			},
			giftCardValidationRules = {
				"giftCardNumber": [
					{
						"errorMessage": Game.CurrentPage.StoreText.GiftCardNumberNotCorrectError,
						"rule": function(val) {
							return /^\d{21}$/.test(val);
						}
					}
				],
				"giftCardPIN": [ 
					{
						"errorMessage": Game.CurrentPage.StoreText.GiftCardPINNotCorrectError,
						"rule": function(val) {
							return /^\d{4}$/.test(val);
						}
					}
				]
			},
			payNowValidationRules = {
				"cardNumber": [
					{
						"errorMessage": Game.CurrentPage.StoreText.CardNumberNotCorrectError,
						"rule": function(val) {
							return /^\d{16}$/.test(val.replace(/ /g,''));
						}
					}
				],
				"securityNumber": [
					{
						"errorMessage": Game.CurrentPage.StoreText.SecurityNumberNotCorrectError,
						"rule": function(val) {
							return /^\d{3}$/.test(val);
						}
					}
				]
				
			},
			eVoucherValidation = new Validation($(config.PaymentDetails.eVoucherFormSelector),{
				specificValidationRules: eVoucherValidationRules
			}),

			giftCardValidation = new Validation($(config.PaymentDetails.GiftCardFormSelector), {
				specificValidationRules: giftCardValidationRules
			}),

			payNowValidation = new Validation($(config.PaymentDetails.PayNowFormSelector),{
				specificValidationRules: payNowValidationRules
			});

		eVoucherValidation.validateOnClick($(config.PaymentDetails.eVoucherButtonSelector));
		giftCardValidation.validateOnClick($(config.PaymentDetails.GiftCardFormButtonSelector));
		payNowValidation.validateOnClick($(config.PaymentDetails.PayNowFormButtonSelector));
		
		$(config.PaymentDetails.SameBillingAddressCheckboxSelector).on('change', function(e){
			$(config.PaymentDetails.ManualBillingAddressFormSelector).slideToggle();
		});
	}



	var initialiseBasketSummarySwipePanel = function() {

		$("#summarySlider").swipe({

			swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

				console.log(event);

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