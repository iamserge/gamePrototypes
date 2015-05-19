define(['jquery', 'knockout', 'global/uiBlocker'], function($, ko, uiBlocker) {

	return function PredictiveSearchViewModel() {
		var config = {
			resultsToDisplay: 5,
			msBeforeSearch: 1000,
			ajaxSearchRequestUrl: "/webapp/wcs/stores/servlet/AjaxPredictiveSearchView?storeId=" + Game.Global.Vars.storeId + '&catalogId=' + Game.Global.Vars.catalogId + '&langId=' + Game.Global.Vars.langId + '&term='
		}

		var self = this,
			keyChangeTimeout,
			$elements = new function(){
				this.body = $('body');
				this.main = $('main');
				this.searchIcon = $('#searchIcon');
				this.searchPanel = $('#searchPanel');
				this.searchTermInput = this.searchPanel.find('#product_search');
				this.searchResults = $('#searchResults');
			},
			
			hideSearchElements = function(){
				$elements.searchResults.removeClass('opened');
				$elements.searchPanel.removeClass('opened')
				$elements.main.removeClass('unfocused');
				$elements.searchIcon.removeClass('selected');
				$elements.main.off('click', hideSearchElements);
			},
			sendRequest = function(){
				uiBlocker.insertLoader($elements.body);
				$.get(config.ajaxSearchRequestUrl + self.SearchTerm(),  function(res){
					self.SearchResults(res);
					uiBlocker.removeLoader($elements.body);
					$elements.searchResults.addClass('opened');
				});
			};


		self.SearchTerm = ko.observable();
		self.SearchResults = ko.observableArray([]);
		self.SearchResultsToDisplay = ko.computed(function(){

			return self.SearchResults.slice(0, config.resultsToDisplay);

		});
		
		self.SearchTerm.subscribe(function(newValue){

			if (typeof keyChangeTimeout != "undefined") clearTimeout(keyChangeTimeout);

			if (newValue.length > 2) {
				//Only perform search when user stops typing 
				keyChangeTimeout = setTimeout(sendRequest, config.msBeforeSearch);
			} else if (self.SearchResults().length > 0) {

				$elements.searchResults.removeClass('opened');
				setTimeout(500, function(){
					self.SearchResults([]);
				});
			}

		});

		self.ExpandSearch = function(model, event){
			$elements.searchPanel.toggleClass('opened');
			$(event.currentTarget).toggleClass('selected');

			if ($elements.searchPanel.hasClass('opened')) {
				$elements.searchTermInput.focus();
				$elements.main.on('click', hideSearchElements);
			} else {
				$elements.searchResults.removeClass('opened');
				$elements.main.off('click', hideSearchElements);
			}


		}
		
		
	};


});