define( ['knockout','global/uiBlocker','plp/urlClass'], function(ko, uiBlocker, url) {

	return function PLPProductsViewModel(config) {

		var requestCount = 0,
			pageNumber = 2;
			

		//self.newProducts = ko.observableArray((window.history.state !== null)? window.history.state.newProducts : []);


		self.newProducts = ko.observable();
		self.amountShowing = ko.observable(config.productsAmountPerPage);
		self.showPagination = ko.observable(true);
		self.fromPagination = ko.observable(1);

		url.init();
		self.updateTopPaginationNumbers = function() {
			$(config.headerResultsCountFrom).text(self.fromPagination());
			$(config.headerResultsCountTo).text(self.amountShowing());
			
		}

		self.isPageDefined = (function(){
			if (typeof url.getUrlObject().pageNumber != "undefined") {
				pageNumber = url.getUrlObject().pageNumber;
				self.fromPagination(pageNumber * config.productsAmountPerPage)
				self.amountShowing((parseInt(pageNumber) + 1) * parseInt(config.productsAmountPerPage));
				pageNumber++;
				self.updateTopPaginationNumbers();
			}
		})();

		

		window.onbeforeunload = function(){
			history.pushState({
				scrollTop: $(window).scrollTop(),
				newProducts: self.newProducts()
			}, "Page " + requestCount, "#Page" + requestCount);
		}

		self.redirectToPDPPage = function(model, event) {

			window.location.href = model.Url;
		};

		self.getMoreProducts = function (model, event) {
			
			if (requestCount < 4) {

				event.preventDefault();

				self.sendRequest(url.changeAddAttribute({
						Key: config.pageNumberKey,
						Value: pageNumber
					}, false));

			} else {
				url.changeAddAttribute({
						Key: config.pageNumberKey,
						Value: pageNumber
					}, true)
			}

		}
		self.processRequest = function($res) {
			self.showPagination($res.find('.product').length >= config.productsAmountPerPage);
			if (typeof self.newProducts() != "undefined" ) 
				self.newProducts(self.newProducts() + $res.find('#productlist').html()); 
			else
				self.newProducts($res.find('#productlist').html());

			requestCount++; 
			pageNumber++;

			uiBlocker.unblockUI();
			self.amountShowing(self.amountShowing() + $res.find('.product').length);
			self.updateTopPaginationNumbers();
		}

		

		self.sendRequest = function(requestUrl) {
			uiBlocker.blockUI();
			$.get(requestUrl, function(res){
				self.processRequest($(res));
			});
		}

	
	
		


	};

});

