define(['jquery', 'knockout', 'global/uiBlocker', 'global/validation','async!//maps.googleapis.com/maps/api/js?v=3&amp;key=AIzaSyDUWE8jHJUVm6c6qZmpJV_ja4CjE16ukbU&amp;sensor=false'], function($, ko, uiBlocker, Validation) {

	return function collectionOptionsViewModel(config) {
		var mapOptions = {
			    zoom: 13,
			    disableDefaultUI: true
			},
			collectionDetailsConfig = config.CollectionDetails,
			$collectionPointDetails,
			postcodeFieldValidation = new Validation($('#collectionInputContainer input[name="collectionPostcodeTown"]'),{
				specificValidationRules: {
					"collectionPostcodeTown": [
						{
							"errorMessage": Game.CurrentPage.StoreText.PostcodeCannotContainSpecialCharactersError,
							"rule": function(val) {
								return /^[a-zA-Z0-9 .]*$/.test(val.replace(/ /g,''));
							}
						}
					]
				}
			}),
			sendRequest = function(searchQuery){

				cacheCollectionDetailsContainer();
				$.get(collectionDetailsConfig.RequestUrl + '?postalCode=' + searchQuery , function(res) {
					var res = JSON.parse(res);

					try {
						setTimeout(scrollToCollectionOptions, 100);
						self.CollectionPoints(res.points);
						uiBlocker.unblockUI();
					}
					catch(err){
						console.log("Something wrong with the data from backend");
					}
				});
			},
			cacheCollectionDetailsContainer = function(){
				// if it is not initial request, we need to move collection details container outside the points container
				if (typeof $collectionPointDetails != "undefined") {
					$collectionPointDetails.remove();
					$(collectionDetailsConfig.CollectionPointsContainerSelector).after($collectionPointDetails)
				}

			}
			scrollToCollectionOptions = function(){
				var scrollTo = (typeof self.UserLocation().lat == 'undefined')? $(collectionDetailsConfig.CollectionOptionsSelector).offset().top - 50 : $(collectionDetailsConfig.UserLocationMapSelector).offset().top - 245;
				$("html, body").animate({ scrollTop: scrollTo});
			},

			setupCollectionPointDetails = function(model, $element){
				$collectionPointDetails = $(collectionDetailsConfig.CollectionPointDetailsSelector);
				self.SelectedCollectionPoint(model);
				$collectionPointDetails.hide().detach();
				$element.after($collectionPointDetails);
				$collectionPointDetails.slideToggle();
				setupGoogleMap(self.SelectedCollectionPoint().latitude, self.SelectedCollectionPoint().longitude, $collectionPointDetails.find(collectionDetailsConfig.CollectionPointDetailsMapSelector)[0]);
			},

			setupGoogleMap = function(latitude, longitude, mapElement) {

				mapOptions.center = new google.maps.LatLng(latitude, longitude);
				var map = new google.maps.Map(mapElement, mapOptions),
				marker = new google.maps.Marker({
				    icon : "/wcsstore/SafeStorefrontAssetStore/mobile/images/marker.png",
				    position: mapOptions.center
				});
				marker.setMap(map);
			},

			getLocation = function(position) {
				if (typeof position != "undefined") geoCodeCoordinates(position.coords.latitude, position.coords.longitude);
			},

			geoCodeCoordinates = function(latitude, longitude) {
				$.get(collectionDetailsConfig.GeoCodingURL + collectionDetailsConfig.GeoCodingKey + '&latlng=' + latitude + ',' + longitude, function(res){
					processGeocoding(res);
				});
			},

			processGeocoding = function(res) {
				if (typeof res != "undefined" && typeof res.results != 'undefined' && res.results.length > 0) {
					var closestPostcodeObject = res.results[0];
					if (closestPostcodeObject.address_components[0].types[0] == 'postal_code') {
						self.Location(closestPostcodeObject.address_components[0].long_name);
						
						setupUserLocationMap(closestPostcodeObject);
					
					}
				}
			},
			setupUserLocationMap = function(closestPostcodeObject){

				var $userLocationContainer = $(collectionDetailsConfig.UserLocationContainerSelector);
				self.UserLocation(closestPostcodeObject.geometry.location);
				sendRequest(self.Location());
				setupGoogleMap(self.UserLocation().lat, self.UserLocation().lng, $userLocationContainer.find(collectionDetailsConfig.UserLocationMapSelector)[0])
			};

		self.Location = ko.observable();
		self.CollectionPoints = ko.observableArray();
		self.SelectedCollectionPoint = ko.observable();
		self.CollectionPointsNumber = ko.observable(5);
		self.UserLocation = ko.observable({});
	
		self.CollectionPointsToDisplay = ko.computed(function () {

			return self.CollectionPoints().slice(0, self.CollectionPointsNumber());
		})
		
		self.FindCollectionPoint = function(){
			if (postcodeFieldValidation.validate()) {
				uiBlocker.blockUI();
				sendRequest(self.Location());
			}
			
		}

		self.ShareLocation = function(){
			if (window.navigator) {
				uiBlocker.blockUI();
			    navigator.geolocation.getCurrentPosition(getLocation);
			}
		}

		self.AfterCollectionPointSelected = function(){

		}
		self.SelectCollectionPoint = function(model, event){
			var $container = $(event.currentTarget);
			$container.addClass('selected')
					  .siblings().removeClass('selected')
			$container.find('input').prop('checked',true);

			setupCollectionPointDetails(model, $container);
		}

		self.ShowMoreCollectionPoints = function () {
			self.CollectionPointsNumber(self.CollectionPoints().length);
		}

		self.NotMyLocation = function () {
			cacheCollectionDetailsContainer();
			self.CollectionPoints([]);
			self.UserLocation({});
			self.Location('');
		}


	};


});
