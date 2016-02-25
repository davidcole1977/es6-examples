import chai from 'chai';

import {aSimpleVariable as anotherVariableName, anotherFunctionName} from './modules';
import defaultObject from './modules';
import * as nameSpaceObject from './modules';

const expect = chai.expect;

describe('modules', () => {
	describe('some very contrived examples', () => {
		it('exports a simple function with the name changed on export', () => {
			expect(anotherFunctionName()).to.equal('foo');
		});

		it('exports a simple variable with the name changed on import', () => {
			expect(anotherVariableName).to.equal('a simple string value');
		});

		it('exports a default object', () => {
			expect(defaultObject.foo).to.equal('bar');
		});

		it('imports as a nameSpaceObject', () => {
			expect(nameSpaceObject.anotherFunctionName()).to.equal('foo');
			expect(nameSpaceObject.aSimpleVariable).to.equal('a simple string value');
			expect(nameSpaceObject.default.foo).to.equal('bar');
		});
	});
});
