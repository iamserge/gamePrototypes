define( ['knockout'], function(ko) {

	return function PDPViewModel() {
	
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

		self.Filtering = new function(){

			var Filtering = this;
			Filtering.filters = [
				{title: 'All', count: self.marketplaceItemsTotalCount, filter: null},
				{title: 'New', count: self.marketplaceMintItemsCount, filter: function(mpItem) {return mpItem.provenance == 'Mint';}},
				{title: 'Preowned', count: self.marketplacePreOwnedItemsCount, filter: function(mpItem) {return mpItem.provenance == 'PreOwned';}}
			];

			Filtering.activeFilter = ko.observable(Filtering.filters[0].filter);

			Filtering.setActiveFilter = function(model,event){

	 			event.preventDefault();
		       	Filtering.activeFilter(model.filter);

		    };

		    Filtering.filteredItems = ko.computed(function(){

		        var result;
		        if(Filtering.activeFilter()) result = ko.utils.arrayFilter(self.marketplaceItems(), Filtering.activeFilter());
		        else result = self.marketplaceItems();
		        return result;

		    });
		};
		
		
		// ************************************** \\
    	// *          Helpers function          * \\
    	// ************************************** \\
    	
		self.Helpers = new function(){

			var Helpers = this;

			Helpers.processDeliveryPrice = function(price){
				return (parseFloat(price) != 0) ? parseFloat(price).toFixed(2) : Game.CurrentPage.StoreText.FreeDeliveryText ;
			}

			Helpers.processTotalPrice = function(price) {
				return parseFloat(price).toFixed(2);
			}
		}
		



		self.getMarketpaceData = function() {

			$.get('/webapp/wcs/stores/servlet/MarketplaceSupplierItemsInterface?productId=177521&gameMintPrice=10.00&gameMintInStock=true&gamePreOwnedPrice=10.00&gamePreOwnedInStock=true&topSellers=true&vendorShopEnabled=false', function(res){
				self.marketpaceData = JSON.parse(res);
				self.marketplaceMintItemsCount(self.marketpaceData.mintItems.length);
				self.marketplacePreOwnedItemsCount(self.marketpaceData.preOwnedItems.length);
				self.marketplaceItems(self.marketpaceData.mintItems.concat(self.marketpaceData.preOwnedItems));
			});

		}








		self.getMarketpaceData();
		

	};

});

