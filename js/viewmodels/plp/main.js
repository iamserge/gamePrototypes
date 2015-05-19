define( ['knockout','global/uiBlocker'], function(ko, uiBlocker) {

	return function PLPViewModel() {

		var requestUrl = '/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/json/plpProducts.json',
			requestCount = 1;
			


		self.newProducts = ko.observableArray([]);

		self.getMoreProducts = function (model, event) {
			
			if (requestCount < Game.CurrentPage.XCOMREG.requestsAllowedBeforeNewPage) {

				event.preventDefault();
				self.sendRequest();

			} else {
				alert('Redirect to a new page');
			}

		}

		self.sendRequest = function(sellerId) {
			uiBlocker.blockUI();
			$.get(requestUrl, function(res){

				
				ko.utils.arrayPushAll(self.newProducts, JSON.parse(res).products);
				requestCount++;
				setTimeout(uiBlocker.unblockUI, 400);

			});
		}

	
	
		


	};

});

