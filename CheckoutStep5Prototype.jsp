<!DOCTYPE html>
<html>

	<head>

		<title>GAME Mobile - Checkout Step 5 Prototype</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'checkoutStep5',
				StoreText:  {
					PostcodeCannotContainSpecialCharactersError: "No special characters allowed",	
					EmailAddressInvalidError: 'Please enter a valid email address',
					PasswordInvalidError: 'Passwords must be at least 6 characters and include digits and letters.'
				}
			}
		</script>
		
	</head>

	<body id="checkout">

		<%@include file="Header.jsp" %>

		<main>

			<%@include file="CheckoutSubHeader.jsp" %>
			<%@include file="BasketSummary.jsp" %>
			<form id="yourDetailsForm">
				<section id="yourDetailsEntry">
					
						<h2>Your details:</h2>
						<select id="nameTitle" name="nameTitle" class="required" data-validate="true" data-validationname="Title">
							<option value="">Title</option>
							<option value="mr">Mr</option>
							<option value="mrs">Mrs</option>
						</select>
						<input placeholder="Your first name" type="text" id="firstName" name="firstName" data-validate="true" class="required"/>	
						<input placeholder="Your surname" type="text" id="surname" name="surname" data-validate="true" class="required"/>
						<input placeholder="Your email address" type="text" id="emailAddress" name="emailAddress"data-validate="true" class="required"/>
						<input placeholder="Your telephone or mobile number" type="text" id="telephoneNumber" name="telephoneNumber" data-validate="true" class="required"/>
				</section>

				<section id="enterPassword">
					<h2>Create an account and earn <strong>&pound;1.40</strong> in Reward points</h2>
					<input type="password" name="password" id="password" placeholder="Enter a password" data-validate="true"/>
					
				</section>

				<section id="existingRewardCardUsers">

					<h2>Existing Reward Card users:</h2>
					<p> Enter card number to earn <strong>500 points</strong> <span>(&pound;0.65)</span></p>
					<input placeholder="Your card number" type="text" id="rewardCardNumber" name="rewardCardNumber" />
					<h2>Haven't got a Reward Car account?</h2>
					<p id="noCardNumberNote">
						We will create one for you once you enter a password and complete your purchase.
					</p>
				</section>

				<section id="giftOptions">
					<div class="sendAsGiftContainer">
						<input type="checkbox" name="sendAsGift" id="sendAsGift" />
						<label for="sendAsGift">
							Send as a gift
						</label>
					</div>
				</section>

				<section id="ageConfirmAndContinue">
					<p>
						<span class="pegi pegi18"></span>
						At least one product in your basket is age restricted.  Please enter your age to proceed.
					</p>
					<select class="required" data-validationname="Age" data-validate="true" name="age">
						<option value="">Please select your age</option>
						<option value="13">13+</option>
						<option value="18">18+</option>
					</select>
					<input type="submit" name="continueToPayment" id="continueToPayment" value="Continue to payment" />
				</section>
			</form>

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>