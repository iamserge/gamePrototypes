define(['knockout'], function(ko) {

	return function HomeViewModel() {
		
		var self = this;

		self.UserName = ko.observable('');

		self.UsernameError = ko.observable('');
		self.PassswordError = ko.observable('');

		self.HandleLoginButtonPress = function() {

			alert('Username = ' + self.UserName());

		};

		self.ValidateLoginForm = function() {

			if(self.Username().length < 4) self.UsernameError('Please enter a valid username');
			if(self.Password().length < 4) self.UsernameError('Please enter a valid username');
			
		}

	};


});