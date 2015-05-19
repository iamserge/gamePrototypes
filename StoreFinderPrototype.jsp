<!DOCTYPE html>
<html>

	<head>

		<title>GAME Mobile - Checkout Step 1 Prototype</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'storeFinder',
				StoreText:  {
					
					}
			}
		</script>
		
	</head>

	<body id="storeFinder">

		<%@include file="Header.jsp" %>

		<main>

			<section id="subHeader">

				<h1>Store finder</h1>

			</section>

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

			

			<div id="shopsContainer" data-bind="slideVisible: CollectionPoints().length">
				<h2>Select collection location</h2>
				<div class="shops" data-bind="foreach: CollectionPointsToDisplay">
					<div class="shop">
						<h2 data-bind="text:shopName"></h2>
						<span class="address" data-bind="text: address"></span>
						<span class="miles" data-bind="text: distance + ' miles'"></span>
						<a data-bind="attr: {href: 'http://maps.apple.com/?q=' + latitude + ',' + longitude}" href="http://maps.apple.com/?q=51.507269,-0.127695" class="showOnMap">Show on map</a>
					</div>
				</div>
				
				<button class="showMore" data-bind="visible: CollectionPointsNumber() != CollectionPoints().length, click: ShowMoreCollectionPoints">Show more</button>
			</div>


		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>