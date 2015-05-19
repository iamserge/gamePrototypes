define(['jquery', 'touchSwipe'], function($,touchSwipe) {

	"use strict";

	var	config = {
			defaultSwipeParams: {

	            triggerOnTouchEnd: true,
	            allowPageScroll: "vertical",
	            threshold: 75
	  	
	        },
	        elements: {
	        	slidesContainer: '#pdpSlider .slides',
	        	packageTitles: '#pdpPackageHeader h1 span'
	        },
	        generateIndicators: false,
	        differentHeights: false,
	        expandable: false,
	        transitionDuration: 300,
	        focusedSlideRatio: 0.8,
			unfocusedSlideRation: 0.6,
			defaultMaxHeight: 200

    	};
    var _private = {
    	windowWidth: $(window).width(),
    	speed: 500
    }   

	var ScreenshotsSlider = function(options) {
			
			this.options = $.extend({},config, options);
			this.currentImg = 0;
			this.isPackage = (this.options.pageFlavour == 'package');
			this.init();
			
			console.log(this.isPackage);
		};

	var proto = ScreenshotsSlider.prototype;
		

	proto.init = function(){
		this.setupElements();
		this.setupWidthsHeights();
		
		if (this.$elements.slides.length > 0) {
			this.generateThumbnails();
			this.setupEvents();
		}
	};

	proto.setupWidthsHeights = function(){

		var maxHeight = this.getMaxScreenshotHeight();

		this.$elements.screenshotSlides.width(_private.windowWidth).height(maxHeight);
		this.$elements.packshot.width(_private.windowWidth).height(maxHeight);
		this.$elements.slidesContainer.width(_private.windowWidth * this.$elements.slides.length).height(maxHeight);
	
	};

	proto.getMaxScreenshotHeight = function(){
		var max = 0;
		if (this.$elements.screenshotSlides.length > 0) {
			this.$elements.screenshotSlides.each(function(){
				max = ($(this).find('img').height() > max)? $(this).find('img').height() : max;
			});
		} else {
			max = this.options.defaultMaxHeight;
		}
		

		return max;
	}

	proto.setupElements = function() {
		this.$elements = {};
		this.$elements.slidesContainer = $(this.options.elements.slidesContainer);
		this.$elements.packshot = this.$elements.slidesContainer.find('.packshot');
		this.$elements.screenshotSlides = this.$elements.slidesContainer.find('.slide:not(.packshot)');
		this.$elements.slides = this.$elements.slidesContainer.find('.slide');
		if (this.isPackage) this.$elements.packageTitles = $(this.options.elements.packageTitles);

		this.maxSlides = this.$elements.slides.length;
		
	}

	proto.setupEvents = function(){
		
		var self = this,
			swipeOptions = this.options.defaultSwipeParams;
		swipeOptions.swipeStatus = function(event, direction, distance, duration, fingerCount, fingerData) {
			self.swipeStatus(event, direction, distance, duration, fingerCount, fingerData)
		}
		this.$elements.slidesContainer.swipe(swipeOptions);
		
		this.$elements.slides.filter('.youtube').find('img').on('click', function(e){
			self.openYoutube($(this).parent());
		});

	}

	proto.swipeStatus = function(event, phase, direction, distance, object) {
            //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
        if (phase == "move" && (direction == "left" || direction == "right")) {
            var duration = 0;

            if (direction == "left") {
                this.scrollImages((_private.windowWidth * this.currentImg) + distance, duration);
            } else if (direction == "right") {
                this.scrollImages((_private.windowWidth * this.currentImg) - distance, duration);
            }

        } else if (phase == "cancel") {
            this.scrollImages(_private.windowWidth * this.currentImg, _private.speed);
        } else if (phase == "end") {
            if (direction == "right") {
               this.previousImage();
            } else if (direction == "left") {
               this.nextImage();
            }
        }
    }

    proto.previousImage = function () {

        this.currentImg = Math.max(this.currentImg - 1, 0);
        this.scrollImages(_private.windowWidth * this.currentImg, _private.speed)

    }

    proto.nextImage = function() {

        this.currentImg = Math.min(this.currentImg + 1, this.maxSlides - 1);
        this.scrollImages(_private.windowWidth * this.currentImg, _private.speed)

    }

    /**
     * Manually update the position of the this.$elements.sliderContainer on drag
     */
    proto.scrollImages = function(distance, duration) {

        this.$elements.slidesContainer.css("transition-duration", (duration / 1000).toFixed(1) + "s");

        //inverse the number set in the css
        var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
        this.$elements.slidesContainer.css("transform", "translate(" + value + "px,0)");

       	
        //Manage indicators 
        this.$elements.indicatorContainer.find('.current').removeClass('current');
		$(this.$elements.indicators[ this.currentImg ]).addClass('current');

		//Remove youtube iframe if youtube active slide is present
		if (this.$elements.slides.filter('.youtube.active').length > 0 ) this.removeYoutube(this.$elements.slides.filter('.youtube.active'));

		//Manage package titles if it is package PDP
		if (this.isPackage) {
			this.$elements.packageTitles.filter('.current').removeClass('current');
			$(this.$elements.packageTitles[ this.currentImg ]).addClass('current');
		}
    }

    proto.generateThumbnails = function(){
    	this.$elements.indicatorContainer = $('<div/>', {
			class: "indicators"
		});
		this.$elements.indicatorContainer.appendTo(this.$elements.slidesContainer.parent());

		for (var i = 0; i < this.$elements.slides.length; i++) {

			var youtubeClass = ($(this.$elements.slides[i]).hasClass('youtube'))? 'youtube': '';
			this.$elements.indicatorContainer.append('<span class="indicator '+ youtubeClass +'"></span>');
		
		}
		this.$elements.indicators = this.$elements.indicatorContainer.find('.indicator');
		
		$(this.$elements.indicators[0]).addClass('current');
    }

    proto.removeYoutube = function($slide){
    	$slide.html('').append('<img src="' + $slide.data('thumbsrc') + '"" alt="" />').removeClass('active');
    }

    proto.openYoutube = function($slide){
    	var youtubeUrl = 'https://www.youtube.com/embed/%videoid%?showinfo=0',
			youtubeRatio = 16 / 9,
			$iframe = $('<iframe />', {
				src: youtubeUrl.replace('%videoid%',$slide.data('youtubeid')),
				width: $(window).width(),
				height: parseInt($(window).width() / youtubeRatio),
				allowfullscreen: true,
				frameborder: 0
			});
		
		$slide.html('').append($iframe).addClass('active');
    }

    proto.manageProductTitles = function($slide){

    }
	



	

	
	


	return ScreenshotsSlider;

});


