<!DOCTYPE html>
<html>

	<head>

		<title>GAME Mobile - Checkout Step 3 Prototype</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'checkoutStep3',
				StoreText:  {
					AddressLineOneErrorMessage: 'Please enter the first line of your address',
					AddressTownErrorMessage: 'Please enter your town',
					AddressCountyErrorMessage: 'Please enter your county',
					AddressPostcodeErrorMessage: 'Please enter your postcode'
				}
			}
		</script>
		
	</head>

	<body id="checkout">

		<%@include file="Header.jsp" %>

		<main>

			<%@include file="CheckoutSubHeader.jsp" %>
			<%@include file="BasketSummary.jsp" %>

			<section id="manualAddressEntry">

				<strong>Please select your delivery option:</strong>

				<div id="deliveryOptionButtons">
					<button>Home delivery</button>
					<span class="orText">OR</span>
					<button disabled>Collection</button>
				</div>

				<div id="manualAddressDetails">

					<h2>Where would you like your order delivered?</h2>

					<select name="country" id="country">
						<option>UK</option>
						<option>USA</option>
						<option>Latvia</option>
					</select>
					<input type="text" name="addressLine1" id="addressLine1" placeholder="Address Line 1" data-validate="true" class="required"/>
					<input type="text" name="addressLine2" id="addressLine2" placeholder="Address Line 2" />
					<input type="text" name="town" id="town" placeholder="Town" data-validate="true" class="required"/>
					<input type="text" name="county" id="county" placeholder="County" data-validate="true" class="required"/>
					<input type="text" name="postCode" id="postCode" placeholder="Post code" data-validate="true" class="required"/>
					<input type="submit" value="Continue to payment details" name="continueButton" id="continueButton" />

				</div>

			</section>

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>