import chai from 'chai';
import {assembleGreeting, makePartial, curry} from './currying';

const expect = chai.expect;

describe('functional', () => {
	describe('currying and partial application', () => {
		function makeGreeting(salutation, name, greeting) {
			return salutation + ' ' + name + ', ' + greeting;
		}

		describe('crude partial application example', () => {
			it('assembles a greeting function from three partial functions', () => {
				const greetHello = assembleGreeting('Hello');
				const greetHelloDavid = greetHello('David');
				const greetHelloDavidHowAreYou = greetHelloDavid('how are you?');

				expect(greetHelloDavidHowAreYou).to.equal('Hello David, how are you?');
			});
		});

		describe('helper function for partial application', () => {
			it('transforms a simple function into a new function with partially applied arguments', () => {
				const partialGreeting1 = makePartial(makeGreeting, 'Hello', 'David');
				const partialGreeting2 = makePartial(makeGreeting, 'Hello');

				expect(partialGreeting1('how are you?')).to.equal('Hello David, how are you?');
				expect(partialGreeting2('David', 'how are you?')).to.equal('Hello David, how are you?');
			});
		});

		describe('helper function to create a curried function', () => {
			it('curries a function with three arguments', () => {
				const curriedGreeting = curry(makeGreeting);

				expect(curriedGreeting('Hello')('David')('how are you?')).to.equal('Hello David, how are you?');
				expect(curriedGreeting('Hello', 'David', 'how are you?')).to.equal('Hello David, how are you?');
				expect(curriedGreeting('Hello')('David', 'how are you?')).to.equal('Hello David, how are you?');
				expect(curriedGreeting('Hello', 'David')('how are you?')).to.equal('Hello David, how are you?');
			});
		});
	});
});
