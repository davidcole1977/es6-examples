import chai from 'chai';
import {aSimpleVariable} from './modules';
import {aSimpleFunction} from './modules';

const expect = chai.expect;

describe('modules', () => {
	it('exports a simple variable', function() {
		expect(aSimpleVariable).to.equal('a simple string value');
	});

	it('exports a simple function', function() {
		expect(aSimpleFunction()).to.equal('foo');
	});
});
