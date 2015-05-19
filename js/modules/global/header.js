define(['jquery', 'global/panelSlider'], function($, panelSlider) {

	"use strict";

	var config = {};

	var init = function() {
		config = Game.Config;
		
		setupMainMenuSidePanel();
		getInitialDynamicData();
	};

	var setupMainMenuSidePanel = function() {

		var MenuPanel = new panelSlider({
				panelName: 'menu',
				direction: 'left',
				active: true
			}),

			expandSubmenu = function($el){
				if($el.next().is(':visible')) {
					$el.next().slideUp();
					return;
				}

				var $panel = $el.closest('.sidr-inner');
				$panel.find('ul li ul').slideUp();
				$el.next().slideDown();
			};

		$('.hasSubmenu').on('click', function(e) {
			e.preventDefault();
			expandSubmenu($(this));
		});
	};

	

	var getInitialDynamicData = function(){

		/* Just for prototype */
		Game.Global = {}
		Game.Global.Vars = {}
		Game.Global.Vars.storeId = '10151';
		Game.Global.Vars.langId = '44';
		Game.Global.Vars.catalogId = '10201';
		Game.Global.StoreText = {
			isRequiredErrorBase: " is required"
		}

		var requestUrl = '/webapp/wcs/stores/servlet/mAjaxInitialView?mobileFlag=true&storeId=' + Game.Global.Vars.storeId + '&catalogId=' + Game.Global.Vars.catalogId + '&langId=' + Game.Global.Vars.langId,
			$elements = new function(){
				this.saveForLaterIcon = $('header #saveForLaterIcon');
				this.basketIcon = $('header #basketIcon');
				this.footerLoginButton = $('#footerButtons .login');
				this.rewardPointsButton = $('#footerButtons .rewardPoints');
			},


			updateElements = function(obj){

				if (JSON.parse(obj.isLoggedIn)) {
					$elements.footerLoginButton.replaceWith($('<span />', {
						class: 'logOutContainer',
						html: 'Hello ' + obj.userName + ' | <a href="'+ obj.LogoffURL + '">Logout</a>' 
					}));
					if (obj.rewardPointsPriceValue != '') $elements.rewardPointsButton.find('.amount').show().text(obj.rewardPointsPriceValue);
				} else {
					$elements.rewardPointsButton.find('.amount').remove();
				}
				$elements.saveForLaterIcon.attr('href', obj.wishListURL).find('.quantity').text(obj.wishListCount);
				$elements.basketIcon.attr('href', obj.viewBasketURL).find('.quantity').text(obj.orderQuantity);
				$elements.rewardPointsButton.attr('href', obj.rewardCardURL)
				$elements.rewardPointsButton.attr('href', obj.rewardCardURL);
				updateGlobalVars(obj);
			
			},

			updateGlobalVars = function(obj) {
				Game.Global.Vars.isLoggedIn = obj.isLoggedIn;
				Game.Global.Vars.wishListURL = obj.wishListURL;
			}
		
		$.get(requestUrl, function(res){
			if (typeof res == "object") updateElements(res);
		});							
	}
	


	return {
		init: init
	};

});