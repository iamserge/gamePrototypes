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
				PageName: 'registerStep1',
				StoreText:  {
					EmailAddressInvalidError: 'Please enter a valid email address',
					RewardCardNumberInvalidError: 'Reward card number should be 13 characters long and contain only digits'
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
					<li><span>2</span>Your details</li>
					<li><span>3</span>Delivery</li>
					<li><span>4</span>Finish</li>
				</ul>

			</section>

			<section id="registerStep1Details" class="mainSection">
				<h1>Create account</h1>
				<p>Are you an existing Reward Card Holder?</p>

				<div class="doubleButtonsContainer">
					<a href="#">Yes</a>
					<a href="#" class="active">No</a>
				</div>

				<form id="withRewardCard">
					<h2>Reward card details</h2>
					<div class="rewardCardGraphicsPlaceholder">Reward card graphics placeholder</div>
					<p>If so, just enter your Reward Card Number, Last Name and Postcode below and we will retrieve your details for you.</p>
					<input type="text" name="rewardCardNumber" id="rewardCardNumber" placeholder="Reward card number" data-validate="true" class="required"/>
					<input type="text" name="lastName" id="lastName" placeholder="Last Name" data-validate="true" class="required"/>
					<input type="text" name="postCode" id="postCode" placeholder="Postcode" data-validate="true" class="required"/>
					<input type="submit" value="Find My Details" name="findMyDetails" id="findMyDetailsButton" />
				
				</form>


				<form id="noRewardCard" class="current">
					
					<h2>Email and password</h2>
					<input type="text" name="userEmail" id="userEmail" placeholder="Email" data-validate="true" class="required"/>
					<input type="password" name="password" id="password" placeholder="Password" data-validate="true" class="required"/>
					<input type="submit" value="Continue" name="continue" id="continueButton" />
				
				</form>


			</section>


			<section id="gameAccountBenefitsContainer" class="mainSection">
				<h2>Having a GAME account allows you to:</h2>
				<ul>
					<li>Earn Reward points to spend online/in-store.</li>
					<li>Access to our Express Checkout.</li>
					<li>Sign-up for exclusive news and offers.</li>
					<li>Get the latest news & reviews</li>
					<li>Set up stock alerts via email</li>
					<li>Create a wishlist</li>
				</ul>

			</section>

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>
