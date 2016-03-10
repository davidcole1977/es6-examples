import chai from 'chai';
import {take} from './fluent-calculator';

const expect = chai.expect;

describe('functional', () => {
	describe('fluent calculator', () => {
		it('adds several values', () => {
			const result = take(10).add(5).add(3).add(20).result;
			expect(result).to.equal(38);
		});

		it('adds, subtracts, divides and multiplies several values', () => {
			const result = take(10).subtract(2).divideBy(4).multiplyBy(10).result;
			expect(result).to.equal(20);
		});

		it('adds, subtracts and raises to the power of x', () => {
			const result = take(10).subtract(2).divideBy(2).raiseToThePowerOf(4).result;
			expect(result).to.equal(256);
		});
	});
});
