import chai from 'chai';
import 'babel-polyfill';
import {simpleGeneratorExample, fibonacciGenerator} from './generators';

const expect = chai.expect;

describe('ES6', () => {
	describe('generators', () => {
		describe('simple generator example', () => {
			it('works', () => {
				const okSoThisWorks = simpleGeneratorExample();

				expect(okSoThisWorks.next().value).to.equal('ok');
				expect(okSoThisWorks.next().value).to.equal('so');
				expect(okSoThisWorks.next().value).to.equal('this');
				expect(okSoThisWorks.next().value).to.equal('works');
			});
		});

		describe('fibonacci generator', () => {
			it('generates numbers in the fibonacci sequence up to 30', () => {
				// fibonacci number up to 30: 0, 1, 1, 2, 3, 5, 8, 13, 21
				const fibonacciIteratorTo30 = fibonacciGenerator(30);

				expect(fibonacciIteratorTo30.next().value).to.equal(1);
				expect(fibonacciIteratorTo30.next().value).to.equal(2);
				expect(fibonacciIteratorTo30.next().value).to.equal(3);
				expect(fibonacciIteratorTo30.next().value).to.equal(5);
				expect(fibonacciIteratorTo30.next().value).to.equal(8);
				expect(fibonacciIteratorTo30.next().value).to.equal(13);
				expect(fibonacciIteratorTo30.next().value).to.equal(21);
			});
		});
	});
});
