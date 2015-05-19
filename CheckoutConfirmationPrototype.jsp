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
				PageName: 'checkoutConfirmationDetails',
				StoreText:  {
				}
			}
		</script>
		
	</head>

	<body id="checkout" class="confirmation">

		<%@include file="Header.jsp" %>

		<main>

			<%@include file="CheckoutSubHeader.jsp" %>
			<section id="confirmationText" class="mainSection">
				<h2>Confirmation:</h2>
				<p><strong>Thanks, your order is complete.</strong></p>
				<p>We have also sent this confirmation to your email. Your order number is <span class="purple">1501123123</span></p>
				<p>Your order will be sent to: <strong>64 Clarendon Road, Watford, WD17 1DA</strong></p>
			</section>
			<section id="confirmationItems" class="mainSection">
				<h2>Items:</h2>
				<div class="items">

					<div class="item">
						<img src="http://localhost.game.co.uk/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/sampleimages/packShot.png" alt="" />
						<div class="itemInfo">
							<h3>Call of Duty: Advanced Warfare (Xbox One)</h3>
							<span class="soldAndFullfiled">
								Sold and fulfilled by <span class="gameLogo small">GAME</span>
							</span>
							<span class="priceInfo">
								<strong>NEW</strong><span class="price">&pound;29.99</span>
								<strong>QTY</strong> (1)
							</span>
							<span class="delivery">
								<strong>Delivery:</strong>
								<span>FREE UK Delivery (3-5 working days)</span>
							</span>
						</div>
					</div>

					<div class="item">
						<img src="http://localhost.game.co.uk/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/sampleimages/packShot.png" alt="" />
						<div class="itemInfo">
							<h3>Watchdogs (Xbox One)</h3>
							<span class="soldAndFullfiled">
								Sold and fulfilled by <span class="gameLogo small">GAME</span>
							</span>
							<span class="priceInfo">
								<strong>NEW</strong><span class="price">&pound;29.99</span>
								<strong>QTY</strong> (1)
							</span>
							<span class="delivery">
								<strong>Delivery:</strong>
								<span>&pound;2.00 Standard UK Delivery<br/>(3-5 Working Days)</span>
							</span>
							<a href="#" class="sellerDetailsInfoLink">Seller delivery details</a>
						</div>
					</div>
				</div>
			</section>

			<section id="confirmationTotals">
				<div class="row">
					<span class="key">Order Subtotal:</span>
					<span class="value">&pound;59.99</span>
				</div>
				<div class="row">
					<span class="key">Delivery Charges:</span>
					<span class="value">&pound;2.00</span>
				</div>
				<div class="row total">
					<span class="key">Order Total: <span>(2 items)</span></span>
					<span class="value">&pound;61.99</span>
				</div>
			</section>

			<section id="confirmationBeforeLeave" class="mainSection">
				<h2> Just before you go...</h2>
				<div>
					<input type="checkbox" name="savePaymentDetails" id="savePaymentDetails" />
					<label for="savePaymentDetails">
						Would you like to save your payment details to save you from retying them next time?
					</label>
				</div>
				<div>
					<input type="checkbox" name="sendEmail" id="sendEmail" />
					<label for="sendEmail">
						Would you like to receive our email newsletter, details or special promotions and other communications?
					</label>
				</div>
				<div>
					<span>
						We treat your privacy very seriously, your data is not shared or sold to third parties. <a href="#">Read our privacy policy</a>
					</span>
				</div>
			</section>

			<section id="confirmationCTAs" class="mainSection">
				<a href="#">Continue shopping</a>
			</section>
		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>