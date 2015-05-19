define(['knockout', 'global/uiBlocker'], function(ko, uiBlocker) {

	return function BasketViewModel(config) {
		
		var self = this;

		self.PromoCodeDiscountAmount = ko.observable('');
		self.OrderSubtotalAmount = ko.observable('');
		self.OrderItems = ko.observableArray([]);
		self.DeliveryOptions = ko.observableArray([]);
		self.PromotionalCode = ko.observable('');

		self.init = function(config) {

			self.UpdateViewModelWithJsonData(config.Basket);

		};

		self.UpdateViewModelWithJsonData = function(data) {

			self.PromoCodeDiscountAmount(data.PromoCodeDiscountAmount);
			self.OrderSubtotalAmount(data.OrderSubtotalAmount);
			self.OrderItems(data.OrderItems);
			self.DeliveryOptions(data.DeliveryOptions);

		};

		self.OrderItemsCountText = ko.computed(function() {

			return '(' + self.OrderItems().length + ' items)';

		});

		self.HandleOrderItemQuantityChange = function(orderItem, event) {

			alert('Update quantity to ' + event.currentTarget.value + ' for item: ' + orderItem.Title);

		};

		self.HandleMoveToWishlistButtonClick = function(orderItem) {

			uiBlocker.blockUI(function() { alert('An error has occurred processing your request'); });
			self.OrderItems.remove(orderItem);
			alert('Moving order item to wishlist: ' + orderItem.Title);
			uiBlocker.unblockUI();

		};

		self.HandleRemoveLinkClick = function(orderItem) {

			uiBlocker.blockUI(function() { alert('An error has occurred processing your request'); });
			self.OrderItems.remove(orderItem);
			alert('Removing item from basket: ' + orderItem.Title);
			uiBlocker.unblockUI();

		};

		self.HandleCheckoutButtonClick = function() {

			window.location = '/webapp/wcs/stores/servlet/CheckoutStep1PrototypeView?storeId=10151&langId=44';

		};

		self.HandleApplyPromotionalCodeButtonClick = function() {

			if(self.PromotionalCode().length === 0) {
				alert('No code entered');
			} else {
				alert('Apply promo code: ' + self.PromotionalCode());
			}

		};

		self.init(config);

	};


});