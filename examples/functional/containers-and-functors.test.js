import chai from 'chai';
import {foo} from './containers-and-functors';

const expect = chai.expect;

describe('functional', () => {
	describe('containerising', () => {
		it('stuff', () => {
			expect(foo()).to.equal('bar');
		});
	});
});
