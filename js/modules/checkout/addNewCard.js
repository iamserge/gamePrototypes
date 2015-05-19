define([
	'jquery',
	'knockout',
	'viewmodels/shared/deliveryAddresses'
], 
function(
	$,
	ko,
	DeliveryAddressesViewModel
) {

	"use strict";

	var config = {
		AddNewCardPage: {
			AddNewAddressFormContainer: '#addNewAddress',
			FindAddressEndpoint: '/webapp/wcs/stores/servlet/AjaxQASAddressInterface?',
			FindAddressFormSelector: '#postcodeFields',
			InternationalAddressLinkSelector: '#internationalDeliveryLink',
			AddressResultsListSelector: '#addressResultsList',
			ManualAddressLinkSelector: '#manualAddressLink',
			AddressDetailsFormSelector: '#addressDetails',
			InternationalAddressFormSelector: '#internationalAddressForm',
			CreateAccountButtonSelector: '#createAccount',
			MaxResultsAmount: 100
		}
	};

	var $elements = new function(){

		
	}

	var init = function() {

		ko.applyBindings(new DeliveryAddressesViewModel(config.AddNewCardPage), $(config.AddNewCardPage.AddNewAddressFormContainer)[0])
		$(config.AddNewCardPage.InternationalAddressLinkSelector).on('click', function(e){
			e.preventDefault();
			$(config.AddNewCardPage.InternationalAddressFormSelector).submit();
		});

	};

	

	return {
		init: init
	};

});