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
				PageName: 'checkoutPaymentDetails',
				StoreText:  {
					isRequiredErrorBase: " is required",
					eVoucherNumberNotCorrectError: "eVoucher number should be 13 digit long",
					GiftCardNumberNotCorrectError: "Gift card number should be 21 digit long",
					GiftCardPINNotCorrectError: "Gift card PIN number should be 4 digits long",
					CardNumberNotCorrectError: "Credit card number should be 16 digits long",
					SecurityNumberNotCorrectError: "Security number should be 3 digits long"
				}
			}
		</script>
		
	</head>

	<body id="checkout" class="paymentDetails">

		<%@include file="Header.jsp" %>

		<main>

			<%@include file="CheckoutSubHeader.jsp" %>
			<%@include file="BasketSummary.jsp" %>

			<section id="checkoutVoucher" class="giftPaymentMethod collapsible collapsed mainSection">

				<h2 class="trigger">Do you have a gift voucher?</h2>
				<div class="content">
					<input type="text" name="voucherCode" id="voucherCode" placeholder="Gift voucher/ eVoucher" class="required" data-validate="true"/>
					<a href="#" class="apply">Apply</a>
				</div>
			</section>

			<section id="checkoutGiftCard" class="giftPaymentMethod collapsible collapsed mainSection">

				<h2 class="trigger">Do you have a gift card?</h2>
				<div class="content">
					<input type="text" name="giftCardNumber" id="giftCardNumber" placeholder="Gift card number" data-validate="true" class="required"/>
					<input type="text" name="giftCardPIN" id="giftCardPIN" placeholder="Pin number" class="small required" pattern="[0-9]*" data-validate="true"/>
					<a href="#" class="apply">Apply</a>
				</div>

			</section>
			<form id="payNowForm" action="/">
				<section id="paymentCardDetails" class="mainSection">

					<h2>Payment details</h2>
					<div class="cardTypeContainer">
						<select id="cardType" name="cardType">
							<option value="visa">VISA</option>
							<option value="master">Master</option>
							<option value="maestro">Maestro</option>
						</select>
						<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/cardTypes.png" alt="" class="cardTypes"/>
					</div>
					<div class="alternativePaymentMethods">
						Or use <a href="#" class="payPal"></a> or <a href="#" class="gameWallet"></a>
					</div>
					<input type="text" class="required" name="nameOnCard" id="nameOnCard" placeholder="Name on card" class="required" data-validate="true"/>
					<input type="text" class="required" name="cardNumber" id="cardNumber" placeholder="Card number" pattern="[0-9]*" class="required" data-validate="true"/>
					<div class="expiryDateContainer">
						<label>Expiry date</label>
						<div class="expiryMonthContainer">
							<select id="expiryMonth" name="expiryMonth" class="small required" data-validate="true" data-validationName="Expiry month" >
								<option value="-1">Month</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</select>
						</div>

						<div class="expiryYearContainer">
							<select id="expiryYear" name="expiryYear" class="small required" data-validate="true" data-validationName="Expiry year">
								<option value="-1">Year</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
								<option value="2019">2019</option>
								<option value="2020">2020</option>

							</select>
						</div>
					</div>
					<input type="text" class="required small" name="securityNumber" pattern="[0-9]*"  placeholder="Security number" data-validate="true"/>
				</section>
				
				<section id="billingAddress" class="mainSection">
					<h2>Billing address</h2>
					<div class="addressContainer">
						<input type="checkbox" name="sameBillingAddress" id="sameBillingAddress" checked />
						<label for="sameBillingAddress">
							Billing address is the same as the delivery address: 
							<strong class="address">
								64 Clarendon Road, Watford, CV213QU
							</strong>
						</label>
					</div>
					<div id="manualBillingAddress">
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

					</div>
				</section>

				<section id="payNow" class="mainSection">
					<span class="tandcText">By clicking Pay Now you are agreeing to our <a href="#">Terms and Conditions</a></span>
					<input type="submit" class="button" id="payNowButton" value="Pay now"/>
				</section>
			</form>
		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>