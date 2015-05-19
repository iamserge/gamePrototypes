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

				<strong>Please select your delivery option:</strong>

				<div id="deliveryOptionButtons">
					<a href="#" id="homeDeliveryButton">Home delivery</a>
					<span class="orText">OR</span>
					<a href="#" id="collectionButton">Collection</a>
				</div>
				
			</section>
			<section id="deliveryAddresses" class="main hidden">
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

			<section class="deliveryGroup main hidden">
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

			<section class="deliveryGroup main hidden">
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

			<section id="ageConfirmation" class="main hidden">
				<h2>Please confirm your age <span>*</span></h2>
				<p>At least one product in your basket is age restricted</p>
				<select id="age" name="age">
					<option>12+</option>
					<option>18+</option>
				</select>
			</section>

			<section id="giftOptions" class="main hidden">
				<div class="sendAsGiftContainer">
					<input type="checkbox" name="sendAsGift" id="sendAsGift" />
					<label for="sendAsGift">
						Send as a gift
					</label>
				</div>
			</section>
			<section id="checkoutVoucher" class="giftPaymentMethod collapsible collapsed main">

				<h2 class="trigger">Do you have a gift voucher?</h2>
				<div class="content">
					<input type="text" name="voucherCode" id="voucherCode" placeholder="Gift voucher/ eVoucher" class="required" data-validate="true"/>
					<a href="#" class="apply">Apply</a>
				</div>
			</section>

			<section id="checkoutGiftCard" class="giftPaymentMethod collapsible collapsed main">

				<h2 class="trigger">Do you have a gift card?</h2>
				<div class="content">
					<input type="text" name="giftCardNumber" id="giftCardNumber" placeholder="Gift card number" data-validate="true" class="required"/>
					<input type="text" name="giftCardPIN" id="giftCardPIN" placeholder="Pin number" class="small required" pattern="[0-9]*" data-validate="true"/>
					<a href="#" class="apply">Apply</a>
				</div>

			</section>

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>