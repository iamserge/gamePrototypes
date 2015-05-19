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
        

	var PdpSlider = function(options) {

			this.options = $.extend({},config, options);
			this.init();

		};

	var proto = PdpSlider.prototype;
		

	proto.init = function(){
			
			this._private = {};
			this._private.pointer = 0;
			this.setupElements();
			if (this.options.generateIndicators) this.generateIndicators();
			this.setupSlides();
			this.setupEvents();
			if (this.options.expandable) this.setupOverlay();
			
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
			if ($slide.height() > maxHeight) {
				maxHeight = $slide.height();
				maxHeightSlideWidth = $slide.width();
			}  
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

	proto.swipeToSlide = function(){

	}


	
	proto.generateIndicators = function() {

		this.$elements.indicatorContainer = $('<div/>', {
			class: "indicators"
		});
		this.$elements.indicatorContainer.appendTo(this.$elements.slidesContainer.parent());

		for (var i = 0; i < this.$elements.slides.length; i++) {

			var youtubeClass = ($(this.$elements.slides[i]).hasClass('youtube'))? 'youtube': '';
			console.log(youtubeClass);
			this.$elements.indicatorContainer.append('<span class="indicator '+ youtubeClass +'"></span>');
			
			
		}

		this.$elements.indicators = this.$elements.indicatorContainer.find('.indicator');
		$(this.$elements.indicators[ this._private.pointer ]).addClass('current');

	}



	proto.setupOverlay = function(){

		var self = this,
			openOverlay = function() {
				if (typeof self.$elements.overlay == 'undefined') {
					self.$elements.overlay = $('<div />', {
						class: 'sliderOverlay',
						html: '<a href="#" class="close"></a>'
					});

					self.$elements.overlay.appendTo(self.$elements.slidesContainer.parent());

				} else {
					self.$elements.overlay.show();
				}
			},

			closeOverlay = function() {
				self.$elements.overlay.hide();
				self.$elements.overlay.find('img').remove();
				self.$elements.overlay.find('iframe').remove();
			},

			setupYoutube = function($slide){
				var youtubeUrl = 'https://www.youtube.com/embed/%videoid%?showinfo=0',
					youtubeRatio = 16 / 9,
					$iframe = $('<iframe />', {
						src: youtubeUrl.replace('%videoid%',$slide.data('youtubeid')),
						width: $(window).width(),
						height: parseInt($(window).width() / youtubeRatio),
						allowfullscreen: true,
						frameborder: 0
					});
				$iframe.css('margin-top',$(window).width() / youtubeRatio / - 2).appendTo(self.$elements.overlay);



			},

			setupImage = function($slide) {
				var $img = $('<img />', {
					src: $slide.attr('src'),
					alt: ""
				});
				$img.appendTo(self.$elements.overlay);

				$img.load(function(){

					if ($img.height() < $img.width()) $img.css('margin-top', $img.height() / -2)
					else $img.css('margin-left', $img.width() / -2).addClass('vertical');
					
				});
			}

		this.$elements.slides.on('click', function(e){
			var $slide = $(this);
			e.preventDefault();
			openOverlay();
			if ($slide.hasClass('youtube')) setupYoutube($(this)) 
			else setupImage($slide);
		});

		$(document).on('click','.sliderOverlay .close',function(e){
			e.preventDefault();
			closeOverlay();
		})
	}

		
		
	
		






	

	
	


	return PdpSlider;

});


