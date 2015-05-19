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
				PageFlavour: 'collection',
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

				<strong>Please select your delivery option:</strong>

				<div id="deliveryOptionButtons">
					<a href="#" id="homeDeliveryButton">Home delivery</a>
					<span class="orText">OR</span>
					<a href="#" id="collectionButton">Collection</a>
				</div>
				
			</section>
			<div id="deliverySectionsContainer" class="sectionsContainer collapsible">
				<h2 class="trigger">Delivery details</h2>
				<div class="content">
					<div id="collectionData">
					
						<div id="collectionInputContainer" data-bind="slideVisible: typeof UserLocation().lat == 'undefined'">
							<h2>Please submit postcode or town for collection:</h2>
							<input type="text" name="collectionPostcodeTown" data-validate="true" placeholder="Postcode or Town" class="required" data-bind="value: Location"/>
							<button data-bind="click: FindCollectionPoint">Find nearest collection point</button>
							<span class="orText">or</span>
							<button data-bind="click: ShareLocation" class="shareLocation">Share locations</button>

						</div>
						<div id="userLocationContainer" data-bind="slideVisible: typeof UserLocation().lat != 'undefined'">
							<a href="#" data-bind="click: NotMyLocation"><span data-bind="text: Location()"></span> Not my location</a>
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

					
				</div>
			</div>
			
			<div id="paymentDetailsSectionsContainer" class="sectionsContainer collapsible collapsed">
				<h2 class="trigger">Payment details</h2>
				<div class="content">
				<section id="rewardPoints" class="main hidden">
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
				<section id="checkoutVoucher" class="giftPaymentMethod collapsible collapsed main hidden">

					<h2 class="trigger">Do you have a gift voucher?</h2>
					<div class="content">
						<input type="text" name="voucherCode" id="voucherCode" placeholder="Gift voucher/ eVoucher" class="required" data-validate="true"/>
						<a href="#" class="apply">Apply</a>
					</div>
				</section>

				<section id="checkoutGiftCard" class="giftPaymentMethod collapsible collapsed main hidden">

					<h2 class="trigger">Do you have a gift card?</h2>
					<div class="content">
						<input type="text" name="giftCardNumber" id="giftCardNumber" placeholder="Gift card number" data-validate="true" class="required"/>
						<input type="text" name="giftCardPIN" id="giftCardPIN" placeholder="Pin number" class="small required" pattern="[0-9]*" data-validate="true"/>
						<a href="#" class="apply">Apply</a>
					</div>

				</section>
				
					<section id="paymentCards" class="main hidden">
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
	
					<section id="orderSummary" class="main hidden">
						<div class="basketSummary">
							<div class="totalLine reductions">Order Subtotal: <span class="subTotal">&pound;123.99</span></div>
							<div class="totalLine reductions">Shipping: <span class="subTotal">&pound;3.99</span></div>
							<div class="totalLine totalOrder">Total: <span class="subTotal">&pound;212.99</span></div>
						</div>
					</section>

					<section id="billingAddress" class="main hidden">
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
					<section id="payNow" class="sectionsContainer main hidden">
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