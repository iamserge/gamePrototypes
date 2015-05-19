<!DOCTYPE html>
<html>

	<head>

		<title>GAME Mobile - Basket Prototype</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'basket',
				StoreText:  {
				}
			}
		</script>
		
	</head>

	<body id="basket">

		<%@include file="Header.jsp" %>

		<main>

			<section id="subHeader">

				<h1>My Basket</h1>

				<div class="basketSummary">
					<div class="totalLine">
						Order Subtotal: <span class="itemsQty">(2 items)</span>
						<span class="subTotal">123.99</span>
					</div>
					
					<a class="button">Secure Checkout</a>
				</div>

			</section>
			
			<section id="productsList">

				<div class="product">

					<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/packshotLarge.png" alt=""/>

					<div class="details">

						<h2>Call of Duty: Advanced Warfare (Xbox One)</h2>

						<div class="price">&pound;39.99</div>

						<div class="fulfilment">
							<strong>NEW</strong> Sold and fulfilled by <span class="gameLogo small"></span>
						</div>

						<div class="options">
							<select>
								<option> QTY 1</option>
								<option> QTY 2</option>
								<option> QTY 3</option>
								<option> QTY 4</option>
							</select>
							<button class="saveForLater">Save for later</button>
							<a href="#">Remove</a>
						</div>

					</div>
				</div>
				<div class="product">

					<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/packshotLarge.png" alt=""/>

					<div class="details">

						<h2>Call of Duty: Advanced Warfare (Xbox One)</h2>

						<div class="price">&pound;39.99</div>

						<div class="fulfilment">
							<strong>NEW</strong> Sold and fulfilled by <span class="gameLogo small"></span>
						</div>

						<div class="options">
							<select>
								<option> QTY 1</option>
								<option> QTY 2</option>
								<option> QTY 3</option>
								<option> QTY 4</option>
							</select>
							<button class="saveForLater">Save for later</button>
							<a href="#">Remove</a>
						</div>

					</div>
				</div>
				<div class="product">

					<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/packshotLarge.png" alt=""/>

					<div class="details">

						<h2>Call of Duty: Advanced Warfare (Xbox One)</h2>

						<div class="price">&pound;39.99</div>

						<div class="fulfilment">
							<strong>NEW</strong> Sold and fulfilled by <span class="gameLogo small"></span>
						</div>

						<div class="options">
							<select>
								<option> QTY 1</option>
								<option> QTY 2</option>
								<option> QTY 3</option>
								<option> QTY 4</option>
							</select>
							<button class="saveForLater">Save for later</button>
							<a href="#">Remove</a>
						</div>

					</div>
				</div>

			</section>

			<section id="deliveryOptions">

				<h2>Items available for:</h2>

				<ul >
					<li class="homeDelivery">
						<em>Home delivery</em>
						<span>12.99</span>
					</li>
					<li class="homeDeliveryPlus">
						<em>Home delivery Plus</em>
						<span>12.99</span>
					</li>
				</ul>

			</section>

			<section id="promoCodeEntry">

				<fieldset>
					<legend>Enter a promotional code if you have one:</legend>
					<input type="text" placeholder="Promotional code"/>
					<button>Apply</button>
				</fieldset>
				
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