import Rx from 'rx';
import _ from 'lodash';

const voterSourceElems = [
	document.querySelectorAll('[name="voter1"]'),
	document.querySelectorAll('[name="voter2"]'),
	document.querySelectorAll('[name="voter3"]')
];

const getEventTargetValue = (event) => event.target.value;
const notNull = (value) => value !== null;

function getUniqueValuesCountsAsObj(array) {
	const emptyUniquesObj = {};
	_.uniq(array).forEach((value) => emptyUniquesObj[value] = 0);

	return array.reduce((countsObj, value) => {
		const cloneCountObj = Object.assign({}, countsObj);
		cloneCountObj[value] += 1;

		return cloneCountObj;
	}, emptyUniquesObj);
}

function renderResults(results) {
	document.querySelector('[data-role="results-bananas"]').innerHTML = results.bananas || 0;
	document.querySelector('[data-role="results-strawberries"]').innerHTML = results.strawberries || 0;
	document.querySelector('[data-role="results-mango"]').innerHTML = results.mango || 0;
}

function createVoterStream(inputElem) {
	return Rx.Observable
		.fromEvent(inputElem, 'click')
		.map(getEventTargetValue)
		.startWith(null);
}

const voterSourceStreams = voterSourceElems.map((inputElem) => createVoterStream(inputElem));

const combinedVotes = Rx.Observable
	.merge(...voterSourceStreams);

const votingStream = combinedVotes
	.map(() => null)
	.withLatestFrom(
		...voterSourceStreams,
		(...values) => values.filter(notNull)
	)
	.map(getUniqueValuesCountsAsObj);

votingStream.subscribe(renderResults);
