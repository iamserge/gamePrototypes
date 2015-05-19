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
				PageName: 'registerStep3',
				StoreText:  {
					PostcodeCannotContainSpecialCharactersError: "No special characters allowed",
					NoResultsFoundMessage: "No results found. Please retype postcode or enter address manualy.",
					MultipleResultsFoundMessage: "A lot of results found, please specify house number."
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

			<section id="registerStep3Details" class="mainSection">
				<h1>Address</h1>
				<div id="registerHomeAddress">

					<div id="disabledCountrySelect">United Kingdom</div>

					<a href="#"  id="internationalDeliveryLink">International delivery?</a>
					<input type="text" placeholder="House name or number" id="houseNameOrNumber"  data-bind="value: HouseNameOrNumber"/>
					<button id="findAddressButton" data-bind="click: GetAddresses">Find address</button>

					<input type="text" placeholder="Postcode" name="postCode" id="postCode" data-validate="true" class="required" data-bind="value: PostCode"/>
					<div data-bind="slideVisible: AddressResultsList().length > 0"  id="addressResultsList">

						
						<div id="addressResultsListContainer">
							<!-- ko if: ResultsListsMessage().length == 0 -->
								<p>Please select an address from the list below, click continue when done or try searching again</p>
								<ul data-bind="foreach: AddressResultsList">
									<li data-bind="css: {selected: $parent.AddressResultsList().length == 1 }, text: shortConcatAddress, click: $parent.SelectAddress"></li>
								</ul>
							<!-- /ko -->
							<!-- ko if: ResultsListsMessage().length != 0 -->
								<p class="message" data-bind="text: ResultsListsMessage"></p>
							<!--/ko -->
						</div>
						

					</div>
					<a href="#" id="manualAddressLink">Tap here to enter address manually</a>
					<button class="continueButton" >Continue</button>
				</div>
					




			</section>


		

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>
