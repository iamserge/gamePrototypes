<!DOCTYPE html>
<html>

	<head>

		<title>GAME Mobile - Checkout Step 4 Prototype</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'checkoutCollectionOptions',
				StoreText:  {
					PostcodeCannotContainSpecialCharactersError: "No special characters allowed"
				}
			}
		</script>
		
	</head>

	<body id="checkout" class="paymentDetails">

		<%@include file="Header.jsp" %>

		<main>

			<%@include file="CheckoutSubHeader.jsp" %>
			<%@include file="BasketSummary.jsp" %>
			<section id="collectionOptionsSection">

				

				<div id="deliveryOptionButtons">
					<strong>Please select your delivery option:</strong>
					<button class="disabled">Home delivery</button>
					<span class="orText">OR</span>
					<button>Collection</button>
				</div>


				<div id="collectionData">
					
					<div id="collectionInputContainer" data-bind="slideVisible: typeof UserLocation().lat == 'undefined'">
						<h2>Please submit postcode or town for collection:</h2>
						<input type="text" name="collectionPostcodeTown" data-validate="true" placeholder="Postcode or Town" class="required" data-bind="value: Location"/>
						<button data-bind="click: FindCollectionPoint">Find nearest collection point</button>
						<span class="orText">or</span>
						<button data-bind="click: ShareLocation" class="shareLocation">Share locations</button>

					</div>
					<div id="userLocationContainer" data-bind="slideVisible: typeof UserLocation().lat != 'undefined'">
						<a href="#" data-bind="click: NotMyLocation"><span data-bind="text: Location()"></span> <strong> Not my location</strong></a>
						<div id="userLocationMap"></div>
					</div>
				</div>

				<div id="collectionOptions" class="collapsible" data-bind="slideVisible: CollectionPoints().length">
					<h2 class="trigger">Collection options</h2>
					<div class="rows">
						<div class="row game">
							<span class="info">Collect from any specified GAME store - Next day</span>
							<span class="price">FREE</span>
						</div>
						<div class="row collectPlus">
							<span class="info">Collect from any participating local store - Allow two days</span>
							<span class="price">&pound;3.00</span>
						</div>
					</div>
				</div>

				<div id="collectionPoints" data-bind="slideVisible: CollectionPoints().length">
					<h2>Select collection location</h2>
					<div class="points" data-bind="foreach: CollectionPointsToDisplay">
						<div class="point" data-bind="css: type, click: SelectCollectionPoint">
							<div class="inputContainer"><input type="radio" name="collectionPoint" /></div>
							<span class="address" data-bind="text: address"></span>
							<span class="miles" data-bind="text: distance + ' miles'"></span>
						</div>
					</div>
					<%-- Seller Details template --%>
					<div id="collectionPointDetails" data-bind="template: { name: 'collectionPointDetails-template', data: SelectedCollectionPoint, afterRender: AfterCollectionPointSelected }"></div>
					<script type="text/html" id="collectionPointDetails-template">
						<!-- ko if: $data --> 
						    <h3 data-bind="text: shopName"></h3>
						    <div id="collectionPointMap"></div>
						    <div class="times" data-bind="foreach: times">
						    	<span data-bind="text: $data"></span>
						    </div>		
				   		<!-- /ko -->			    
					</script>
					<button class="showMore" data-bind="visible: CollectionPointsNumber() != CollectionPoints().length, click: ShowMoreCollectionPoints">Show more</button>
				</div>

				

			</section>
			<section id="continue">
			</section>
		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>