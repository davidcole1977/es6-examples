import Rx from 'rx';

const animalInputElement = document.querySelector('[data-role="animal-input"]');
const animalListElement = document.querySelector('[data-role="animal-shortlist"]');

const getInputValue = (event) => event.target.value;

const createShortlistElement = (animalName) => `<p>${animalName}</p>`;

const parseLookaheadMatches = (response) => response.lookaheadMatches || [];

function requestLookAheadMatches(value) {
	if(value.length < 1) {
		return Promise.resolve({
			query: ''
		}); 
	}

	const request = new XMLHttpRequest();

	request.open('GET', `/requestAnimalNames/${value}`, true);
	request.send();

	return new Promise((resolve, reject) => {
		request.onload = () => {
			resolve(JSON.parse(request.responseText));
		};
	});
}

function renderLookaheadMatches(lookaheadMatches) {
	let htmlString;

	if (lookaheadMatches.length > 0) {
		htmlString = lookaheadMatches.map(createShortlistElement).join('');
	} else {
		htmlString = '<p>No matches found</p>';
	}

	animalListElement.innerHTML = htmlString;
}

function renderWaitingMessage(value) {
	animalListElement.innerHTML = '<p>Fetching responses</p>';

	return value;
}

const lookaheadInputStream = Rx.Observable
	.fromEvent(animalInputElement, 'keyup')
	.map(getInputValue)
	.distinctUntilChanged()
	.map(renderWaitingMessage)
	.debounce(500)
	.flatMap((animalName) => Rx.Observable.fromPromise(requestLookAheadMatches(animalName)))
	.map(parseLookaheadMatches)
	.startWith([]);

lookaheadInputStream.subscribe(renderLookaheadMatches);
