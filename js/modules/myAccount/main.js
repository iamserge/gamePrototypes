define([
	'jquery',
	'knockout',
	'global/validation',
	'myAccount/register'
], 
function(
	$,
	ko,
	Validation,
	RegisterController
) {

	"use strict";

	var config = {

		LoginPage: {
			LoginDetailsSelector: '#loginDetails',
			LoginButtonSelector: '#signInButton'
		},

		ForgotPasswordPage: {
			ForgotPasswordDetailsSelector: '#forgotPasswordDetails',
			ForgotPasswordButtonSelector: '#sendPassword'
		},

		WishlistPage: {
			ContinueShoppingButtonSelector: '#continueShoppingButton'
		}
	};

	var init = function() {
		var currentPageName = Game.CurrentPage.PageName;

		switch(true) {

			case (currentPageName == 'login'):
				loginPageController();

				break;

			case (currentPageName == 'forgotPassword'):
				forgotPasswordController();

				break;

			case (currentPageName == 'wishlist'):
				wishlistPageController();

				break;


			case (currentPageName.indexOf('register') != -1 ) :
				RegisterController.init();

				break;
		}

	};

	/* My account page related functions */

	var loginPageController = function () {
		var loginPageValidationRules = {
				"logonId": [
					{
						"errorMessage": Game.CurrentPage.StoreText.EmailAddressInvalidError,
						"rule": "email"
					}
				]
			}
		
		var loginPageValidation = new Validation($(config.LoginPage.LoginDetailsSelector), {
			specificValidationRules: loginPageValidationRules
		});

		loginPageValidation.validateOnClick($(config.LoginPage.LoginButtonSelector));
	}


	var forgotPasswordController = function () {
		var forgotPasswordPageValidationRules = {
				"logonId": [
					{
						"errorMessage": Game.CurrentPage.StoreText.EmailAddressInvalidError,
						"rule": "email"
					}
				]
			}
		
		var  forgotPasswordPageValidation = new Validation($(config.ForgotPasswordPage.ForgotPasswordDetailsSelector), {
			specificValidationRules: forgotPasswordPageValidationRules
		});

		forgotPasswordPageValidation.validateOnClick($(config.ForgotPasswordPage.ForgotPasswordButtonSelector));
	}


	var wishlistPageController = function() {
		if ($(config.WishlistPage.ContinueShoppingButtonSelector).length > 0) $(config.WishlistPage.ContinueShoppingButtonSelector).attr('href', document.referrer)
	}
	/* Functions shared between pages */
	
	var hideShowController =  function ($controllers, $containers, isStep2) {
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