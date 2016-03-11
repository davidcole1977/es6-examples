import chai from 'chai';
import {tellMeWhatAnimalsILike, joinThreeArgs} from './rest-paramaters-spread-operators';

const expect = chai.expect;

describe('ES6', () => {
	describe('rest parameters', () => {
		it('uses rest parameters to capture multiple arguments as an array', () => {
			const animalSentence = tellMeWhatAnimalsILike('hippos', 'tigers', 'quokkas', 'bears');
			expect(animalSentence).to.equal('You like hippos, tigers, quokkas, bears.')
		});
	});

	describe('spread operators', () => {
		it('can be used in a function call', () => {
			const testArray = ['a', 'b', 'c'];
			expect(joinThreeArgs(...testArray)).to.equal('a, b, c');
		});

		it('can be used in an array literal', () => {
			const testArray = ['a', 'b', 'c'];
			expect([...testArray, 'd', 'e', 'f']).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
		});
	});
});
