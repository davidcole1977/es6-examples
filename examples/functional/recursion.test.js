import chai from 'chai';
import {makeFibonacciSequence} from './recursion';

const expect = chai.expect;

describe('functional', () => {
	describe('recursion', () => {
		describe('fibonacci maker', () => {
			it('creates a fibonacci sequence of 1 number', () => {
				expect(makeFibonacciSequence(1)).to.deep.equal([0]);
			});

			it('creates a fibonacci sequence of 2 numbers', () => {
				expect(makeFibonacciSequence(2)).to.deep.equal([0, 1]);
			});

			it('creates a fibonacci sequence of 3 numbers', () => {
				expect(makeFibonacciSequence(3)).to.deep.equal([0, 1, 1]);
			});

			it('creates a fibonacci sequence of 10 numbers', () => {
				expect(makeFibonacciSequence(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
			});
		});
	});
});
