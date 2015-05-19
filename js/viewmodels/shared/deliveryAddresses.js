define( ['knockout','global/uiBlocker','global/validation'], function(ko, uiBlocker, Validation) {

	return function DeliveryAddressesViewModel(config) {

		var self = this,
			findAddressFormValidation = new Validation($(config.FindAddressFormSelector),{
				specificValidationRules: {
					"postCode": [
						{
							"errorMessage": Game.CurrentPage.StoreText.PostcodeCannotContainSpecialCharactersError,
							"rule": "postcode"
						}
					]
				}
			}),
			addressDetailsFormValidation = new Validation($(config.AddressDetailsFormSelector), {
				specificValidationRules: {
					"postCode": [
						{
							"errorMessage": Game.CurrentPage.StoreText.PostcodeCannotContainSpecialCharactersError,
							"rule": "postcode"
						}
					]
				}
			});
			
		self.AddressResultsList = ko.observableArray();
		self.HouseNameOrNumber = ko.observable("");
		self.SelectedAddress = ko.observable({});
		self.ExpandHiddenFields = ko.observable(false);
		self.PostCode = ko.observable("");
		self.HomeDeliverySelected = ko.observable(false);
		self.TotalAddressesCount = ko.observable();

		self.ResultsListsMessage = ko.computed(function(){
			if (self.AddressResultsList().length > config.MaxResultsAmount) {
				return Game.CurrentPage.StoreText.MultipleResultsFoundMessage;
			} else if (self.AddressResultsList().length == 1 ) {
				if (self.AddressResultsList()[0].addressLookupWarning.length != 0) {
					return Game.CurrentPage.StoreText.NoResultsFoundMessage;
				} else {
					
					self.AdressSelectedActions(self.AddressResultsList()[0]);
					return "";
				}			
			} else {
				return "";
			}
		});

		self.GetAddresses = function(){
			
			if (findAddressFormValidation.validate()) {
				uiBlocker.blockUI();
				self.ExpandHiddenFields(false);
				$.get(config.FindAddressEndpoint + 'zipCode=' + self.PostCode() + '&premises=' + self.HouseNameOrNumber(), function(res){
					var adresses = JSON.parse(res).addressLookupResult
					self.AddressResultsList(adresses);
					self.TotalAddressesCount(adresses.length);
					uiBlocker.unblockUI();
					setTimeout(function(){
						$("html, body").animate({ scrollTop: $(config.AddressResultsListSelector).offset().top - 35 });
					}, 100)
				});
			}
		}

		self.SelectAddress =  function(model, event) {
			
			var $address = $(event.currentTarget);
			$address.parent().find('.selected').removeClass('selected');
			$address.addClass('selected');
			self.AdressSelectedActions(model);

		}

		self.AdressSelectedActions = function(model){

			self.SelectedAddress(model);
			self.ExpandHiddenFields(true);
			addressDetailsFormValidation.validate({}, false);
			$("html, body").animate({ scrollTop: $(config.AddressDetailsFormSelector).offset().top - 35 });
		
		}

		self.SubmitTheMainForm = function(model, event) {
			if (addressDetailsFormValidation.validate(), true) {
				$(config.AddressDetailsFormSelector).submit();
			}
		}

		self.AfterAddressListRender = function(model, event) {
			console.log('here');
		}
		


	};

});

