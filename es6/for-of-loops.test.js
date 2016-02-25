import chai from 'chai';
import ForOf from './for-of-loops';

const expect = chai.expect;

describe('for of loops', () => {
	describe('simple mapping function example', () => {
		it('works', () => {
			expect(ForOf.mapDouble([1,2,3])).to.deep.equal([2,4,6]);
		});
	});
});
