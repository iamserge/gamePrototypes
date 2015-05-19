define(['jquery'], function($) {
	var collapsibleSection = function(){
			$.fn.slideToggleSection = function(callback) {

				this.find('> .content').slideToggle(function(){
					if (callback) callback();
				});
				
			}

			$(document).on('click','.collapsible > .trigger', function(e){

				$(this).parent().slideToggleSection();
			});
		},

		transitionClasses = function(){
			$.fn.removeTransitionClass = function(className, callback) {

				this.removeClass(className);
				setTimeout(callback,parseFloat(this.css('transition-duration')) * 1000)

			}

			$.fn.addTransitionClass = function(className, callback) {

				this.addClass(className);
				setTimeout(callback,parseFloat(this.css('transition-duration')) * 1000)

			}

			$.fn.toggleTransitionClass = function(className, callback) {

				this.toggleClass(className);
				setTimeout(callback,parseFloat(this.css('transition-duration')) * 1000)
				
			}
		},
		init = function(){
			collapsibleSection();
			transitionClasses();
		}
	
	return {
		init: init
	}
});