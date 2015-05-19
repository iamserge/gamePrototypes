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
				PageName: 'registerStep4',
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
					<li><span>4</span>Finish</li>
				</ul>

			</section>

			<section id="registerStep4Details" class="mainSection">
				<h1>Address</h1>
				<div id="manualAddressDelivery">
					<select name="country" id="country">
						<option>UK</option>
						<option>USA</option>
						<option>Latvia</option>
					</select>
					<input type="text" name="addressLine1" id="addressLine1" placeholder="Address Line 1" data-validate="true" class="required"/>
					<input type="text" name="addressLine2" id="addressLine2" placeholder="Address Line 2" />
					<input type="text" name="town" id="town" placeholder="Town" data-validate="true" class="required"/>
					<input type="text" name="county" id="county" placeholder="County" data-validate="true" class="required"/>
					<input type="text" name="postCode" id="postCode" placeholder="Post code" data-validate="true" class="required"/>
					<input type="submit" value="Continue" name="continueButton" id="continueButton" />
				</div>
					




			</section>


		

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>
