'use strict';
var iTunesConnectSandboxUserCreateView = function(){

	this.firstNameField = element(by.model('iapUserDetails.user.firstName.value'));
	this.lastNameField = element(by.model('iapUserDetails.user.lastName.value'));
	this.emailField = element(by.model('iapUserDetails.user.emailAddress.value'));
	this.passwordField = element(by.model('iapUserDetails.user.password.value'));
	this.confirmPasswordField = element(by.model('iapUserDetails.user.confirmPassword.value'));

	this.secretQField = element(by.model('iapUserDetails.user.secretQuestion.value'));
	this.secretAField = element(by.model('iapUserDetails.user.secretAnswer.value'));

	this.birthMonthSelectField = element(by.model('iapUserDetails.user.birthMonth.value'));
	this.birthDaySelectField = element(by.model('iapUserDetails.user.birthDay.value'));

	this.territorySelectField = element(by.model('iapUserDetails.user.storeFront.value'));

	this.submitButton = element(by.buttonText('Save'));

	this.go = function(){
		browser.get('/WebObjects/iTunesConnect.woa/ra/ng/users_roles/sandbox_users/new');
	};
};

module.exports = iTunesConnectSandboxUserCreateView;
