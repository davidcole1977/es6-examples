import chai from 'chai';
import { words, sentences, filterQs, max, take } from './dr-boolean-currying-exercises';

const expect = chai.expect;

describe('functional', () => {
	describe('dr boolean\'s mostly adequate guide', () => {
		describe('currying chapter exercises', () => {
			describe('#words', () => {
				it('splits a sentence into an array of individual words', () => {
					expect(words('I like pandas')).to.deep.equal(['I', 'like', 'pandas']);
				});
			});

			describe('#sentences', () => {
				it('acts on an array of sentences', () => {
					const result = sentences(['I like pandas', 'and I also like', 'elephant shrews']);
					expect(result).to.deep.equal([['I', 'like', 'pandas'], ['and', 'I', 'also', 'like'], ['elephant', 'shrews']])
				});
			});

			describe('#filterQs', () => {
				it('removes array elements that do not contain the letter q', () => {
					expect(filterQs(['quokka', 'foobar', 'mosque'])).to.deep.equal(['quokka', 'mosque']);
				});
			});

			describe('#max', () => {
				it('returns the highest value from an array of numbers', () => {
					expect(max([1,45,46,12,34])).to.equal(46);
				});
			});

			describe('#take', () => {
				it('returns the first x entries in a string', () => {
					expect(take(8, 'oh no, I am going to be cruelly truncated!')).to.equal('oh no, I');
				});
			});
		});
	});
});
