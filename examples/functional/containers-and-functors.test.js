import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import {Container, Maybe} from './containers-and-functors';

const expect = chai.expect;
chai.use(sinonChai);

describe('functional', () => {
	describe.only('containers and functors', () => {
    let mapSpy;
    const double = (value) => value * 2;

    beforeEach(() => {
      mapSpy = sinon.spy();
    });

		describe('Container', () => {
      it('maps a simple function', () => {
        const ten = Container.of(10);
        ten.map(double).map(mapSpy);
        expect(mapSpy).to.have.been.calledWith(20);
      });
    });

    describe('Maybe', () => {
      describe('instantiated with a valid value', () => {
        it('maps a simple function', () => {
          const ten = Maybe.of(10);
          ten.map(double).map(mapSpy);
          expect(mapSpy).to.have.been.calledWith(20);
        });
      });

      describe('instantiated with a null value', () => {
        it('does not map the supplied function', () => {
          const nothing = Maybe.of(null);
          nothing.map(double).map(mapSpy);
          expect(mapSpy).to.not.have.been.called;
        });
      });
    });
	});
});
