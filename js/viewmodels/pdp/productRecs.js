define( ['knockout','global/uiBlocker'], function(ko, uiBlocker) {

	return function PDPProductRecsModel(config) {
		
		var productRecsOptions = config.productRecsOptions,
			defaultConsoleLog = console.log, 
			targetAttributes,
			$productRecsContainer = $(productRecsOptions.productRecsContainerSelector),
			getProductRecs = function(){

				//Setup function in a global scope based on zone Id, which will be used as callback for cmDisplayRecs
				window[config.productRecsOptions.zoneID + "_zp"] = function(recommendedIds, zoneId, symbolic, targetId, targetCat, recAttributes, targetAttr, zoneHeader) {
					//Restoring console logs
					console.log = defaultConsoleLog;
					targetAttributes = targetAttr;
					generateProductRecs(recAttributes);
					
				}

				//Original WCS IO recs provide a lot of unneccessary console logs, disabling for a time being
				//console.log = function(){};
				cmRecRequest(productRecsOptions.zoneID, productRecsOptions.productID, productRecsOptions.categoryID, null, productRecsOptions.searchTerm);
				cmDisplayRecs();
				uiBlocker.insertLoader($productRecsContainer);
			},

			generateProductRecObject = function(params){
				
				return {
					Title: params[0],
					Url: params[3],
					Packshot: params[4].replace('https://','http://'),
					Category: params[6],
					Condition: params[13],
					Price: params[10],
					isExclusive: (params[8] == "Y"),
					isFranchise: (params[11].replace(/[^a-zA-Z0-9]/g, '') == targetAttributes[11].replace(/[^a-zA-Z0-9]/g, ''))
				}
			},

			generateProductRecs = function(recsParams) {
				var recObjectsExclusive = [],
					recObjectsNotExclusive = [];

				//Business logic: if exclusive goes in first array, otherwise if same franchise goes in the back if not - in front of second array 
				if (recsParams.length == 0) {

					$(productRecsOptions.productRecsContainerSelector).hide();
					return;

				}
				for (var i in recsParams) {
					var recParams = recsParams[i],
						isExclusive = (recParams[8] == "Y"),
						isFranchise = (recParams[11].replace(/[^a-zA-Z0-9]/g, '') == targetAttributes[11].replace(/[^a-zA-Z0-9]/g, '')),
						recObject = generateProductRecObject(recParams);

					if (isExclusive) {
						recObjectsExclusive.unshift(recObject);
					} else {
						if (isFranchise)
							recObjectsNotExclusive.push(recObject);
						else 
							recObjectsNotExclusive.unshift(recObject);
					}	
				}
				
				self.productRecs(recObjectsExclusive.concat(recObjectsNotExclusive));
			},

			adjustTitleFontSize = function($elem){

				var $title = $elem.find('h3');
				if ($title.height() > productRecsOptions.maxTitleHeight) $title.addClass('longTitle');
			
			}


		self.productRecs = ko.observableArray();
		
		self.afterProductRecRendered = function(elem){
			var $elem = $(elem);

			//Adjust font size for long titles 
			adjustTitleFontSize($elem);

			//Run callback function passed from config if its a last element
			if ($elem.siblings().length + 1 == self.productRecs().length) {
				productRecsOptions.afterAdded();
			}
			uiBlocker.removeLoader($productRecsContainer);
		}
		getProductRecs();

	};

});

