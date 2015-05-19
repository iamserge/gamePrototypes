define(['jquery','knockout','viewmodels/plp/plpProducts', 'viewmodels/plp/plpFilters','plp/urlClass'], function($, ko, plpProductsViewModel, plpFiltersViewModel, url) {

	"use strict";

	var config = {
		pageNumberKey: "pageNumber",
		pageModeKey: "pageMode",
		sortByKey: "sortBy",
		productsAmountPerPage: 10,
		headerResultsCountFrom: '#plpHeader .resultsShowingAmount span.from',
		headerResultsCountTo: '#plpHeader .resultsShowingAmount span.to'
	};

	var init = function(options) {

		config = $.extend(true, config, options);

		layoutSelectHandler();

		ko.applyBindings(new plpFiltersViewModel(config), $('#plpHeader')[0] );
		ko.applyBindings(new plpProductsViewModel(config), $('#plpMain')[0] );
		adjustScrollTop();
		productClickHandler();



	};


	var layoutSelectHandler = function(){

		var $layoutButtons = $('#plpHeader .layouts a'),
			$products = $('#plpProducts'),
			changeLayout = function($el){

				$el.parent().find('.selected').removeClass('selected');
				$el.addClass('selected');
				$products.addClass('scaled');

				setTimeout(function(){
					$products.attr('class',$el.data('layout'))
				}, 200)

			};

		$layoutButtons.on('click',function(){
			changeLayout($(this));
		});

	};

	var productClickHandler = function(){
		$(document).on('click','#plpProducts .product' ,function(e){
			e.preventDefault();
			$(this).addClass('clicked');
			window.location.href = $(this).data('url');
		});
	}

	var adjustScrollTop = function() {
		if (window.history.state !== null) $(window).scrollTop(window.history.state.scrollTop);
	}



	


	return {
		init: init
	};

});