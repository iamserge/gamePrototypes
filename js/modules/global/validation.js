define(['jquery'], function($) {

	"use strict";

	var	config = {
		defaultValidators: {
			'email': function(val) {
				return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
			},
			'postcode': function(val) {
				return /^[a-zA-Z0-9 .]*$/.test(val.replace(/ /g,''));
			},
			'password': function(val) {
				return /^(?=(.*[a-z]){1,})(?=(.*[\d]){1,}).{6,}$/.test(val);
			}
		}
	},

	Validation = function($el, options) {
		this.$el = $el;
		this.options = $.extend({},config, options);
	};
        
	
	var proto = Validation.prototype;
		

	proto.insertErrorMessage = function($field, message) {
			var fieldName = $field.attr('name'),
				$errorMessage = $('<span />', {
					class: "errorMessage",
					text: message,
					'data-for': fieldName
				});

			$field.after($errorMessage);
		}

	proto.manageErrorMessage = function($field, message) {

		var self = this,
			fieldName = $field.attr('name'),
			$errorMessage = $('.errorMessage[data-for="' + fieldName + '"]');

		if (message) {
			if ($errorMessage.length == 0) {
				self.insertErrorMessage($field, message);
				$field.addClass('errorInput');
			} else {
				$errorMessage.text(message);

			}
				
		} else {
			$field.removeClass('errorInput');
			$errorMessage.fadeOut(function(){$errorMessage.remove()});
		}
	}

	proto.validateSpecialRule = function($field) {

		var self = this,
			$errorMessage = $('.errorMessage[data-for="' + fieldName + '"]'),
			fieldName = $field.attr('name'),
			fieldValue = $field.val(),
			errorMessage = '';

		if ( self.options.specificValidationRules && typeof self.options.specificValidationRules[fieldName] != 'undefined') {
			for (var i in self.options.specificValidationRules[fieldName]) {
				var ruleObj = self.options.specificValidationRules[fieldName][i],
					rule = (typeof ruleObj.rule == 'function')? ruleObj.rule : self.options.defaultValidators[ruleObj.rule];
				
				try {
					if (!ruleObj.ajax) {
						if (!rule(fieldValue)) {
							errorMessage = ruleObj.errorMessage;
							break;
						}
					} else {
						if (!rule(fieldValue)) {
							errorMessage = ruleObj.errorMessage;
							break;
						}
					}
					
				}
				catch(err){
					console.log('Cannot find specification for default rule "' + rule + '"');
				}

				
			}
		}

		return errorMessage;
	}


	proto.validateField = function($field) {

		var self = this,
			errorMessage = '',
			fieldName = $field.attr('name'),
			fieldValue = $field.val(),
			isRequired = $field.hasClass('required'),
			isValueNull = ($field.val().length == 0 || $field.val() == -1);

		if (isRequired && isValueNull )
			errorMessage = ((typeof $field.data('validationname') != "undefined")? $field.data('validationname') : $field.attr('placeholder'))  + Game.Global.StoreText.isRequiredErrorBase ;
		else
			errorMessage = self.validateSpecialRule($field);				
		

		self.manageErrorMessage($field, errorMessage);

		return (!errorMessage) ? true: false;
	};

	proto.validateFields = function($fields) {
		var self = this,
			valid = true;

		$fields.each(function(){
			var $field = $(this),
				isVisible = $field.is(':visible');

			//If some field before was not valid, we dont want to change valid variable as well as we dont want to validate hidden fields
			if (isVisible) valid = (self.validateField($field) && valid) ? true : false;
		});
		return valid;
	};

	proto.setupChangeEvents = function($fields) {
		var self = this;
		$fields.each(function(){
			var $field = $(this);

			$field.on('change', function(e){
				self.validateField($field);
			});
		})
	}
	proto.extendRules = function(extendedRules){
		var self = this;
		for (var i in extendedRules) {
			if (typeof self.options.specificValidationRules[i] != "undefined") {
				self.options.specificValidationRules[i] = self.options.specificValidationRules[i].concat(extendedRules[i]);
			} else {
				self.options.specificValidationRules[i] = extendedRules[i];
			}
		}
	}
	proto.validate = function(extendedRules, dontScrollToFields) {
		var self = this;
		if (typeof extendedRules != "undefined") {
			self.extendRules(extendedRules);
		}
		if (self.$el.is('form, div, section')) {

			var $fields = self.$el.find('*[data-validate="true"]');
			if (!self.validateFields($fields)) {
				self.setupChangeEvents($fields);
				if (!dontScrollToFields) $("html, body").animate({ scrollTop: self.$el.find('.errorMessage').eq(0).offset().top - 100});
				return false
			} else {
				return true;
			}
		} else if (self.$el.is('input, select, textarea')) {
			return self.validateField(self.$el);
		}
			
	};

	proto.showErrorMessage = function(fieldName, errorMessage){
		var self = this;
		self.manageErrorMessage($('input[name="' + fieldName + '"]'), errorMessage);
	}
	

	proto.hideErrorMessage = function(fieldName){
		var self = this;
		self.manageErrorMessage($('input[name="' + fieldName + '"]'))
	}
	

	proto.validateOnClick = function ($el) {
		var self = this;
		$el.on('click', function (e) {

			if (!self.validate()) e.preventDefault();
		})
	}
		






	

	
	


	return Validation;

});


