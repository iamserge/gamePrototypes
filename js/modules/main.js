"use strict";
var baseJSUrl = '/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js'
require.config({
    baseUrl: baseJSUrl + '/modules',
    paths: {

    	// ************************************** \\
    	// *              Libraries             * \\
    	// ************************************** \\
        jquery: [
        	'//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
        	baseJSUrl + '/js/lib/jquery'
    	],
    	knockout: [
    		'//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min',
    		baseJSUrl + '/lib/knockout'
    	],
        touchSwipe: [
            baseJSUrl + '/lib/jQuery.touchSwipe.min'
        ],
        bxSlider: [
            '//cdn.jsdelivr.net/bxslider/4.1.1/jquery.bxslider.min.js',
            baseJSUrl + '/lib/jquery.bxslider.min.js'
        ],
        imagesLoaded: [
            baseJSUrl + '/lib/imagesloaded.pkgd.min'
        ],
        async: [
            baseJSUrl + '/lib/async'
        ],
        viewmodels: baseJSUrl + '/viewmodels',

        pdpMarketplaceViewModels: baseJSUrl + '/viewmodels/pdp/marketplace',
    }
});

require(['jquery', 'global/customBindings'], function($) {

	$(function() {

		require([
            'knockout',
            'global/header',
            'global/uiBlocker', 
            'global/jqueryExtras',
            'viewmodels/global/predictiveSearch'
            ], 
            function(
                ko,
                header, 
                uiBlocker, 
                jqueryExtras, 
                predictiveSearchViewModel
            ){

    			header.init();
                uiBlocker.init(Game.CurrentPage);
                jqueryExtras.init();

                // apply global KO bindings
                ko.applyBindings(new predictiveSearchViewModel(), $('header')[0]);

    			switch(Game.CurrentPage.PageName) {

    				case 'home':
    					require(['home/main'], function(home) {
    						home.init();
    					});
                        $('#searchPanel').toggleClass('opened');
    					break;

                    case 'plp':
                        
                        require(['plp/main'], function(plp) {
                            plp.init();
                        });
                        break; 

                    case 'pdp': 
                        require(['pdp/main'],function(pdp) {
                            pdp.init({
                                flavour: 'product'
                            });
                        });
                        break;

                    case 'pdpPackage':
                        require(['pdp/main'],function(pdp) {
                            pdp.init({
                                flavour: 'package'
                            });
                        });
                        break;

                    case 'basket':
                    case 'checkoutStep1':
                    case 'checkoutStep2':
                    case 'checkoutStep3':
                    case 'checkoutStep4':
                    case 'checkoutStep5':
                    case 'checkoutPaymentDetails':
                    case 'checkoutCollectionOptions':
                        require(['checkout/guestCheckout'], function(checkout) {
                            checkout.init();
                        });
                        break;
                    case 'addNewAddress':
                        require(['checkout/addNewAddress'], function(addNewAddress) {
                            addNewAddress.init();
                        });
                        break;
                    case 'expressCheckout':
                        require(['checkout/expressCheckout'], function(checkout) {
                            checkout.init();
                        });
                        break;
                    case 'addedToBasket':
                        require(['addedToBasket/main'], function(addedToBasket) {
                            addedToBasket.init();
                        });
                        break;
                    case 'wishlist':
                    case 'myAccount':
                    case 'login':
                    case 'forgotPassword':
                    case 'registerStep1':
                    case 'registerStep2':
                    case 'registerStep3':
                    case 'registerStep4':
                    case 'registerConfirmation':
                        require(['myAccount/main'], function(myAccount) {
                            myAccount.init();
                        });
                        break; 

                    case 'storeFinder': 
                        require(['storeFinder/main'], function(storeFinder) {
                            storeFinder.init();
                        });
                        break; 

                    case 'sellerDetails': 
                        require(['sellerDetails/main'], function(sellerDetails) {
                            sellerDetails.init();
                        });
                        break;
    			}

		});

	});

});