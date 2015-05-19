define(['jquery', 'touchSwipe'], function($,touchSwipe) {

	"use strict";

	var	config = {
			defaultSwipeParams: {

	            triggerOnTouchEnd: true,
	            allowPageScroll: "vertical",
	            threshold: 75,

	  	
	        },
	        elements: {
	        	slidesContainer: '#pdpSlider .slides',
	        	packageTitles: '#pdpPackageHeader h1 span'
	        },
	        scrollToSlide: true,
	        generateIndicators: true,
	        differentHeights: false,
	        expandable: false,
	       	adjustSizes: true,
	        transitionDuration: 300,
	        focusedSlideRatio: 0.8,
			unfocusedSlideRation: 0.6,
			defaultMaxHeight: 200

    	};
    var _private = {
    	windowWidth: $(window).width(),
    	speed: 500
    }   

	var SimpleSlider = function(options) {
			
			this.options = $.extend({},config, options);
			this.sliderCurrentPosition = 0;
			this.currentImg = 0;
			this.isPackage = (this.options.pageFlavour == 'package');
			this.init();
			
		};

	var proto = SimpleSlider.prototype;
		

	proto.init = function(){
		this.setupElements();
		if (this.options.adjustSizes) 
			this.setupWidthsHeights();
		else
			//If not adjustments required for slides width and height ( e.g. console slider ) 
			//then we are just setting up slides contaniers width
			this.$elements.slidesContainer.width($(this.$elements.slides[0]).outerWidth() * this.$elements.slides.length)
		
		if (this.$elements.slides.length > 0) {
			if (this.options.generateIndicators) this.generateIndicators();
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
		this.maxMove = (this.options.scrollToSlide)? (this.maxSlides - 1) * _private.windowWidth : this.maxSlides * this.$elements.slides.eq(0).outerWidth() - _private.windowWidth;
		
	}

	proto.setupEvents = function(){
		
		var self = this,
			swipeOptions = this.options.defaultSwipeParams;
		swipeOptions.swipeStatus = function(event, direction, distance, duration, fingerCount, fingerData) {
			self.swipeStatus(event, direction, distance, duration, fingerCount, fingerData);
		}
		this.$elements.slidesContainer.swipe(swipeOptions);
		
		this.$elements.slides.filter('.youtube').find('img').on('click', function(e){
			self.openYoutube($(this).parent());
		});

	}

	proto.swipeStatus = function(event, phase, direction, distance, object) {
            //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
      
        var distanceBefore = (this.options.scrollToSlide) ? this.currentImg * _private.windowWidth : this.sliderCurrentPosition;
      	
        if (phase == "move" && (direction == "left" || direction == "right")) {
            var duration = 0;
            if (direction == "left") {
            	
                this.scrollImages(distanceBefore + distance, duration);
            } else if (direction == "right") {
            	
                this.scrollImages(distanceBefore - distance, duration);
            }

        } else if (phase == "cancel") {
            this.scrollImages(distanceBefore, _private.speed);
            
        } else if (phase == "end" ) {
            if (this.options.scrollToSlide) {
            	if (distance > parseInt(_private.windowWidth / 3)) {
		            if (direction == "right" ) {
		               	this.previousImage();
		            } else if (direction == "left") {
		               this.nextImage();
		            }
		        } else {
		        	this.scrollBackToCurrent();
		        }
	        } else {
	        	if (direction == "right" ) {
	            	this.sliderCurrentPosition = distanceBefore - distance
	            } else if (direction == "left") {
	               	this.sliderCurrentPosition = distanceBefore + distance
	            }
	        }
        } 
    }

    proto.previousImage = function () {

        this.currentImg = Math.max(this.currentImg - 1, 0);
        this.scrollImages(this.currentImg * _private.windowWidth, _private.speed)

    }

    proto.nextImage = function() {

        this.currentImg = Math.min(this.currentImg + 1, this.maxSlides - 1);
        this.scrollImages(this.currentImg * _private.windowWidth, _private.speed)

    }

    proto.scrollBackToCurrent = function () {
    	this.scrollImages(this.currentImg * _private.windowWidth, _private.speed)
    }

    /**
     * Manually update the position of the this.$elements.sliderContainer on drag
     */
    proto.scrollImages = function(distance, duration) {
 
    	distance = (distance > 0) ? (distance > this.maxMove) ? distance = this.maxMove : distance : 0;   
        this.$elements.slidesContainer.css("transition-duration", (duration / 1000).toFixed(1) + "s");

        //inverse the number set in the css
        var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
        this.$elements.slidesContainer.css("transform", "translate(" + value + "px,0)");

       	
        /* Manage indicators 
        if (this.options.generateIndicators) {
	        this.$elements.indicatorContainer.find('.current').removeClass('current');
			$(this.$elements.indicators[ this.currentImg ]).addClass('current');
		}*/

		//Remove youtube iframe if youtube active slide is present
		if (this.$elements.slides.filter('.youtube.active').length > 0 ) this.removeYoutube(this.$elements.slides.filter('.youtube.active'));

		//Manage package titles if it is package PDP
		if (this.isPackage) {
			this.$elements.packageTitles.filter('.current').removeClass('current');
			$(this.$elements.packageTitles[ this.currentImg ]).addClass('current');
		}
    }

    proto.generateIndicators = function(){
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
	



	

	
	


	return SimpleSlider;

});


