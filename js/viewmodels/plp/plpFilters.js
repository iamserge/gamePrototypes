define( ['knockout','global/uiBlocker', 'plp/urlClass'], function(ko, uiBlocker, url) {

	return function PLPFiltersViewModel(config) {

		self.processAppliedFilters = function(filters){
			var newFilters = [];

			for (var i in filters) {
				for (var j in filters[i].Filters) {
					var filter = filters[i].Filters[j];
					newFilters.push({
						Title: filter.Title,
						Attribute: filter.Attribute,
						Value: filter.Value
					});
				}
			}

			return newFilters;
		}

		self.appliedFilters = ko.observableArray(self.processAppliedFilters(Game.CurrentPage.Filters.Applied));
		self.availableFilters = ko.observableArray([]);
		self.interactionHappened = ko.observable(false);

		self.init = function() {

			self.generateObservableArrays();
			url.init()
			console.log(url.getUrlObject());

		}




		//** Logic functions **//
		self.generateObservableArrays = function() {

			for (var i in Game.CurrentPage.Filters.Available) {

				var filterTypeObject = Game.CurrentPage.Filters.Available[i],
					filterTypeNewObject = {
						Type: filterTypeObject.Type,
						Filters: ko.observableArray(filterTypeObject.Filters)
					}
					self.sortFiltersArrayAlphabetically(filterTypeNewObject.Filters);
				self.availableFilters.push(filterTypeNewObject);

			}

		}

		self.sortFiltersArrayAlphabetically = function(filtersArray) {

			filtersArray.sort(function(left, right){
				return left.Title == right.Title ? 0 : (left.Title < right.Title ? -1 : 1)
			})

		}
		
		self.removeAppliedFilter = function(filter,event) {

			event.preventDefault();
			self.interactionHappened(true);
			self.appliedFilters.remove(filter);
			self.insertAvailableFilter(filter);
			uiBlocker.blockUI();
			url.removeFilterAttribute({
				Name: filter.Attribute,
				Value: filter.Value
			}, true, true)
			
		}

		self.addAppliedFilter = function(filter, event, $parent) {
			
			event.preventDefault();
			//Remove filter from parent Type array
			$parent.Filters.remove(filter);
			self.interactionHappened(true);

			self.appliedFilters.push({
				Title: filter.Title,
				Type: $parent.Type,
				Count: filter.Count
			});
			uiBlocker.blockUI();
			url.addFilterAttribute({
				Name: filter.Attribute,
				Value: filter.Value
			}, true, true);

		}

		self.insertAvailableFilter = function(filter) {

			var filterTypeObject = $.grep(self.availableFilters(), function(e) {return e.Type == filter.Type})[0];
			if (typeof filterTypeObject != "undefined") {
				filterTypeObject.Filters.push({
					Title: filter.Title,
					Count: filter.Count
				});
				self.sortFiltersArrayAlphabetically(filterTypeObject.Filters);
			}

		}

		self.toggleFiltersContainer = function(model, event) {

			$(event.currentTarget).toggleClass('opened');
			$('.filtersContainer').slideToggle();



		}

		self.clearAllFilters = function(model, event) {

			var removedItems = self.appliedFilters.removeAll()
			for( var i in removedItems) {
				self.insertAvailableFilter(removedItems[i]);
			}

		}

		self.applyFilters = function(elem) {

		}

		self.changeSort = function(model, event) {
			var $select = $(event.currentTarget);

			
			uiBlocker.blockUI();
			url.changeAddAttribute({
				Key: config.sortByKey,
				Value: $select.val()
			}, true, true)
		}


		//** Animation, DOM manipulation functions **//
		self.showAppliedFilter = function(elem) {

			if (elem.nodeType === 1) {
	            var $elem = $(elem);
	            $elem.addClass('adding');
	            $elem.animate({
				    left: '0'
				  }, 300);
	        }

		}

		self.hideAppliedFilter = function(elem) {

			if (elem.nodeType === 1) {
				var $elem = $(elem);
	            $elem.animate({
				    left: '120%'
				  }, 200, function() {$elem.remove();});
	        }

		}

		self.showAvailableFilter = function(elem) {

			if (elem.nodeType === 1) {
	            var $elem = $(elem);
	            $elem.addClass('adding');
	            $elem.animate({
				    left: '0'
				  }, 300);
	        }

		}

		self.hideAvailableFilter = function(elem) {

			if (elem.nodeType === 1) {
				var $elem = $(elem);
	            $elem.animate({
				    left: '-100%'
				  }, 200, function() {
				  	$elem.slideDown(function(){
				  		$elem.remove();
				  	})
				 });
	        }

		}



		self.showSortBy = function(model, event) {
			event.preventDefault();

			$('#sortBySelect').show().trigger('click');
		}
		
		



		self.init();
		


	};

});

