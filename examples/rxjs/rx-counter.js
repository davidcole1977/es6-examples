import Rx from 'rx';

const incrementBtnElem = document.querySelector('[data-role="increment-counter-btn"]');
const decrementBtnElem = document.querySelector('[data-role="decrement-counter-btn"]');
const totalDisplayElem = document.querySelector('[data-role="display-total"]');

const incrementStream = Rx.Observable
	.fromEvent(incrementBtnElem, 'click')
	.map(() => 1);

const decrementStream = Rx.Observable
	.fromEvent(decrementBtnElem, 'click')
	.map(() => -1);

const counterStream = Rx.Observable
	.merge(incrementStream, decrementStream)
	.scan((current, newValue) => current + newValue)
	.startWith(0);

function renderTotal(total) {
	totalDisplayElem.innerHTML = total.toString(10);
}

counterStream.subscribe(renderTotal);
