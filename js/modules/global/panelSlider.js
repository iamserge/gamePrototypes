define(['jquery', 'touchSwipe'], function($) {

	"use strict";

	var	config = {

			swipeParams: {
	            triggerOnTouchEnd: true,
	            allowPageScroll: "vertical",
	            threshold: 200,
	            maxTimeThreshold: 1000,
	            click: function (event, target) {
	    			if (event instanceof TouchEvent) $(target).click();
	  			}
	        },

			triggerExtraName: 'Icon',
			panelExtraName: 'Panel',
			panelWidth: 260,
			transitionDuration: 0.2,

			//IF set to false, panel wont slide out and will stay hidden until content will be loaded or slidet out manualy
			active: true,
			
		},

		$elements = new function() {

			this.body = $('body');
			this.header = $('header');

		},

		_private = {
			windowWidth: $(window).width()
		};

	var SlidePanel = function(options){

		this.options = $.extend(options,config);
		this.init();

	};

	var proto = SlidePanel.prototype;

	proto.init = function() {

		this.setupElements();

		//setup event handlers only if panel is active
		if (this.options.active) this.setupEvents();

	},

	proto.setupElements = function() {

		this.elements = {};
		this.elements.$panelTrigger = $('#' + this.options.panelName + this.options.triggerExtraName);
		this.elements.$panel = $('#' + this.options.panelName + this.options.panelExtraName);
		this.elements.$panel.addClass('slidePanel ' + this.options.direction)
							.css('width',this.options.panelWidth)
							.css(this.options.direction,this.options.panelWidth * -1);
		this.options.opositeDirection = (this.options.direction == 'left') ? 'right' : 'left';					
		this.setupTransitionDuration();
		this.opened = false;
		
	};

	proto.setupEvents = function() {

		var self = this;

		this.elements.$panelTrigger.on('click',function(e) {

			e.stopPropagation();
			
			if (self.opened) {
				self.slideInPanel();
			} else {
				self.slideOutPanel();
			}
				
		});

		//self.initializeSwipeOut();

	};

	proto.initializeSwipeOut = function() {

		var self = this, 
			swipeEventName = 'swipe'+ this.options.opositeDirection.charAt(0).toUpperCase() + this.options.opositeDirection.substring(1),
			swipeParams = this.options.swipeParams;
	
		swipeParams[swipeEventName] = function(event, direction, distance, duration, fingerCount, fingerData){
			self.handleSwipe(event, direction, distance, duration, fingerCount, fingerData, true);
			return true;
		}

		$elements.body.swipe('destroy');

		if (typeof Game.slidePanels != 'undefined') {
			for (var swipeName in Game.slidePanels) {
				swipeParams[swipeName] = Game.slidePanels[swipeName];
			}
		} else {
			Game.slidePanels = {};
		}

		Game.slidePanels[swipeEventName] = swipeParams[swipeEventName];	
		$elements.body.swipe(swipeParams);

	};
	
	proto.handleSwipe = function(event, direction, distance, duration, fingerCount, fingerData, swipeIn) {

		if (this.checkIfValidSwipe(event.changedTouches[0].clientX, direction, distance)) {

			this.swiped = true;
			if (swipeIn) {
				this.slideOutPanel.call(this);
			} else {
				this.slideInPanel.call(this);
			}
		}
		return true;
	}

	proto.initializeSwipeIn = function() {

		var self = this,
			swipeParams = this.options.swipeParams,
			swipeEventName = 'swipe'+ this.options.direction.charAt(0).toUpperCase() + this.options.direction.substring(1);
		
		swipeParams[swipeEventName] = function(event, direction, distance, duration, fingerCount, fingerData) {
			self.handleSwipe(event, direction, distance, duration, fingerCount, fingerData, false);
		}

		$elements.body.swipe('destroy');
		$elements.body.swipe(swipeParams);

	}

	proto.slideOutPanel = function() {

		var self = this;

		$elements.body.css('width', _private.windowWidth)
					  .css('position', 'absolute')
					  .css(this.options.direction, this.options.panelWidth)
					  .css(this.options.opositeDirection, 'auto');

		$elements.header.css(this.options.direction, this.options.panelWidth)
		       			.css(this.options.opositeDirection, 'auto');

		this.elements.$panel.css(this.options.direction, 0);

		setTimeout(function() {
			self.afterSlideOut();
		}, this.options.transitionDuration * 1000);

	};

	proto.afterSlideOut = function() {

		var self = this;
		self.opened = true;

		$elements.body.on('click',function(e) {

			if (!self.elements.$panel.is(e.target) && self.elements.$panel.has(e.target).length === 0) {
		    	e.preventDefault();
				self.swiped = false;
				self.slideInPanel();
			}

		});
	
		self.initializeSwipeIn();
		
	};

	proto.slideInPanel = function() {

		var self = this;

		$elements.body.css(this.options.direction, 0)
		$elements.header.css(this.options.direction, 0);

		this.elements.$panel.css(this.options.direction, this.options.panelWidth * -1);

		setTimeout(function() {
			self.afterSlideIn();
		}, this.options.transitionDuration * 1000);

	};

	proto.afterSlideIn = function() {

		var self = this;
		self.opened = false;
		$elements.body.css('width','auto')
					  .css('position', 'static')
					  .css(this.options.opositeDirection, 0);

		$elements.header.css(this.options.opositeDirection, 0);
		$elements.body.off('click');
		
		if (this.options.active)  { 
			self.initializeSwipeOut();
		} else {
			this.elements.$panel.html("");
		}
	}

	proto.setupTransitionDuration = function() {

		var transitionDurationProperty = this.options.transitionDuration + 's';

		$elements.body.css('transition-duration', transitionDurationProperty)
				      .css('-webkit-transition-duration', transitionDurationProperty)
				      .css('-moz-transition-duration', transitionDurationProperty);

		$elements.header.css('transition-duration', transitionDurationProperty)
					    .css('-webkit-transition-duration', transitionDurationProperty)
					    .css('-moz-transition-duration', transitionDurationProperty);

		this.elements.$panel.css('transition-duration', transitionDurationProperty)
		     			    .css('-webkit-transition-duration', transitionDurationProperty)
		    				.css('-moz-transition-duration', transitionDurationProperty);
	
	}

	proto.checkIfValidSwipe = function(finishX, direction, distance) {

		return (direction == 'left') ? (finishX + distance) > _private.windowWidth - 50 : (finishX - distance) < 50;

	};

	proto.loadingState = function(on) {

		var loadingPadding = 60;
		
		if (on) {
			$elements.body.css('width',_private.windowWidth)
				 .css('position', 'absolute')
				 .css(this.options.direction, loadingPadding)
				 .css(this.options.opositeDirection, 'auto');
			$elements.header.css(this.options.direction, loadingPadding)
			       .css(this.options.opositeDirection, 'auto');

			this.elements.$panel.css(this.options.direction, (this.options.panelWidth - loadingPadding) * -1);
			this.elements.$panel.addClass('loading');
		} else {
			$elements.body.css(this.options.direction, 0)
			$elements.header.css(this.options.direction, 0);
			this.elements.$panel.css(this.options.direction, this.options.panelWidth * -1);
			this.elements.$panel.removeClass('loading');
		}

	}

	proto.loadContent = function(html) {

		var self = this;
		this.elements.$panel.html(html);
		self.slideOutPanel();

	}
	
	return SlidePanel;

});