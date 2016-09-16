'use strict';

var sandboxView = new browser.pages.iTunesConnectSandboxUserCreateView();
var tasks = require('../tasks.helper.js');

var creds = browser.params.sandboxUser

describe('[1] - Sandbox User Creation', function () {

	beforeEach(function () {
		tasks.setup();
		tasks.login();
	});

	afterEach(function () {
		tasks.teardown();
	});

	it('[New sandbox user] E: ' + creds.email + ' P: ' + creds.password, function () {

		sandboxView.go();
		tasks.waitForClickable(sandboxView.firstNameField)

		sandboxView.firstNameField.sendKeys(creds.firstName);
		sandboxView.lastNameField.sendKeys(creds.lastName);

		sandboxView.emailField.sendKeys(creds.email);
		sandboxView.passwordField.sendKeys(creds.password);
		sandboxView.confirmPasswordField.sendKeys(creds.password);

		sandboxView.birthMonthSelectField.sendKeys(creds.birthMonth);
		sandboxView.birthDaySelectField.sendKeys(creds.birthDay);

		sandboxView.secretQField.sendKeys(creds.secretQ);
		sandboxView.secretAField.sendKeys(creds.secretA);

		sandboxView.territorySelectField.sendKeys(creds.territory);

		sandboxView.submitButton.click();

		var confirmMessage = element(by.css('.pagemessage.confirm'));

		tasks.waitForClickable(confirmMessage)
		expect(confirmMessage.getText()).toContain('You\'ve successfully created the Sandbox tester');
		browser.sleep(5000)
	});

});
