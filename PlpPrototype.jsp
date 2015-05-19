<!DOCTYPE html>
<html>

	<head>

		<title>GAME Mobile - PLP Prototype</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='https://img.game.co.uk/fonts/fontGameNav2014.02.css' rel='stylesheet' type='text/css' />
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>

		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'plp',
				StoreText:  {
					FreeDeliveryText: 'Free delivery'
				},
				XCOMREG: {
					requestsAllowedBeforeNewPage: 5
				},
				Filters: {
					Applied: [
						
					],
					Available: [
						{
							Type: "Genre",
							Filters: [
								{	
									Title: "Action adventure",
									Count: "12"
								},
								{	
									Title: "Beat them up",
									Count: "12"
								},
								{	
									Title: "Racing",
									Count: "15"
								},
								{	
									Title: "Shooter",
									Count: "7"
								},
								{	
									Title: "Sport",
									Count: "8"
								},
								{	
									Title: "Quest",
									Count: "4"
								}
								
							]
						},
						{
							Type: "Condition",
							Filters: [
								{	
									Title: "New",
									Count: "12"
								},
								{	
									Title: "Preowned",
									Count: "10"
								},
								{	
									Title: "Download",
									Count: "12"
								}
								
							]
						},
						{
							Type: "Age rating",
							Filters: [
								{
									Title: "18+",
									Count: "12"
								},
								{
									Title: "16+",
									Count: "11"
								},
								{
									Title: "12+",
									Count: "10"
								}
							]
						}
					] 
				}
			}
		</script>
		
	</head>

	<body id="plp">

		<%@include file="Header.jsp" %>

		<main>
			
			<section id="plpHeader">
				<h1>Xbox One Games</h1>
				<div class="resultsCount">
					<span class="resultsShowingAmount">1-10</span> of <span class="totalAmount">100</span> items
				</div>
				<div class="layouts">
					<a href="#" data-layout="full"></a>
					<a href="#" data-layout="horizontal"></a>
					<a href="#" data-layout="stacked" class="selected"></a>
				</div>
				<div class="filtersSorting">
					
					<a href="#" class="filterBy filterButton" data-bind="click: toggleFiltersContainer">
						Filters <span class="count" data-bind="text: appliedFilters().length"></span>
					</a>
					
			
				
					<div class="selectWrapper">
						<select id="sortBySelect" name="sortBySelect" class="sortBy filterButton">
							<option value="1">Relevance</option>
							<option value="2">Title - High to Low</option>
							<option value="3">Title - Low to High</option>
							<option value="4">Price - High to Low</option>
							<option value="5">Price - Low to High</option>
						</select>
					</div>
						
				
					<div class="filtersContainer">
						<div class="buttons">
							<a href="#" class="applyFilters" data-bind="click: applyFilters, css: { active: interactionHappened }">Apply</a>
							<a href="#" class="clearAll" data-bind="click: clearAllFilters, css: { inactive: appliedFilters().length == 0 }">Clear all</a>
						</div>
						<h2 data-bind="visible: appliedFilters().length > 0">Applied filters:</h2>
						<div class="appliedFilters" data-bind="template { foreach: appliedFilters, afterAdd: showAppliedFilter, beforeRemove: hideAppliedFilter }" >
							<!-- ko foreach: Filters -->
						    	<a href="#" data-bind="text: Title, click: removeAppliedFilter"></a>
						    <!-- /ko -->
						</div>
						<h2>Filter by:</h2>
						<div class="filters">
							<ul data-bind="foreach: availableFilters">
								<li class="collapsible collapsed">
									<h3 class="trigger" data-bind="text: Type"></h3>
									<ul class="content" data-bind="template { foreach: Filters, afterAdd: showAvailableFilter, beforeRemove: hideAvailableFilter }">
										<li data-bind="click: function(data,event){ addAppliedFilter(data, event, $parent) }">
											<span class="name" data-bind="text: Title"></span>
											<span class="count" data-bind="text: Count"></span>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>


					
				</div>
			</section>

			<section id="plpMain">
				<div id="plpProducts" class="stacked">
					<div class="product" data-url="#">
						<div class="imageContainer">
							<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/sampleimages/packShot2.png" alt="" />
						</div>

						<div class="productInfo">

							<h2>Titanfall</h2>

							<div class="icons">
								<span class="icon pegiRating pegi18"></span>
								<span class="console xboxOne"></span>
								<span class="reviews">Reviews <span class="reviewsCount">8</span></span>
							</div>

							<div class="mintPrice row">
								<span class="key">
									<span class="condition">New</span> Sold by <span class="name gameLogo small">GAME</span>
								</span>
								<span class="value">
									&pound;29.99
								</span>
							</div>

							<div class="preownedPrice row">
								<span class="key">
									Preowned from
								</span>
								<span class="value">
									&pound;28.00
								</span>
							</div>
						</div>
					</div>

					<div class="product" data-url="#">
						<div class="note comingSoon">Coming soon</div>
						<div class="imageContainer">
							<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/sampleimages/packShot2.png" alt="" />
						</div>

						<div class="productInfo">

							<h2>Titanfall</h2>

							<div class="icons">
								<span class="icon pegiRating pegi18"></span>
								<span class="console xboxOne"></span>
								<span class="reviews">Reviews <span class="reviewsCount">8</span></span>
							</div>

							<div class="mintPrice row">
								<span class="key">
									<span class="condition">New</span> Sold by <span class="name gameLogo small">GAME</span>
								</span>
								<span class="value">
									&pound;29.99
								</span>
							</div>

							<div class="preownedPrice row">
								<span class="key">
									Preowned from
								</span>
								<span class="value">
									&pound;28.00
								</span>
							</div>
						</div>
					</div>

					<div class="product" data-url="#">
						<div class="note onlyAtGame">Only at Game</div>
						<div class="imageContainer">
							<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/sampleimages/packShot2.png" alt="" />
						</div>

						<div class="productInfo">

							<h2>Titanfall</h2>
							<div class="icons">
								<span class="icon pegiRating pegi18"></span>
								<span class="console xboxOne"></span>
								<span class="reviews">Reviews <span class="reviewsCount">8</span></span>
							</div>

							<div class="mintPrice row">
								<span class="key">
									<span class="condition">New</span> Sold by <span class="name gameLogo small">GAME</span>
								</span>
								<span class="value">
									&pound;29.99
								</span>
							</div>

							<div class="preownedPrice row">
								<span class="key">
									Preowned from
								</span>
								<span class="value">
									&pound;28.00
								</span>
							</div>
						</div>
					</div>

					<div class="product outOfStock" data-url="#">
						<div class="note outOfStock">Out of stock</div>
						<div class="imageContainer">
							<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/sampleimages/packShot2.png" alt="" />
						</div>

						<div class="productInfo">

							<h2>Titanfall</h2>

							<div class="icons">
								<span class="icon pegiRating pegi18"></span>
								<span class="console xboxOne"></span>
								<span class="reviews">Reviews <span class="reviewsCount">8</span></span>
							</div>

							<div class="mintPrice row">
								<span class="key">
									<span class="condition">New</span> Sold by <span class="name gameLogo small">GAME</span>
								</span>
								<span class="value">
									&pound;29.99
								</span>
							</div>

							<div class="preownedPrice row">
								<span class="key">
									Preowned from
								</span>
								<span class="value">
									&pound;28.00
								</span>
							</div>
						</div>
					</div>
					<div id="newProducts" data-bind="foreach: newProducts">
						<div class="product" data-bind="attr:{'data-url': $data.Url}, template: { name: 'plpProduct-template' , data: $data }">
						</div>
					</div>
				</div>

				<div id="plpNavigation">
					<a href="#" id="showNextProducts" data-bind="click: getMoreProducts">Show next 10 products</a>
					<div class="resultsCount">
						<span class="resultsShowingAmount">1-10</span> of <span class="totalAmount">100</span> items
					</div>
					<a href="#" id="showAllProducts">Show all products</a>
				</div>

			</section>



			<%-- PRODUCT TEMPLATE --%>
			<script type="text/html" id="plpProduct-template">
				<!-- ko if: $data.Note -->
			        <div class="note" data-bind="css: Note.Type, text: Note.Text"></div>
			    <!-- /ko -->
				<div class="imageContainer" data-bind="css: {outOfStock: typeof Note != 'undefined' && Note.Type == 'outOfStock'}">
					<img data-bind="attr: { src: Packshot }">
				</div>

				<div class="productInfo">

					<h2 data-bind="text: Title"></h2>

					<div class="icons">
						<span class="icon pegiRating" data-bind="css: 'pegi' + PegiRating"></span>
						<span class="console" data-bind="css: Console"></span>
						<span class="reviews">Reviews <span class="reviewsCount" data-bind="text: ReviewsCount"></span></span>
					</div>
					<div class="condtions" data-bind="foreach: Conditions">
						<div class="row">
							<span class="key" data-bind="html: Text"></span>
							<span class="value" data-bind="text: '&pound;' + Price"></span>
						</div>
					</div>
				</div>			    
			</script>

			
		</main>

		<%@include file="Footer.jsp" %>
		<%@include file="SidePanels.jsp" %>

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>

</html>