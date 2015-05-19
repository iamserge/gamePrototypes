define(['knockout','global/uiBlocker', 'global/validation'], function(ko, uiBlocker, Validation) {

	return function CheckoutStep1ViewModel(config) {
		
		var self = this;
		var loginDetailsValidationRules =   {
			"emailAddress": [
				{
					"errorMessage": Game.CurrentPage.StoreText.EmailAddressInvalidError,
					"rule": "email"
				}
			]
			
		};

		var loginDetailsEntryValidation = new Validation( $(config.Step1.LoginDetailsFormSelector) , {
			specificValidationRules: loginDetailsValidationRules
		});



		self.EmailAddress = ko.observable('');
		self.EmailAddressNotRecognized = ko.observable('');
		self.PasswordFieldOpen = ko.observable(false);
		self.UserPassword = ko.observable('');
		self.UserPasswordError = ko.observable('');

		self.HandleNewToGameClick = function() {

			if(loginDetailsEntryValidation.validate()) {
				window.location = '/webapp/wcs/stores/servlet/CheckoutStep2PrototypeView?storeId=10151&langId=44';
			}

		};


		self.HandleExistingCustomerClick = function(model, event) {

			if(loginDetailsEntryValidation.validate()) {
				uiBlocker.blockUI();
				$.get('/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/json/addressIsValid.json',{email: self.EmailAddress()}, function(res){
					uiBlocker.unblockUI();
					if (JSON.parse(res).isValid != "true") {
						loginDetailsEntryValidation.showErrorMessage('emailAddress', config.StoreText.EmailAddressNotRecognisedError);
					} else {
						self.EmailRecognized();
					}
				});
			}
		};

		self.EmailRecognized = function(){
			loginDetailsEntryValidation.hideErrorMessage('emailAddress');
			self.PasswordFieldOpen(true);
			$(config.Step1.PasswordFieldSelector).focus();

		}

		self.HandleLoginClick = function() {

			if(!self.PerformLogin()) {
				self.UserPasswordError(config.StoreText.PasswordIncorrectError);
			} else {
				alert('Successful login!  Go to express checkout');
			}

		};



		self.PerformLogin = function() {

			return self.EmailAddress() == 'test@game.com' && self.UserPassword() == 'test';

		};

	

		self.ResetForm = function() {

			self.EmailAddressError('');
			self.UserPasswordError('');

		}

	};


});