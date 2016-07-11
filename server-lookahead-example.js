const _ = require('lodash');

const animals = [
	'aardvaark',
	'albatross',
	'ant',
	'arctic hare',
	'arctic fox',
	'arctic wolf',
	'anteater',
	'antelope',
	'avocet',
	'bat',
	'badger',
	'cat',
	'fox',
	'dog',
	'quokka'
];

const containsValue = _.curry(function(value, testValue) {
	const regexTest = new RegExp(value);

	return regexTest.test(testValue);
});

function lookahead(value) {
	return animals.filter(containsValue(value));
}

module.exports = {
	lookahead: lookahead
};