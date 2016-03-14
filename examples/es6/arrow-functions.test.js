import chai from 'chai';
import {increment, sum, getFoo, getBar} from './arrow-functions';

const expect = chai.expect;

describe('ES6', () => {
	describe.only('arrow functions', () => {
		describe('takes a single argument and has a one line return statement', () => {
			it('does not need parentheses, curly brackets or a return statement', () => {
				expect(increment(11)).to.equal(12);
			});
		});

		describe('takes several arguments and has multiple lines', () => {
			it('needs parentheses, curly brackets and a return statement', () => {
				expect(sum(11, 12)).to.equal(23);
			});
		});

		describe('takes no arguments', () => {
			it('needs parentheses or an underscore in place of arguments', () => {
				expect(getFoo()).to.equal('foo');
				expect(getBar()).to.equal('bar');
			});
		});
	});
});
