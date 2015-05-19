define(['jquery', 'touchSwipe', 'imagesLoaded'], function($,touchSwipe,imagesLoaded) {

	"use strict";

	var	config = {
			defaultSwipeParams: {

	            triggerOnTouchEnd: true,
	            allowPageScroll: "vertical",
	            threshold: 100,
	            maxTimeThreshold:1000,
	  	
	        },
	        elements: {
	        	slidesContainer: '#pdpSlider .slides',
	        },
	        generateIndicators: false,
	        differentHeights: false,
	        expandable: false,
	        transitionDuration: 300,
	        focusedSlideRatio: 0.8,
			unfocusedSlideRation: 0.6

    	};
        

	var ResizeSlider = function(options) {

		this.options = $.extend({},config, options);

		this.init();

	};

	var proto = ResizeSlider.prototype;
		

	proto.init = function(){
			
			this._private = {};
			this._private.pointer = 0;
			this.setupElements();
			this.setupSlides();
			this.setupEvents();
			
		};

	proto.setupElements = function() {
		this.$elements = {};
		this.$elements.slidesContainer = $(this.options.elements.slidesContainer);
		this.$elements.slides = this.$elements.slidesContainer.find('.slide');
	}

	proto.adjustSlides = function() {
		var maxHeight = 0,
			maxHeightSlideWidth;
		this.$elements.slides.each(function(){
			var $slide = $(this);
			$slide.css('margin-top', parseInt($slide.height() / - 2));
			maxHeight = ($slide.height() > maxHeight)? $slide.height() : maxHeight;
		});
		this.$elements.slidesContainer.height(maxHeight + 40);

	}

	proto.setupSlides = function() {

		this.setupFocusedSlide($(this.$elements.slides[ this._private.pointer ]));
		$(this.$elements.slides[ this._private.pointer + 1 ]).addClass('next');

		if (this.options.differentHeights) this.adjustSlides();

	};


	proto.setupEvents = function() {
		var self = this;
		self.options.defaultSwipeParams.swipe = function(event, direction, distance, duration, fingerCount, fingerData) {
			self.handleSwipe(event, direction, distance, duration, fingerCount, fingerData)
		}
		self.$elements.slidesContainer.swipe(self.options.defaultSwipeParams);

	};

	proto.setupFocusedSlide = function($slide) {
	
		$slide.removeClass('prev')
			  .removeClass('next')
			  .addClass('focused');


		if(this.options.generateIndicators) {
			this.$elements.indicatorContainer.find('.current').removeClass('current');
			$(this.$elements.indicators[ this._private.pointer ]).addClass('current');
		}
		
		
	};

	proto.setupNextSlide = function($slide) {

		$slide.show()
			  .removeClass('focused')
			  .addClass('next');
		if(this.options.differentHeights) $slide.css('margin-top', parseInt($slide.height() / -2));

	};

	proto.setupPrevSlide = function($slide) {

		$slide.show()
			  .removeClass('focused')
			  .addClass('prev');

	};

	proto.handleSwipe = function(event, direction, distance, duration, fingerCount, fingerData) {
		var self = this;
		switch (direction) {
			case 'right':
				self.swipePrev();
				break; 

			case 'left':
				self.swipeNext();
				break; 
		}

	};

	proto.swipeNext = function() {
		var self = this;
		if ( self._private.pointer == self.$elements.slides.length - 1) return false;

		$(self.$elements.slides[ self._private.pointer-1 ]).hide();
		self.setupPrevSlide($(self.$elements.slides[ self._private.pointer ]));
		self._private.pointer++;
		self.setupFocusedSlide($(self.$elements.slides[ self._private.pointer ]));
		setTimeout(function(){
			self.setupNextSlide($(self.$elements.slides[ self._private.pointer + 1 ]));
		}, config.transitionDuration);
		
	};

	proto.swipePrev = function() {
		var self = this;
		if ( self._private.pointer == 0) return false;

		$(self.$elements.slides[ self._private.pointer + 1 ]).hide();
		self.setupNextSlide($(self.$elements.slides[ self._private.pointer ]));
		self._private.pointer--;
		self.setupFocusedSlide($(self.$elements.slides[ self._private.pointer ]));
		setTimeout(function(){
			self.setupPrevSlide($(self.$elements.slides[ self._private.pointer - 1 ]));
		}, config.transitionDuration);

	};

	


	return ResizeSlider;

});


