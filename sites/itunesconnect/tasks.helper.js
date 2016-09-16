'use strict';
var loginView = new browser.pages.iTunesConnectLoginView();
var homeView = new browser.pages.iTunesConnectHomeView();

var sleepTime = 2000;
var shortSleepTime = 200;

var Tasks = {
	sleepTime: sleepTime,
	shortSleepTime: shortSleepTime,
	setup: function(){
		browser.ignoreSynchronization = true;
		loginView.go();
		return browser;
	},
	teardown: function(){
		browser.manage().deleteAllCookies();
		browser.driver.executeScript('sessionStorage.clear();');
	},
	login: function(){
		Tasks.waitForClickable(loginView.authFrame);

		browser.switchTo().frame('authFrame');

		var creds = browser.params.credentials.itunesconnect;
		loginView.emailField.sendKeys(creds.email);
		loginView.passwordField.sendKeys(creds.password);
		loginView.submitButton.click();

		browser.sleep(sleepTime);
	},
	waitForTransitionAnimation: function(){
		browser.sleep(sleepTime);
	},
	waitForClickable: function(element){
		browser.wait(protractor.ExpectedConditions.elementToBeClickable(element));
	}
};

module.exports = Tasks;
