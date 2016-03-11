import * as helpers from './helpers';

export function assembleGreeting(salutation) {
	return function(name) {
		return function(greeting) {
			return salutation + ' ' + name + ', ' + greeting;
		}
	}
}

export function makePartial(originalFunction, ...originalArgs) {
	return (...args) => originalFunction(...originalArgs, ...args);
}

export function curry(func, remainingArgs = func.length) {
	return function (...args) {
		if (args.length >= remainingArgs) {
			return func(...args);
		}

		return curry(makePartial(func, ...args), remainingArgs - args.length);
	};
}
