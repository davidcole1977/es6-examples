import chai from 'chai';
import {makeListSentenceFragment} from './defaults';

const expect = chai.expect;

describe('ES6', () => {
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
