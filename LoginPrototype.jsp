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
				PageName: 'login',
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

				<h1>Log in</h1>

			</section>

			<section id="loginDetails" class="mainSection">
			
				<fieldset>
					<input type="text" name="userEmail" id="userEmail" placeholder="Email" data-validate="true" class="required"/>
					<input type="password" name="password" id="password" placeholder="Password" data-validate="true" class="required"/>
					<a href="#" id="forgotYourPasswordLink">Forgot your password?</a>
					<input type="submit" value="Login" name="login" id="loginButton" />
				</fieldset>

				<h2> Don't have GAME account</h2>
				<button id="registerAccount" class="secondary">Register</button>


			</section>

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>