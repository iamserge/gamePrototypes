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
				PageName: 'checkoutStep4',
				StoreText:  {
				}
			}
		</script>
		
	</head>

	<body id="checkout">

		<%@include file="Header.jsp" %>

		<main>

			<%@include file="CheckoutSubHeader.jsp" %>
			<%@include file="BasketSummary.jsp" %>

			<section id="chosenAddressDisplay">

				Address chosen for delivery:

				<div>
					64 Clarendon Road, Watford,<br />
					WD17 1DA, London
				</div>

				<a href="/webapp/wcs/stores/servlet/CheckoutStep2PrototypeView?storeId=10151&langId=44">Edit address</a>

			</section>

			<section class="deliveryGroup mainSection">

				<h2>
					Delivery 1/2
					<span>NEW</span>
				</h2>

				<div class="fulfilment">
					Sold by and fulfilled by <img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/marketplaceGameLogo.png" />
				</div>

				<select>
					<option>Select your home delivery choice</option>
				</select>

				<div class="itemDetails">
					<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/packshot.png" />
					<h3>Call of Duty: Advanced Warfare (Xbox One)</h3>
					<div>Qty 1</div>
				</div>

			</section>

			<section class="deliveryGroup mainSection">

				<h2>
					Delivery 2/2
					<span>NEW</span>
				</h2>

				<div class="fulfilment">
					Sold by and fulfilled by <img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/marketplaceGraingerLogo.png" />
				</div>

				<select>
					<option>Select your home delivery choice</option>
				</select>

				<div class="itemDetails">
					<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/packshot.png" />
					<h3>Watchdogs (Xbox One)</h3>
					<div>Qty 1</div>
				</div>

			</section>

			<section id="subFooter">

				<div class="basketSummary">
					<div class="totalLine reductions">Promotional code:<span class="subTotal">12.29</span></div>
					<div class="totalLine">
						Order Subtotal: <span class="itemsQty">(2 items)</span>
						<span class="subTotal">123.99</span>
					</div>
					<a href="#" class="button">Secure Checkout</a>
				</div>

			</section>

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>