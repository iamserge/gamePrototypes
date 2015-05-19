define(['jquery', 'knockout'], function($, ko) {

    ko.bindingHandlers.slideVisible = {

        init: function(element, valueAccessor) {
            $(element).toggle(ko.unwrap(valueAccessor()));
        },

        update: function(element, valueAccessor) {
            ko.unwrap(valueAccessor()) ? $(element).slideDown() : $(element).slideUp();
        }

    };

    ko.observableArray.fn.refresh = function (item) {

	    var index = this['indexOf'](item);

	    if (index >= 0) {
	        this.splice(index, 1);
	        this.splice(index, 0, item);
	    }
	    
	};

});