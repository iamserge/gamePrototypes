define(['jquery'], function($) {

	"use strict";

	var	config = {
		attributeNameTitle: 'attributeName',
		attributeValueTitle: 'attributeValue',
		inStockOnlyTitle: 'inStockOnly'
	};

	var url,
		urlObject,
		attributeCount = 0;

	var breakUrl = function() {
		var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

		urlObject = {};

	    while (match = search.exec(query)) {
	    	if (decode(match[1]).indexOf(config.attributeNameTitle) != -1) attributeCount++; 
	    	urlObject[decode(match[1])] = decode(match[2]);
	    }
	       

	   	return urlObject;
	}
        
	var constructUrl = function(redirect){
		if (redirect)
			window.location.search  = "?" + $.param(urlObject);
		else
			return window.location.origin + window.location.pathname + "?" + $.param(urlObject) + "&pageMode=true";
	};

	var fixAttributeCount = function(){
		attributeCount = 0;
		while (typeof urlObject[config.attributeNameTitle + parseInt(attributeCount + 1)] != "undefined")
			attributeCount++;
	}
	

	var addNewAttribute = function() {

	}

	var getUrlObject = function(){
		return urlObject;
	}

	var addFilterAttribute = function(attrObject, redirect, fromPageOne) {

		if (typeof urlObject[config.attributeNameTitle + parseInt(attributeCount + 1)] != "undefined") fixAttributeCount();

		if (attrObject.Name != config.inStockOnlyTitle) {
			urlObject[config.attributeNameTitle + parseInt(attributeCount + 1)] = attrObject.Name;
			urlObject[config.attributeValueTitle + parseInt(attributeCount + 1)] = attrObject.Value;
		} else {
			urlObject[attrObject.Name] = attrObject.Value;
		}
		if (fromPageOne) delete urlObject['pageNumber'];
		if (redirect) 
			constructUrl(true);
		else
			return constructUrl(false)
	}
	
	var removeFilterAttribute = function(attrObject, redirect, fromPageOne) {
		if (attrObject.Name != config.inStockOnlyTitle) {
			for (var key in urlObject) {
				if (attrObject.Name == urlObject[key] && key.indexOf(config.attributeNameTitle) != -1) delete urlObject[key];
				if (attrObject.Value == urlObject[key] && key.indexOf(config.attributeValueTitle) != -1) delete urlObject[key];
			}
		} else {
			urlObject[attrObject.Name] = attrObject.Value;
		}
		if (fromPageOne) delete urlObject['pageNumber'];
		if (redirect) 
			constructUrl(true);
		else
			return constructUrl(false)
	}	

	var changeAddAttribute = function(attrObject, redirect, fromPageOne) {
		if (attrObject instanceof Array) {
			for (var i in attrObject){
				urlObject[attrObject[i].Key] = attrObject[i].Value;
			}
		} else {
			urlObject[attrObject.Key] = attrObject.Value;
		}
		if (fromPageOne) delete urlObject['pageNumber'];
		if (redirect) 
			constructUrl(true);
		else
			return constructUrl(false)
	}

	var init = function() {
		breakUrl();
	};

		
		
	
		






	

	
	


	return {
		init: init,
		getUrlObject: getUrlObject,
		addFilterAttribute: addFilterAttribute,
		removeFilterAttribute: removeFilterAttribute,
		changeAddAttribute: changeAddAttribute
	}

});


