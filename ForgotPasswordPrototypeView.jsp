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
				PageName: 'forgotPassword',
				StoreText:  {
					EmailAddressInvalidError: 'Please enter a valid email address'
				}
			}
		</script>
		
	</head>

	<body id="myAccount">

		<%@include file="Header.jsp" %>

		<main>

			<section id="subHeader">

				<h1>Forgot your password?</h1>

			</section>

			<section id="forgotPasswordDetails" class="mainSection">
			
				<fieldset>
					<p>Submit your email address and we will send you everything you need to create a new one.</p>
					<input type="text" name="userEmail" id="userEmail" placeholder="Email" data-validate="true" class="required"/>
					<input type="submit" value="Request password" name="reset" id="resetPasswordButton" />
				</fieldset>

				<h2> Don't have GAME account</h2>
				<button id="registerAccount" class="secondary">Register</button>


			</section>


			 <!--EMAIL SENT
			<section id="subHeader">

				<h1>Email sent!</h1>

			</section>

			<section id="forgotPasswordDetails" class="mainSection">
			
				<fieldset>
					<p>Please check your email account and follow the link to change your password</p>
				</fieldset>

				<h2> Don't have GAME account</h2>
				<button id="registerAccount" class="secondary">Register</button>


			</section>
 -->

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>