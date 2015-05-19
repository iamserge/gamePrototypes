define( ['knockout'], function(ko) {

	return function PDPMarketplaceTableFilteringModel(master) {
	
		var Filtering = this;
		Filtering.filters = [
			{title: 'All', count: master.marketplaceItemsTotalCount, filter: null},
			{title: 'New', count: master.marketplaceMintItemsCount, filter: function(mpItem) {return mpItem.provenance == 'Mint';}},
			{title: 'Preowned', count: master.marketplacePreOwnedItemsCount, filter: function(mpItem) {return mpItem.provenance == 'PreOwned';}}
		];

		Filtering.activeFilter = ko.observable(Filtering.filters[0].filter);
		Filtering.paginationPointer = ko.observable(1);
		Filtering.totalFilteredAmount = ko.observable();
		Filtering.topAmountPaginated = ko.computed(function(){
			return (Filtering.paginationPointer() + 2 > Filtering.totalFilteredAmount())? Filtering.totalFilteredAmount(): Filtering.paginationPointer() + 2;
		})
		Filtering.setActiveFilter = function(model,event){
			
			$(event.currentTarget).siblings('.selected').removeClass('selected')
			$(event.currentTarget).addClass('selected');
						   
 			event.preventDefault();
 			Filtering.paginationPointer(1);
	       	Filtering.activeFilter(model.filter);

	    };

	    Filtering.filteredItems = ko.computed(function(){

	        var result;
	        if (Filtering.activeFilter()) result = ko.utils.arrayFilter(master.marketplaceItems(), Filtering.activeFilter());
			else result = master.marketplaceItems();
			Filtering.totalFilteredAmount(result.length);
	        return result.slice(Filtering.paginationPointer() - 1, Filtering.paginationPointer() + 2);;

	    });

	};

});

