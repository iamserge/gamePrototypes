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
		AddNewAddressPage: {
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

		ko.applyBindings(new DeliveryAddressesViewModel(config.AddNewAddressPage), $(config.AddNewAddressPage.AddNewAddressFormContainer)[0])
		$(config.AddNewAddressPage.InternationalAddressLinkSelector).on('click', function(e){
			e.preventDefault();
			$(config.AddNewAddressPage.InternationalAddressFormSelector).submit();
		});

	};

	

	return {
		init: init
	};

});