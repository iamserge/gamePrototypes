<!DOCTYPE html>
<html>
	<head>

		<title>GAME Mobile - Prototype 1</title>

		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/css/proto.css">

		<script type="text/javascript">
			var Game = Game || {};
			Game.CurrentPage = {
				PageName: 'home'
			}
		</script>
		
	</head>

	<body id="home">

		<%@include file="Header.jsp" %>

		<ul id="searchResults">
			<li class="xbox"><a href="#">Halo: The Master Chief Collection</a></li>
			<li class="ps4"><a href="#">Halo: The Master Chief Collection</a></li>
			<li class="xbox"><a href="#">Halo: The Master Chief Collection of the awesome two line</a></li>
			<li class="ps4"><a href="#">Halo: The Master Chief Collection</a></li>
			<li class="xbox"><a href="#">Halo: The Master Chief Collection</a></li>	
		</ul>

		<main>

			<section id="platformSelector">
				<div class="inner">
					<a href="#" class="all selected slide">All</a>
					<a href="#" class="ps4 slide">PS4</a>
					<a href="#" class="wiiu slide">Wii U</a>
					<a href="#" class="xbox360 slide">Xbox 360</a>
					<a href="#" class="ps3 slide">PS3</a>
					<a href="#" class="i3ds slide">3DS</a>
					<a href="#" class="xboxOne slide">Xbox One</a>
					<a href="#" class="all selected slide">All</a>
					<a href="#" class="ps4 slide">PS4</a>
					<a href="#" class="wiiu slide">Wii U</a>
					<a href="#" class="xbox360 slide">Xbox 360</a>
					<a href="#" class="ps3 slide">PS3</a>
					<a href="#" class="i3ds slide">3DS</a>
					<a href="#" class="xboxOne slide">Xbox One</a>
				</div>
			</section>
			<div class="homepageSlider">
				<div class="inner">
					<a href="#" class="slide">
						<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/simpleSlide.jpg" alt="" />
					</a>

					<a href="#" class="slide">
						<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/simpleSlide2.jpg" alt="" />
					</a>

					<a href="#" class="slide">
						<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/simpleSlide.jpg" alt="" />
					</a>

					<a href="#" class="slide">
						<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/simpleSlide2.jpg" alt="" />
					</a>

					<a href="#" class="slide">
						<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/simpleSlide.jpg" alt="" />
					</a>

					<a href="#" class="slide">
						<img src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/img/simpleSlide2.jpg" alt="" />
					</a>
				</div>
			</div>

		</main>

		

		<script data-main="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/modules/main.js" src="/webapp/wcs/stores/SafeStorefrontAssetStore/mobileV2/Prototypes/js/lib/require.js"></script>

	</body>
</html>