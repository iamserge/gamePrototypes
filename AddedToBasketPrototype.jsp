
<!DOCTYPE html>
<html>
	<head>

		<title>GAME Mobile - Added to Basket</title>

		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link href='https://img.game.co.uk/fonts/fontGameNav2014.02.css' rel='stylesheet' type='text/css' />
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css" />

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'addedToBasket',
				StoreText:  {
				}
			}
		</script>
		
	</head>

	<body id="addedToBasket">

		<%@include file="Header.jsp" %>
		
		<ul id="searchResults">
			<li class="xbox"><a href="#">Halo: The Master Chief Collection</a></li>
			<li class="ps4"><a href="#">Halo: The Master Chief Collection</a></li>
			<li class="xbox"><a href="#">Halo: The Master Chief Collection of the awesome two line</a></li>
			<li class="ps4"><a href="#">Halo: The Master Chief Collection</a></li>
			<li class="xbox"><a href="#">Halo: The Master Chief Collection</a></li>	
		</ul>
		

		<main>
			
			
				<h1>You just added an item to your basket</h1>
				<section id="addedToBasketItem">
					<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/sampleimages/packShot.png" alt="" />
					<div class="itemInfo">
						<h3>Call of Duty: Advanced Warfare</h3>
						<span class="icon console xboxOne"></span>
						<span class="price">&pound;35.00</span>
					</div>
				</section>
				

				<section id="addedToBasketActions">
					<span class="orderSubtotal">
						Order sub-total: <span class="amount">&pound;39.88</span> 
						<span class="itemsAmount">2 items</span>
					</span>
					<div class="buttons">
						<a href="#" class="button back">Back to "Xbox Call of d..."</a>
						<a href="#" class="button checkout">Secure checkout</a>
						
					</div>
				</section>

				<section id="addedToBasketExtras" class="collapsible collapsed">
					<h2 class="greyTitle trigger">Extras</h2>
					<div class="content">

						<div class="addOn">
							<a href="#" class="packShot">
								<img src="http://localhost.game.co.uk/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/sampleimages/packShot.png" alt=""/>
							</a>
							<h3><a href="#">Call of Duty season pass</a></h3>
							<div class="icons">
								<span class="icon download"></span>
								<span class="icon console xboxOne"></span>
								<span class="icon pegiRating pegi18"></span>
								<span class="price">&pound;29.99</span>
							</div>
							<div class="buttons">
								<a href="#" class="button addToWishlist">ADD TO WISHLIST</a>
								<a href="#" class="button addToBasket">ADD TO BASKET</a>
							</div>
						</div>

						<div class="discCare">
							<h3>Disc care<span class="price">&pound;1.00</span></h3>
							<p>Disc care will cover your games against future damage. Whether it's caused by an accident or overplay we will try to repair your disc and get you back in the game.</p>
							<div class="steps">
								<div class="step step1">
									<span>Step 1:</span>
									Add disc care to your basket, along with other items.
								</div>
								<div class="step step2">
									<span>Step 2:</span>
									Take your damaged disk, along with a print of the disc care proof of purchase to a GAME store
								</div>
							</div>
							<a href="#" class="button addToBasket">Add to basket</a>
						</div>

						<div class="warranties">
							<h3>Warranties</h3>
							<div class="warranty">
								<h4>Disc warranty</h4>
								<select class="#">
									<option value="1year">1 year - &pound;10.99</option>
									<option value="2year">2 year - &pound;20.99</option>
								</select>
								<a href="#" class="button addToBasket">Add to basket</a>
							</div>
						</div>

					</div>
				</section>
		

		</main>

		<%@include file="Footer.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

			

	<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>


	</body>
</html>