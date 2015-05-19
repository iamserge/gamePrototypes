<!DOCTYPE html>
<html>

	<head>

		<title>GAME Mobile - Checkout Step 2 Prototype</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'addNewCard',
				StoreText:  {
					PostcodeCannotContainSpecialCharactersError: "No special characters allowed"
				}
			}
		</script>
		
	</head>

	<body id="checkout">

		<%@include file="Header.jsp" %>

		<main>

			<section id="subHeader">
				<h1>Add new card</h1>
			</section>
			<section id="paymentCardDetails" class="addNewCard mainSection">
				<div class="cardTypeContainer">
					<select id="cardType" name="cardType">
						<option value="visa">VISA</option>
						<option value="master">Master</option>
						<option value="maestro">Maestro</option>
					</select>
					<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/cardTypes.png" alt="" class="cardTypes"/>
				</div>

				<input type="text" class="required" name="nameOnCard" id="nameOnCard" placeholder="Name on card" class="required" data-validate="true"/>
				<input type="text" class="required" name="cardNumber" id="cardNumber" placeholder="Card number" pattern="[0-9]*" class="required" data-validate="true"/>
				<div class="expiryDateContainer">
					<label>Expiry date</label>
					<div class="expiryMonthContainer">
						<select id="expiryMonth" name="expiryMonth" class="small required" data-validate="true" data-validationName="Expiry month" >
							<option value="-1">Month</option>
							<option value="1">01</option>
							<option value="2">02</option>
							<option value="3">03</option>
							<option value="4">04</option>
							<option value="5">05</option>
							<option value="6">06</option>
							<option value="7">07</option>
							<option value="8">08</option>
							<option value="9">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
					</div>

					<div class="expiryYearContainer">
						<select id="expiryYear" name="expiryYear" class="small required" data-validate="true" data-validationName="Expiry year">
							<option value="-1">Year</option>
							<option value="2015">2015</option>
							<option value="2016">2016</option>
							<option value="2017">2017</option>
							<option value="2018">2018</option>
							<option value="2019">2019</option>
							<option value="2020">2020</option>

						</select>
					</div>
				</div>
				<input type="text" class="required small" name="securityNumber" pattern="[0-9]*"  placeholder="Security number" data-validate="true"/>
				<input type="submit" class="button" id="addNewCardButton" value="Add new card"/>
			</section>		

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>