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
				PageName: 'registerStep2',
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
					<li class="current"><span>2</span>Your details</li>
					<li><span>3</span>Delivery</li>
					<li><span>4</span>Finish</li>
				</ul>

			</section>

			<section id="registerStep2Details" class="mainSection">
				<h1>Personal details</h1>
			

				<form id="personalDetails">
					
					<input type="text" name="displayName" id="displayName" placeholder="Display name" data-validate="true" class="required"/>
					<span class="inputInfo">This will appear when you engage with the community</span>
					<input type="text" name="firstName" id="firstName" placeholder="First Name" data-validate="true" class="required"/>
					<input type="text" name="lastName" id="lastName" placeholder="Last Name" data-validate="true" class="required"/>
					<input type="text" name="postCode" id="postCode" placeholder="Postcode" data-validate="true" class="required"/>
					<h2>Would you like us to store your Gamer Tags</h2>
					<div class="doubleButtonsContainer">
						<a href="#">Yes</a>
						<a href="#" class="active">No</a>
					</div>

					<fieldset id="gamerTags">
						<input type="text" name="xBoxLive" id="xBoxLive" placeholder="xBox Live" />
						<input type="text" name="PSNID" id="PSNID" placeholder="PSN ID" />
						<input type="text" name="nintendo" id="nintendo" placeholder="Nintendo" />
						<input type="text" name="steam" id="steam" placeholder="Steam" />
					</fieldset>

					<input type="submit" value="Continue" name="continueButton" id="continueButton" />
				
				</form>




			</section>


		

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>
