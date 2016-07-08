import Rx from 'rx';

function requestAnimalNames(animalInput) {
	const request = new XMLHttpRequest();

	request.open('GET', `/requestAnimalNames/${animalInput}`, true);
	request.send();

	return new Promise((resolve, reject) => {
		request.onload = () => {
			resolve(JSON.parse(request.responseText));
		};
	});
}

function getInputValue(event) {
	return event.target.value;
}

const animalInputElement = document.querySelectorAll('[data-role="animal-input"]');

const animalInputStream = Rx.Observable
	.fromEvent(animalInputElement, 'keyup')
	.debounce(500)
	.map(getInputValue)
	.map(logResponse)
	.flatMap((animalName) => Rx.Observable.fromPromise(requestAnimalNames(animalName)))
	.map(logResponse);

function logResponse(response) {
	console.log(response);

	return response;
}

animalInputStream.subscribe(requestAnimalNames);
