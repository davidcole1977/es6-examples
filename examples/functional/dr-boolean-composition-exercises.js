import * as _ from 'ramda';
import * as accounting from 'accounting';

export const isLastInStock = _.compose(_.prop('in_stock'), _.last);

export const nameOfFirstCar = _.compose(_.prop('name'), _.head);

const _average = xs => _.reduce(_.add, 0, xs) / xs.length;
export const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));

const _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize
export const sanitizeNames = _.map(_.compose(_underscore, _.toLower, _.prop('name')));

const getPrice = _.compose(accounting.formatMoney, _.prop('dollar_value'));
export const availablePrices = _.compose(_.join(', '), _.map(getPrice), _.filter(_.prop('in_stock')));

const append = _.flip(_.concat)
export const fastestCar = _.compose(append(' is the fastest'), _.prop('name'), _.last, _.sortBy(_.prop('horsepower')))
