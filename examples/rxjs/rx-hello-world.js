import Rx from 'rx';

const helloContainer = document.querySelector('[data-role="hello-container"]');

const helloStream = Rx.Observable.just('hello good people of Javascript land! This totally worked :)');

function renderMessage(message) {
	helloContainer.innerHTML = message;
}

helloStream.subscribe(renderMessage);