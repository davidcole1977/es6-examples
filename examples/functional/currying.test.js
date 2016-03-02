import chai from 'chai';
import {assembleGreeting, curry} from './currying';

const expect = chai.expect;

describe('functional', () => {
	describe('currying', () => {
		describe('simple currying example: assembleGreeting()', () => {
			it('assembles a greeting function from three partial functions', () => {
				const greetHello = assembleGreeting('Hello');
				const greetHelloDavid = greetHello('David');
				const greetHelloDavidHowAreYou = greetHelloDavid('how are you?');

				expect(greetHelloDavidHowAreYou).to.equal('Hello David, how are you?');
			});
		});

		describe('transforming a function into a curried version: curry()', () => {
			it('transforms a simple function with three parameters into a curried function', () => {
				function makeGreeting(salutation, name, greeting) {
					return salutation + ' ' + name + ', ' + greeting;
				}

				const curriedGreeting = curry(makeGreeting, 'Hello', 'David');

				expect(curriedGreeting('how are you?')).to.equal('Hello David, how are you?');
			});
		});
	});
});
