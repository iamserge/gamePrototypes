define( ['knockout'], function(ko) {

	return function PDPMarketplaceTableSellersDetailsModel(master) {

		var sellerDetails = this,
			requestUrl = '/webapp/wcs/stores/servlet/m/AJAXMarketplaceSellerDeliveryDetails?msg=&vendorShopId=',
			$sellerDetails = $('#sellerDetails'),
			$selectedSeller;
			


		sellerDetails.details = ko.observable({

			sellerName: "",
			sellerInfo: "",
			sellerShippingDetails: []

		});

		sellerDetails.getSellerDetails = function (model, event) {

			event.preventDefault();

			var sellerId = model.vendorShopId;
			$selectedSeller = $(event.currentTarget).parent().parent();
			selectedSellerIndex = $.inArray(model, master.marketplaceItems());
			sellerDetails.sendRequest(sellerId)

		}

		sellerDetails.sendRequest = function(sellerId) {

			$.get(requestUrl + sellerId, function(res){

				var details = JSON.parse(res);
				sellerDetails.details({
					
					sellerName: details.supplier.name,
					sellerInfo: details.supplier.sellerInfo,
					sellerShippingDetails: JSON.parse(details.shipping)

				});

			});
		}

	
		sellerDetails.afterSellerDetailsUpdated = function(elements){
			
			if (typeof $selectedSeller != 'undefined') {

				console.log($sellerDetails);
				$sellerDetails.remove();
				$selectedSeller.after($sellerDetails);

			}
			
		}

		
		


	};

});

