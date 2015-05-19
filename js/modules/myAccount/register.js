define([
	'jquery',
	'knockout',
	'global/validation',
	'viewmodels/shared/deliveryAddresses',
], 
function(
	$,
	ko,
	Validation,
	DeliveryAddressesViewModel
) {

	"use strict";

	var config = {

		
		RegisterStep1Page: {
			NoWithRewardCardControllersSelector: '#registerStep1Details .doubleButtonsContainer a',
			RewardCardFormsSelector: '#registerStep1Details form',
			NoCardFormSelector: '#noRewardCard',
			WithCardFormSelector: '#rewardCardProfile',
			NoCardFormSubmitSelector: ' #noRewardCard #continueButton',
			WithCardFormSubmitSelector: '#rewardCardProfile #findMyDetailsButton',
			RewardCardInputSelector: '#rewardCardProfile #rewardCardNumber' 
		},


		RegisterStep2Page: {
			PersonalDetailsForm: '#registerStep2Details #personalDetails',
			GamerTagsControllersSelector: '#registerStep2Details .doubleButtonsContainer a',
			GamerTagsContainer: '#registerStep2Details #gamerTags',
			PersonalDetailsFormSubmitButton: '#registerStep2Details #continueButton'

		},

		RegisterStep3Page: {
			RegisterHomeAddressFormsContainer: '#registerHomeAddress',
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

		RegisterStep4Page: {
			ManualAdressFormSelector: '#manualAddressDelivery',
			ManualAdressFormSubmitButton: '#manualAddressDelivery #continueButton'
		}
	};

	var init = function() {

		var currentPageName = Game.CurrentPage.PageName;

		switch(currentPageName) {

			case 'registerStep1':
				registerStep1Controller();

				break;


			case 'registerStep2':
				registerStep2Controller();

				break;
			
			case 'registerStep3':
				registerStep3Controller();

				break;

			case 'registerStep4':
				registerStep4Controller();

				break;

			case 'registerConfirmation':
				registerStep4Controller();

				break;

		}

	};

	/* My account page related functions */



	var registerStep1Controller = function  () {

		//No reward card form validation setup
		var noRewardCardFormValidationRules = {
				"email1": [
					{
						"errorMessage": Game.CurrentPage.StoreText.EmailAddressInvalidError,
						"rule": "email"
					}
				]
			}
		var noRewardCardFormValidation = new Validation($(config.RegisterStep1Page.NoCardFormSelector), {
			specificValidationRules: noRewardCardFormValidationRules
		});
		noRewardCardFormValidation.validateOnClick($(config.RegisterStep1Page.NoCardFormSubmitSelector));


		//With reward card form validation setup
		var withRewardCardFormValidationRules = {
				"rewardCardNumber": [
					{
						"errorMessage": Game.CurrentPage.StoreText.RewardCardNumberInvalidError,
						"rule": function(val) {
							return /\d{13}/.test(val);
						}
					}
				]
			}
		var withRewardCardFormValidation = new Validation($(config.RegisterStep1Page.WithCardFormSelector), {
			specificValidationRules: withRewardCardFormValidationRules
		});
		withRewardCardFormValidation.validateOnClick($(config.RegisterStep1Page.WithCardFormSubmitSelector));



		hideShowController($(config.RegisterStep1Page.NoWithRewardCardControllersSelector), $(config.RegisterStep1Page.RewardCardFormsSelector), false, ($(config.RegisterStep1Page.RewardCardInputSelector).val() == '')? 1: 0)
	}


	var registerStep2Controller = function  () {
		//With reward card form validation setup
		
		var personalDetailsFormValidation = new Validation($(config.RegisterStep2Page.PersonalDetailsForm));
		personalDetailsFormValidation.validateOnClick($(config.RegisterStep2Page.PersonalDetailsFormSubmitButton));
	
		hideShowController($(config.RegisterStep2Page.GamerTagsControllersSelector), $(config.RegisterStep2Page.GamerTagsContainer), true)
	}


	var registerStep3Controller = function  () {
		
		ko.applyBindings(new DeliveryAddressesViewModel(config.RegisterStep3Page), $(config.RegisterStep3Page.RegisterHomeAddressFormsContainer)[0])
		$(config.RegisterStep3Page.InternationalAddressLinkSelector).on('click', function(e){
			e.preventDefault();
			$(config.RegisterStep3Page.InternationalAddressFormSelector).submit();
		});
	}

	var registerStep4Controller = function  () {
		var manualAddressFormValidationRules = {
				"postCode": [
					{
						"errorMessage": Game.CurrentPage.StoreText.PostcodeCannotContainSpecialCharactersError,
						"rule": "postcode"
					}
				]
			}
		
		var  manualAddressFormValidation = new Validation($(config.RegisterStep4Page.ManualAdressFormSelector), {
			specificValidationRules: manualAddressFormValidationRules
		});

		manualAddressFormValidation.validateOnClick($(config.RegisterStep4Page.ManualAdressFormSubmitButton));

	}

	var registerConfirmationController = function  () {

	}

		
	var hideShowController =  function ($controllers, $containers, isStep2, defaultIndex) {
		if (typeof defaultIndex != 'undefined') {
			$controllers.filter('.active').removeClass('active');
			$controllers.eq(defaultIndex).addClass('active');

			$containers.filter('.current').removeClass('current');
			$containers.eq(defaultIndex).addClass('current');
		}

		$controllers.on('click',function(e){
			e.preventDefault();
			var currentIndex = $.inArray($controllers.filter('.active')[0], $controllers),
				newIndex = $.inArray(this, $controllers);

			$controllers.eq(currentIndex).removeClass('active');
			$(this).addClass('active');

			$containers.eq(currentIndex).removeClass('current');
			$containers.eq(newIndex).addClass('current');

			if (isStep2) $containers.eq(newIndex).find('input').eq(0).focus();
			
			

		});
	}

	return {
		init: init
	};

});