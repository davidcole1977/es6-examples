import chai from 'chai';
import {calculate, add, subtract, divideBy, multiplyBy} from './simple-calculator';

const expect = chai.expect;

describe('functional', () => {
	describe('simple-calculator', () => {
		it('correctly calculates 2 + 6 + 3', () => {
			expect(calculate(2, add(6), add(3))).to.equal(11);
		});

		it('correctly calculates 10 + 3 / 2 - 4 * 8', () => {
			expect(calculate(10, add(3), divideBy(2), subtract(4), multiplyBy(8))).to.equal(20);
		});
	});
});
