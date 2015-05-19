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
				PageName: 'registerConfirmation',
				StoreText:  {
					PostcodeCannotContainSpecialCharactersError: "No special characters allowed"
				}
			}
		</script>
		
	</head>

	<body id="myAccount">

		<%@include file="Header.jsp" %>

		<main>

			<section id="subHeader">

				<ul>
					<li class="current"><span>1</span>Create account</li>
					<li class="current"><span>2</span>Your details</li>
					<li class="current"><span>3</span>Delivery</li>
					<li class="current"><span>4</span>Finish</li>
				</ul>

			</section>

			<section id="registerConfirmation" class="mainSection">
				<h1>Registration complete</h1>
				<p>Thanks <span>Serge</span> for registering with us!</p>
				<p>Your login email is <span>serge@serge.com</span></p>

				<div id="newRewardCardNumber">
					<h2>Your new reward card number is</h2>
					<span class="number">583178232150</span>
				</div>

				<div id="gameAppInfo">
					<h2>Have you got the GAME app?</h2>
					<p>The Game app allows you to trade your reward points in store and access...</p>
					<div class="gameAppGraphicsPlaceholder">
						Game apps graphics placeholder
					</div>
					<p class="note">If you don't have a compatible phone, don't worry. You can still sign up to the Reward scheme. Simply add the Reward card number to your basket at the checkout</p>
				</div>
					




			</section>


		

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>
