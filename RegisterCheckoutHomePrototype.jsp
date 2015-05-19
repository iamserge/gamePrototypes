<!DOCTYPE html>
<html>

	<head>

		<title>GAME Mobile - Checkout Step 2 Prototype</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'expressCheckout',
				PageFlavour: 'homeDelivery',
				StoreText:  {
					PostcodeCannotContainSpecialCharactersError: "No special characters allowed"
				}
			}
		</script>
		
	</head>

	<body id="checkout">

		<%@include file="Header.jsp" %>

		<main>
			<section id="expressCheckoutHeader">
				<h1>Express checkout</h1>
			</section>
			<%@include file="BasketSummary.jsp" %>

			<section id="deliveryOptionSelection">

				<h3 class="title">Please select your delivery option:</h3>

				<div id="deliveryOptionButtons">
					<a href="#" id="homeDeliveryButton">Home delivery</a>
					<span class="orText">OR</span>
					<a href="#" id="collectionButton" class="disabled">Collection</a>
				</div>
				
			</section>
			<div id="deliverySectionsContainer" class="sectionsContainer collapsible">
				<h2 class="trigger">Delivery details</h2>
				<div class="content">
					<section id="deliveryAddresses" class="mainSection hidden">
						<h2>Delivery address</h2>
						<div class="addresses">
							<div class="selected address">
								64 Clarendon Road, Watford, WD17 1DA, London
							</div>
							<div class="moreAddresses">
								<div class="address">
									62 Clarendon Road, Watford, WD17 1DA, London
								</div>
								<div class="address">
									63 Clarendon Road, Watford, WD17 1DA, London
								</div>
								<div class="address">
									65 Clarendon Road, Watford, WD17 1DA, London
								</div>
								<div class="address">
									66 Clarendon Road, Watford, WD17 1DA, London
								</div>
								<a href="#" id="addNewAddress">Add new address</a>
							</div>

						</ul>
						<a href="#" id="showMoreAddressesButton">Change address</a>
					</section>

					<section class="deliveryGroup mainSection hidden">
						<h2>
							Delivery 1/2
							<span>NEW</span>
						</h2>
						<div class="fulfilment">
							Sold by and fulfilled by <img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/marketplaceGameLogo.png" />
						</div>
						<select>
							<option>Free UK Delivery</option>
							<option>Select your home delivery choice</option>
						</select>
						<div class="itemDetails">
							<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/packshot.png" />
							<h3>Call of Duty: Advanced Warfare (Xbox One)</h3>
							<div>Qty 1</div>
						</div>
					</section>

					<section class="deliveryGroup mainSection hidden">
						<h2>
							Delivery 2/2
							<span>NEW</span>
						</h2>
						<div class="fulfilment">
							Sold by and fulfilled by <img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/marketplaceGraingerLogo.png" />
						</div>
						<select>
							<option>Free UK Delivery</option>Monday07

							<option>Select your home delivery choice</option>
						</select>
						<div class="itemDetails">
							<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/packshot.png" />
							<h3>Watchdogs (Xbox One)</h3>
							<div>Qty 1</div>
						</div>
					</section>

					<section id="ageConfirmation" class="mainSection hidden">
						<h2>Please confirm your age <span>*</span></h2>
						<p>At least one product in your basket is age restricted</p>
						<select id="age" name="age">
							<option>12+</option>
							<option>18+</option>
						</select>
					</section>

					<section id="giftOptions" class="mainSection hidden">
						<div class="sendAsGiftContainer">
							<input type="checkbox" name="sendAsGift" id="sendAsGift" />
							<label for="sendAsGift">
								Send as a gift
							</label>
						</div>
					</section>
					
				</div>
			</div>
			
			<div id="paymentDetailsSectionsContainer" class="sectionsContainer collapsible collapsed">
				<h2 class="trigger">Payment details</h2>
				<div class="content">
					<section id="rewardPoints" class="mainSection ">
						<h2>Redeem reward points?</h2>
						<p>You have <span>1236 points</span> ( &pound;3.50 ) </p>
						<div class="buttons">
							<a href="#" id="notNow" class="selected">Not now</a>
							<a href='#' id="redeemNow">Yes</a>
						</div>
						<div class="rewardPointsAmount">
							<p>Enter the value of Reward points to apply to this order</P>
							<input name="pointsAmount" id="pointsAmount" type="text" placeholder="&pound;"  class="required" data-validate="true" />
							<a href="#" id="applyRewardsPoints">Apply</a>
						</div>
					</section>
					<section id="checkoutVoucher" class="giftPaymentMethod collapsible collapsed mainSection ">

						<h2 class="trigger">Do you have a gift voucher?</h2>
						<div class="content">
							<input type="text" name="voucherCode" id="voucherCode" placeholder="Gift voucher/ eVoucher" class="required" data-validate="true"/>
							<a href="#" class="apply">Apply</a>
						</div>
					</section>

					<section id="checkoutGiftCard" class="giftPaymentMethod collapsible collapsed mainSection ">

						<h2 class="trigger">Do you have a gift card?</h2>
						<div class="content">
							<input type="text" name="giftCardNumber" id="giftCardNumber" placeholder="Gift card number" data-validate="true" class="required"/>
							<input type="text" name="giftCardPIN" id="giftCardPIN" placeholder="Pin number" class="small required" pattern="[0-9]*" data-validate="true"/>
							<a href="#" class="apply">Apply</a>
						</div>

					</section>
				
					<section id="paymentCards" class="mainSection ">
						<h2>Registered cards</h2>
						<div class="cards">
							<div class="selected card">
								<span class="row">Card:<span class="value">xxxxxxxxxxxx2312</span></span>
								<span class="row">Card type:<span class="value">VISA</span></span>
								<span class="row"><input name="cardCode" id="cardCode" type="text" placeholder="CVV code"  class="required" data-validate="true"/></span>
							</div>
							<div class="moreCards">
								<div class="card">
									<span class="row">Card:<span class="value">xxxxxxxxxxxx2312</span></span>
									<span class="row">Card type:<span class="value">VISA</span>
								</div>
								<div class="card">
									<span class="row">Card:<span class="value">xxxxxxxxxxxx2312</span></span>
									<span class="row">Card type:<span class="value">VISA</span>
								</div>
								<div class="card">
									<span class="row">Card:<span class="value">xxxxxxxxxxxx2312</span></span>
									<span class="row">Card type:<span class="value">VISA</span>
								</div>
								<div class="card">
									<span class="row">Card:<span class="value">xxxxxxxxxxxx2312</span></span>
									<span class="row">Card type:<span class="value">VISA</span>
								</div>
								
								<a href="#" id="addNewCard">Add new card</a>
							</div>
							<a href="#" id="showMoreCardsButton">Change card</a>
						</div>
						
						<div id="otherPaymentMethods">
							<span>Or</span>
							<a href="#" id="usePayPal">Paypal</a>
							<a href="#" id="useGameWallet">Game wallet</a>
						</div>
					</section>
	
					<section id="orderSummary" class="mainSection ">
						<div class="basketSummary">
							<div class="totalLine reductions">Order Subtotal: <span class="subTotal">&pound;123.99</span></div>
							<div class="totalLine reductions">Shipping: <span class="subTotal">&pound;3.99</span></div>
							<div class="totalLine totalOrder">Total: <span class="subTotal">&pound;212.99</span></div>
						</div>
					</section>

					<section id="billingAddress" class="mainSection ">
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
					<section id="payNow" class="sectionsContainer mainSection ">
						<span class="tandcText">By clicking Pay Now you are agreeing to our <a href="#">Terms and Conditions</a></span>
						<input type="submit" class="button" id="payNowButton" value="Pay now"/>
					</section>
					
				</div>
			</div>
			
		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>