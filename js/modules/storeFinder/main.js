define([
	'jquery',
	'knockout',
	'viewmodels/shared/collectionSection'

], 
function(
	$,
	ko,
	CollectionOptionsViewModel

) {

	"use strict";

	var config = {
		
		CollectionSection: {
			RequestUrl: '/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/json/collectionPoints.json',
			CollectionPointsContainerSelector: '#collectionPoints .points',
			CollectionOptionsSelector: '#shopsContainer',
			CollectionPointDetailsSelector: '#collectionPointDetails',
			CollectionPointDetailsMapSelector: '#collectionPointMap',
			UserLocationContainerSelector: '#userLocationContainer',
			UserLocationMapSelector: '#userLocationMap',
			GeoCodingURL: 'https://maps.googleapis.com/maps/api/geocode/json?result_type=postal_code&key=',
			GeoCodingKey: 'AIzaSyDcpqci0Z0_bZqS6Tw8piP1hDrr2C-mIpI'
		}

	};

	var init = function(options) {

		ko.applyBindings(new CollectionOptionsViewModel(config.CollectionSection));
	};



	return {
		init: init
	};

});