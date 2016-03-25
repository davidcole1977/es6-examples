import * as _ from 'ramda';

// all ramda functions come pre-curried, so we're returning partially applied functions below

export const words = _.split(' ');

export const sentences = _.map(words);

export const filterQs = _.filter(_.test(/q/i));

const _keepHighest = (x, y) => {
	return (x >= y) ? x : y;
};

export const max = _.reduce(_keepHighest, -Infinity);

export const take = _.slice(0);
