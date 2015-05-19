define( [
	'knockout', 
	'viewmodels/pdp/marketplaceTableFiltering', 
	'viewmodels/pdp/marketplaceTableSellerDetails'],function(ko, tableFiltering, sellerDetails) {
 
	return function PDPMarketplaceTableViewModel(config) {
	
		var self = this;

		self.marketpaceData = ko.observableArray();
		self.marketplaceItems = ko.observableArray();

		self.marketplaceMintItemsCount = ko.observable();
		self.marketplacePreOwnedItemsCount = ko.observable();
		self.marketplaceItemsTotalCount = ko.computed(function(){
			return self.marketplaceMintItemsCount() + self.marketplacePreOwnedItemsCount();
		});



		// ************************************** \\
    	// *    Filtering of the items table    * \\
    	// ************************************** \\
		self.Filtering = new tableFiltering(self);

		// ************************************** \\
    	// *             Seller details         * \\
    	// ************************************** \\
		self.sellerDetails = new sellerDetails(self);
		
		// ************************************** \\
    	// *          Helpers function          * \\
    	// ************************************** \\
    	
		self.processDeliveryPrice = function(price){
			return (parseFloat(price) != 0) ? Game.CurrentPage.StoreText.DeliveryFromText + parseFloat(price).toFixed(2) : Game.CurrentPage.StoreText.FreeDeliveryText ;
		}

		self.processTotalPrice = function(price) {
			return parseFloat(price).toFixed(2);
		}

		self.processRatingClass = function(rating) {
			return "rating" + rating;
		}
		
		



		self.getMarketpaceData = function() {
			if (typeof Game.CurrentPage.PageInfo.ProductID != "undefined") {
				var options = Game.CurrentPage.MarketplaceInfo;
				options.productId = Game.CurrentPage.PageInfo.ProductID;

				$.get(config.marketplaceRequestUrl, options,  function(res){
					try {
						self.marketpaceData = JSON.parse(res);
						self.marketplaceMintItemsCount(self.marketpaceData.mintItems.length);
						self.marketplacePreOwnedItemsCount(self.marketpaceData.preOwnedItems.length);
						self.marketplaceItems(self.marketpaceData.mintItems.concat(self.marketpaceData.preOwnedItems));
					} catch(err) {
						console.log('Something wrong with JSON response for Marketplace endpoint');
					}
				});
			}

		}








		self.getMarketpaceData();
		

	};

});

