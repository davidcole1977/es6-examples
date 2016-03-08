import chai from 'chai';
import {simpleTplString, tplStringWithExpression, tplStringWithBackticks, tplStringWithConvertedObjAndNumber, taggedTplString} from './template-strings';

const expect = chai.expect;

describe('es6', () => {
	describe('template strings', () => {
		describe('simple template strings', () => {
			it('makes a template string with simple variable substitution', () => {
				expect(simpleTplString).to.equal('foo bar');
			});

			it('makes a template string with a simple expression involving a function call', () => {
				expect(tplStringWithExpression).to.equal('foo 7');
			});

			it('needs to escape backticks, curly brakcets and dollars', () => {
				expect(tplStringWithBackticks).to.equal('foo ` $ { }');
			});

			it('converts objects and numbers in template expressions to strings', () => {
				expect(tplStringWithConvertedObjAndNumber).to.equal('foo 10 [object Object]');
			});
		});
		
		describe('tagged templates', () => {
			it('transforms a tagged template string', () => {
				expect(taggedTplString).to.equal('FOO BAR WOO HOO');
			});
		});
	});
});
