'use strict';

var config = {
	baseUrl: 'https://itunesconnect.apple.com',
	credentials: {
		itunesconnect: {
			email: 'email@here.com',
			password: 'pass@here.com'
		}
	},
	sandboxUser: {
		firstName: 'Joe',
		lastName: 'Smith',
		email: process.env.EMAIL || 'fallback@email.com',
		password: 'Sandytest1',
		secretQ: 'A question for recovery',
		secretA: 'An answer to the question',
		birthMonth: "January",
		birthDay: 1,
		territory: "Canada"
	}
};

module.exports = config;
