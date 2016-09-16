'use strict';
var glob = require('glob');
var config = getConfig();
var pages = getPageObjects();
var specs = getSpecs();

exports.config = {
	allScriptsTimeout: 11000,
	specs: specs,

	capabilities: {
		'browserName': 'chrome'
	},

	baseUrl: config.baseUrl,

	framework: 'jasmine2',
	resultJsonOutputFile: 'results.json',

	onPrepare: function(){

		browser.driver.manage().window().setSize(1024, 768);
		browser.driver.manage().timeouts().implicitlyWait(5000);

		// add jasmine spec reporter
		var SpecReporter = require('jasmine-spec-reporter');
		jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
		browser.pages = pages;
	},

	jasmineNodeOpts: {
		verbose: false,
		includeStackTrace: false,
		defaultTimeoutInterval: 30000,
		print: function(){}
	},

	params: config
};

function getConfig(){
	var config;
	// First we see what config is available in the local environment
	try{
		config = require('./config.js');
	} catch(e) {
	//We fallback to using our config defaults in sample.js
	console.warn(e);
	console.log('Falling back to config.sample.js');
	config = require('./config.sample.js');
}
return config;
}

//Iterate over all our files for pages
function getPageObjects(){
	var pageObjects = {};
	var pageFiles = glob.sync('./**/pages/**.js', {cwd: __dirname});
	pageFiles.forEach(function(file) {
		var module = require(file);
		var fileNameComponents = file.split('/');
		var fileName = fileNameComponents[fileNameComponents.length - 1];
		var fileNameNoExt = fileName.split('.')[0];
		pageObjects[fileNameNoExt] = module;
	});
	return pageObjects;
}

function getSpecs(){
	var site = process.env.SITE;
	var specs = './sites/';
	specs += (site) ? site : '**';
	specs += '/specs/';
	specs += '**.spec.js';
	console.log('SPECS', specs);
	return [specs];
}
