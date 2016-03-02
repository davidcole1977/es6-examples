import chai from 'chai';
import {compose} from './composition';

const expect = chai.expect;

describe('functional', () => {
	describe('composition', () => {
		function add(value, input) {
			return input + value;
		}

		function multiply(value, input) {
			return input * value;
		}

		function subtract(value, input) {
			return input - value;
		}

		describe('Basic functional arithmetic calculator', () => {
			it('returns the value of a simple calculation involving addition, subtraction and multiplication', () => {
				expect(multiply(5, subtract(1, add(3, 2)))).to.equal(20);
			});
		});

		describe('compose helper function', () => {
			it('composes simple arithmetic result', () => {
				const add3 = add.bind(null, 3);
				const subtract1 = subtract.bind(null, 1);
				const multiplyBy5 = multiply.bind(null, 5);

				const simpleCalculate = compose(add3, subtract1, multiplyBy5);

				expect(simpleCalculate(2)).to.equal(20);
			});

			it('composes simple text transformation', () => {
				function toUpper(value) {
					return value.toUpperCase();
				}

				function catify(value) {
					return value.split(' ').join(' meow ');
				}

				function repeat(value) {
					return value + value;
				}

				const upperCatifyRepeat = compose(catify, toUpper, repeat);

				expect(upperCatifyRepeat('I like cheese.')).to.equal('I MEOW LIKE MEOW CHEESE.I MEOW LIKE MEOW CHEESE.');
			});
		});
	});
});
