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
				PageName: 'addNewAddress',
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
				<h1>Add new address</h1>
			</section>
			<section id="addNewAddress" class="enterAddressSection mainSection">
			
				<div id="postcodeFields">
					<div id="disabledCountrySelect">United Kingdom</div>
					<a href="#"  id="internationalDeliveryLink">International delivery?</a>
					<input type="text" placeholder="House name or number" id="houseNameOrNumber"  data-bind="value: HouseNameOrNumber"/>
					<button id="findAddressButton" data-bind="click: GetAddresses">Find address</button>

					<input type="text" placeholder="Postcode" name="postCode" id="postCode" data-validate="true" class="required" data-bind="value: PostCode"/>
				</div>
				<div data-bind="slideVisible: AddressResultsList().length == TotalAddressesCount()"  id="addressResultsList">	
					
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
				<a href="#" id="manualAddressLink" data-bind="click: function(){ ExpandHiddenFields(true)}, visible: ExpandHiddenFields() == false">Tap here to enter address manually</a>
				
				<form id="addressDetails" class="current" method="post" action="UserRegistrationAdd">	
					<%--<input type="hidden" name="myAcctMain" value="1" />	
					<input type="hidden" name="new" value="Y" />
					<input type="hidden" name="storeId" value="<c:out value="${WCParam.storeId}"  />" />
					<input type="hidden" name="catalogId" value="<c:out value="${WCParam.catalogId}"  />" />
					<c:if test="${empty WCParam.forwardURL}">
						<input type="hidden" name="URL" value="mGameRegistrationSuccessView" />
					</c:if>
					<c:if test="${not empty WCParam.forwardURL }">
						<input type="hidden" name="URL" value="${WCParam.forwardURL}" />
					</c:if>
					<input type="hidden" name="addressType" value="B" />
					<input type="hidden" name="errorViewName" value="MobileUserRegistrationAddForm" />
					<input type="hidden" name="registerPage" value="registrationPage2" />
					<input type="hidden" name="email1" value="<c:out value="${email1}"/>" />
					<input type="hidden" name="logonId" value="<c:out value="${email1}"/>" />
					<input type="hidden" name="logonPassword" value="<c:out value="${logonPassword[0]}"/>"/>	--%>
					<fieldset id="visibleFields" data-bind="slideVisible: ExpandHiddenFields" >
						<h3>Please confirm the address</h3>
						<input type="text" name="address1" placeholder="Address Line 1" data-bind="value: SelectedAddress().streetAddress1" data-validate="true" class="required"/>
						<input type="text" name="address2" placeholder="Address Line 2" />
						<input type="text" name="town" data-bind="value: SelectedAddress().city" placeholder="Town" data-validate="true" class="required"/>
						<input type="text" name="county" placeholder="County" data-validate="true" class="required"/>
						<input type="text" name="postCode"  data-bind="value: SelectedAddress().postcode" placeholder="Postcode" data-validate="true" class="required"/>
					</fieldset><%--
					<input type="hidden" name="country" value="GB" />
					<input type="hidden" name="rewardNumber" value="<c:out value="${rewardNumber}"/>" />
					<input type="hidden" name="displayName" value="<c:out value="${displayName}"/>" />
					<input type="hidden" name="firstName" value="<c:out value="${firstName}"/>" />
					<input type="hidden" name="lastName" value="<c:out value="${lastName}"/>" />													
					<c:if test="${not empty WCParam.guestOrderId}">
						<input type="hidden" name="guestOrderId" value="<c:out value="${guestOrderId}"  />" />
						<input type="hidden" name="guestAddressId" value="<c:out value="${guestAddressId}"  />" />
						<input type="hidden" name="anonUserId" value="<c:out value="${anonUserId}"  />" />
						<input type="hidden" name="personTitle" value="<c:out value="${personTitle}"  />" />
						<input type="hidden" name="phone1" value="<c:out value="${phone1}"  />" />
						<input type="hidden" name="phone2" value="<c:out value="${phone2}"  />" />
					</c:if>
					<input type="hidden" name="customerId" value="${customerId[0]}" />
					<input type="hidden" name="rewardNumber" value="${rewardNumber}" />
					<input type="hidden" name="customerUserId" value="${customerUserId[0]}" />
					<input type="hidden" name="foundDetails" value="Y" />
					<input type="hidden" name="new" value="N" />	
					<input type="hidden" name="nextPage" value="step4" />
			
						
			    	<c:forEach var="par" items="${paramSource}">    	
			    		<c:if test="${fn:startsWith(par.key, 'tag')}">
								<input type="hidden" name="${par.key}" value="${par.value[0]}" />
			    		</c:if>
					</c:forEach>
					--%>
					<input type="submit" name="submitNext" value="Create account" id="createAccount" data-bind="click: SubmitTheMainForm, css: {disabled:  typeof SelectedAddress().postcode == 'undefined'}" /> <%--
				</form>
				<form id="internationalAddressForm" class="current" method="post" action="MobileUserRegistrationAddForm#MobileUserRegistrationPart4">	
					<input type="hidden" name="myAcctMain" value="1" />	
					<input type="hidden" name="new" value="Y" />
					<input type="hidden" name="storeId" value="<c:out value="${WCParam.storeId}"  />" />
					<input type="hidden" name="catalogId" value="<c:out value="${WCParam.catalogId}"  />" />
					<c:if test="${empty WCParam.forwardURL}">
						<input type="hidden" name="URL" value="mGameRegistrationSuccessView" />
					</c:if>
					<c:if test="${not empty WCParam.forwardURL }">
						<input type="hidden" name="URL" value="${WCParam.forwardURL}" />
					</c:if>
					<input type="hidden" name="addressType" value="B" />
					<input type="hidden" name="errorViewName" value="MobileUserRegistrationAddForm" />
					<input type="hidden" name="registerPage" value="registrationPage2" />
					<input type="hidden" name="email1" value="<c:out value="${email1}"/>" />
					<input type="hidden" name="logonId" value="<c:out value="${email1}"/>" />
					<input type="hidden" name="logonPassword" value="<c:out value="${logonPassword[0]}"/>"/>			
					<input type="hidden" name="address1" value="<c:out value="${address1}"/>" />
					<input type="hidden" name="town" value="<c:out value="${town}"/>" />
					<input type="hidden" name="county" value="<c:out value="${county}"/>" />
					<input type="hidden" name="country" value="<c:out value="${country}"/>" />
					<input type="hidden" name="postCode" value="<c:out value="${postCode}"/>" />
					<input type="hidden" name="rewardNumber" value="<c:out value="${rewardNumber}"/>" />
					<input type="hidden" name="displayName" value="<c:out value="${displayName}"/>" />
					<input type="hidden" name="firstName" value="<c:out value="${firstName}"/>" />
					<input type="hidden" name="lastName" value="<c:out value="${lastName}"/>" />													
					<c:if test="${not empty WCParam.guestOrderId}">
						<input type="hidden" name="guestOrderId" value="<c:out value="${guestOrderId}"  />" />
						<input type="hidden" name="guestAddressId" value="<c:out value="${guestAddressId}"  />" />
						<input type="hidden" name="anonUserId" value="<c:out value="${anonUserId}"  />" />
						<input type="hidden" name="personTitle" value="<c:out value="${personTitle}"  />" />
						<input type="hidden" name="phone1" value="<c:out value="${phone1}"  />" />
						<input type="hidden" name="phone2" value="<c:out value="${phone2}"  />" />
					</c:if>
					<input type="hidden" name="customerId" value="${customerId[0]}" />
					<input type="hidden" name="rewardNumber" value="${rewardNumber}" />
					<input type="hidden" name="customerUserId" value="${customerUserId[0]}" />
					<input type="hidden" name="foundDetails" value="Y" />
					<input type="hidden" name="new" value="N" />	
					<input type="hidden" name="nextPage" value="step4" />
					
						
			    	<c:forEach var="par" items="${paramSource}">    	
			    		<c:if test="${fn:startsWith(par.key, 'tag')}">
								<input type="hidden" name="${par.key}" value="${par.value[0]}" />
			    		</c:if>
					</c:forEach>
					--%>
				</form>		
			</section>		

		</main>

		<%@include file="CheckoutFooter.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>