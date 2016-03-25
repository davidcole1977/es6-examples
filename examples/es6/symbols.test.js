import chai from 'chai';
import {foo, bar} from './symbols';

const expect = chai.expect;

describe('ES6', () => {
	describe('symbols', () => {
		it('can be used as a unique property key, which is accessed using square brackets', () => {
			const foo = {
				bar: 'baz'
			};

			const bar = Symbol();
			foo[bar] = 'moo';

			expect(foo.bar).to.equal('baz');
			expect(foo[bar]).to.equal('moo');
		});

		it('symbols can be exported', () => {
			expect(foo[bar]).to.equal('woo');
		});

		it('as a type of \'symbol\'', () => {
			const mySymbol = Symbol();

			expect(mySymbol).to.be.a('symbol');
		});

		it('symbol properties are not exposed when enumerating an object using normal methods', () => {
			const foo = {
				bar: 'baz'
			};

			const bar = Symbol();
			foo[bar] = 'moo';

			const propsByObjectKeys = Object.keys(foo).join(',');
			const propsByObjectOwnPropertyNames = Object.getOwnPropertyNames(foo).join(',');

			expect(propsByObjectKeys).to.equal('bar');
			expect(propsByObjectOwnPropertyNames).to.equal('bar');
		});

		describe('Symbol.for()', () => {
			it('adds and retrieves a symbol in the global registry', () => {
				const fooSymbol = Symbol.for('foo');

				expect(foo[fooSymbol]).to.equal('zoo');
			});
		});

		describe('Symbol.keyFor()', () => {
			it('retrieves the key for a symbol from the global registry', () => {
				const fooSymbol = Symbol.for('foo');

				expect(Symbol.keyFor(fooSymbol)).to.equal('foo');
			});
		});
	});
});
