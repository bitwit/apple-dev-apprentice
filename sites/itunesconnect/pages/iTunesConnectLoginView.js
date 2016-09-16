'use strict';
var iTunesConnectLoginView = function(){

	this.authFrame = element(by.id('authFrame'));
	this.emailField = element(by.id('appleId'));
	this.passwordField = element(by.id('pwd'));
	this.submitButton = element(by.id('sign-in'));

	this.go = function(){
		browser.get('/');
	};
};

module.exports = iTunesConnectLoginView;
