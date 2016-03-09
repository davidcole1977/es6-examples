import chai from 'chai';
import {tellMeWhatAnimalsILike, makeListSentenceFragment} from './rest-paramaters-and-defaults';

const expect = chai.expect;

describe('ES6', () => {
	describe('rest parameters', () => {
		it('uses rest parameters to capture multiple arguments', () => {
			const animalSentence = tellMeWhatAnimalsILike('You like', 'hippos', 'tigers', 'quokkas', 'bears');
			expect(animalSentence).to.equal('You like hippos, tigers, quokkas and bears.')
		});
	});

	describe('defaults', () => {
		it('uses default parameters if arguments aren\'t specified', () => {
			const sentenceListFragment = makeListSentenceFragment(['foo', 'bar', 'woo']);
			expect(sentenceListFragment).to.equal('foo, bar and woo');
		});

		it('uses arguments specified in place of defaults', () => {
			const sentenceListFragment = makeListSentenceFragment(['foo', 'bar', 'woo'], '*', '-');
			expect(sentenceListFragment).to.equal('foo*bar-woo');
		});
	});
});
