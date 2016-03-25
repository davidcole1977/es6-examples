import chai from 'chai';
import {foo} from './collections';

const expect = chai.expect;

describe('ES6', () => {
	xdescribe('keyed collections (abandoned until I can figure out how to get babel support)', () => {
		describe('Set', () => {
			it('can be created from a string or array', () => {
				const mySetFromString = new Set('foo');
				const mySetFromArray = new Set([1, 2, 3]);

				expect(mySetFromString.length).to.equal(3);
				expect(mySetFromArray.length).to.equal(3);
			});
		});
		
		describe('Map', () => {
			it('stuff');
		});

		describe('WeakSet', () => {
			it('stuff');
		});

		describe('WeakMap', () => {
			it('stuff');
		});
	});
});
