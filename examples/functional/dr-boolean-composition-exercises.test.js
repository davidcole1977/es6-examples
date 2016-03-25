import chai from 'chai';
import { isLastInStock, nameOfFirstCar, averageDollarValue, sanitizeNames, availablePrices, fastestCar } from './dr-boolean-composition-exercises';

const expect = chai.expect;

const CARS = [{
	name: 'Ferrari FF',
	horsepower: 660,
	dollar_value: 700000,
	in_stock: true,
}, {
	name: 'Spyker C12 Zagato',
	horsepower: 650,
	dollar_value: 648000,
	in_stock: false,
}, {
	name: 'Jaguar XKR-S',
	horsepower: 550,
	dollar_value: 132000,
	in_stock: false,
}, {
	name: 'Audi R8',
	horsepower: 525,
	dollar_value: 114200,
	in_stock: false,
}, {
	name: 'Aston Martin One-77',
	horsepower: 750,
	dollar_value: 1850000,
	in_stock: true,
}, {
	name: 'Pagani Huayra',
	horsepower: 700,
	dollar_value: 1300000,
	in_stock: false,
}];

describe('functional', () => {
	describe('dr boolean\'s mostly adequate guide', () => {
		describe('composition chapter exercises', () => {
			describe('#isLastInStock', () => {
				it('returns false if the last car in the list is not in stock', () => {
					expect(isLastInStock(CARS)).to.be.false;
				});
			});

			describe('#nameOfFirstCar', () => {
				it('returns the name of the first car in the list', () => {
					expect(nameOfFirstCar(CARS)).to.equal(CARS[0].name);
				});
			});

			describe('#averageDollarValue', () => {
				it('returns the average dollar value of all the cars in the list', () => {
					expect(averageDollarValue(CARS)).to.equal(790700);
				});
			});

			describe('#sanitizeNames', () => {
				it('returns an array of sanitised names of the cars in the list', () => {
					expect(sanitizeNames(CARS)).to.deep.equal([
						'ferrari_ff',
						'spyker_c12_zagato',
						'jaguar_xkr_s',
						'audi_r8',
						'aston_martin_one_77',
						'pagani_huayra'
					]);
				});
			});

			describe('#availablePrices', () => {
				it('returns a list of prices for cars in stock as a string', () => {
					expect(availablePrices(CARS)).to.equal('$700,000.00, $1,850,000.00');
				});
			});

			describe('#fastestCar', () => {
				it('returns a statement including the name of the fastest car in the list', () => {
					expect(fastestCar(CARS)).to.equal('Aston Martin One-77 is the fastest');
				});
			});
		});
	});
});
