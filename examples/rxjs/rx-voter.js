import Rx from 'rx';

const voterSourceElems = [
	document.querySelectorAll('[name="voter1"]'),
	document.querySelectorAll('[name="voter2"]'),
	document.querySelectorAll('[name="voter3"]')
];

const getEventTargetValue = (event) => event.target.value;

function mapUniqueStringCountsAsObj(array) {
	return array.reduce((valueCountsObj, value) => {
		const key = String(value);
		const newValueCountsObj = Object.assign({}, valueCountsObj);

		if (!key) {
			return valueCountsObj;
		}

		const keyCount = valueCountsObj.hasOwnProperty(key) ? valueCountsObj[key] : 0;

		newValueCountsObj[key] = keyCount + 1;
		return newValueCountsObj;
	}, {});
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

const votingStream = Rx.Observable
	.combineLatest(voterSourceStreams)
	.map(mapUniqueStringCountsAsObj)
	.startWith({});

votingStream.subscribe(renderResults);
