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
				PageName: 'sellerDetails',
				StoreText:  {
									}
			}
		</script>
		
	</head>

	<body id="sellerDetails">

		<%@include file="Header.jsp" %>

		<main>

			<section id="subHeader">
				<a href='#' class="button back">Back</a>

			</section>

			<section id="sellerDetailsInfo" class="mainSection collapsible">
				<h2 class="trigger">Seller details</h2>
				<div class="content">
					<div class="header">
						<img src="http://img.game.co.uk/images/mkt/sellers/73x73/2050.png" alt="" />
						<h2>Zoverstock</h2>
						<span class="rating">
							<span class="ratingStars rating45"></span>
							<span class="amountOfReviews">(40)</span>
						</span>
					</div>
					<div class="about">
						<h3>About Zoverstock</h3>
						<p>Save loads of money on great entertainment with our massive selection of replay Games - all at fantastic prices!We’re not just all about low prices, though: great service is equally important to us. Before you place an order, please make sure you've provided us with the correct delivery address. We can't make amendments to your delivery address once your order has been placed, so save yourself some hassle and double-check before you order! We try to include as much information as possible on all of our listings. Unfortunately, we can’t respond to individual product queries (even though we’d love to). We stock over 10,000 Games so it’s just not possible for us to respond to every question we receive.In the unlikely event you do experience issues with your order, please contact us at Game@zoverstocks.co.uk. We’ll make every effort to resolve any problems quickly and to your satisfaction.</p>
					</div>
				</div>
			</section>

			<section id="sellerFeedback" class="collapsible collapsed mainSection">
				<h2 class="trigger">Recent feedback<span class="ratingStars rating45"></span><span class="amountOfReviews">(40)</span></h2>
				<div class="content">
					<div class="reviewsPagination">
						<a href="#" class="prev unactive">Prev</a>
						<div class="info">
							1 -  5 out of 10
						</div>
						<a href="#" class="next">Next</a>
					</div>
					<div class="reviews">
						<div class="review">
							<h3>Bob <span class="ratingStars rating45"></span></h3>
							<p>Item was correct however box was quite damaged and the disc was loose in the case because the holder part of the case was missing parts.I realised it was preowned but thought they would at least care about the quality of the case, the disc works fine but I shall probably have to buy a new case now for it so probably will not order from these again.</p>
							<div class="ticks">
								<span class="true">Shipping method as expected</span>
								<span class="true">Would you recommend this seller</span>
								<span class="true">Delivery deadline met</span>
								<span class="false">Product correctly packaged</span>
								<span class="false">Product as described</span>
							</div>
						</div>

						<div class="review">
							<h3>Navin <span class="ratingStars rating45"></span></h3>

							<p>Item was correct however box was quite damaged and the disc was loose in the case because the holder part of the case was missing parts.I realised it was preowned but thought they would at least care about the quality of the case, the disc works fine but I shall probably have to buy a new case now for it so probably will not order from these again.</p>
							<div class="ticks">
								<span class="true">Shipping method as expected</span>
								<span class="true">Would you recommend this seller</span>
								<span class="true">Delivery deadline met</span>
								<span class="false">Product correctly packaged</span>
								<span class="false">Product as described</span>
							</div>
						</div>
					</div>
					<div class="reviewsPagination">
						<a href="#" class="prev unactive">Prev</a>
						<div class="info">
							1 -  5 out of 10
						</div>
						<a href="#" class="next">Next</a>
					</div>
				</div>
			</section>

			<section id="sellerDeliveryInfo" class="collapsible collapsed mainSection">
				<h2 class="trigger">Delivery info</h2>
				<div class="content">
					<table>
						<tr>
							<th>Region</th>
							<th>Service level</th>
						</tr>
						<tr>
							<td>UNITED KINGDOM</td>
							<td>FREE STANDARD DELIVERY</td>
						</tr>
						<tr>
							<td>UNITED KINGDOM</td>
							<td>FREE STANDARD DELIVERY</td>
						</tr>
						<tr>
							<td>UNITED KINGDOM</td>
							<td>FREE STANDARD DELIVERY</td>
						</tr>
					</table>
				</div>
			</section>

			<section id="returnsInfo" class="collapsible collapsed mainSection">
				<h2 class="trigger">Returns info</h2>
				<div class="content">
					<p>We will happily accept returns within 14 days of receipt for a refund as long as they are in a saleable condition.To return an item, you need to email us at with your full name and order number to Game@zoverstocks.co.uk. We will then email you back with a returns authorisation number and return address.</p>
				</div>
			</section>

			<a href="#" class="button">All products by this seller</a>

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>