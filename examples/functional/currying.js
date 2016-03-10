import * as helpers from './helpers';

export function assembleGreeting(salutation) {
	return function(name) {
		return function(greeting) {
			return salutation + ' ' + name + ', ' + greeting;
		}
	}
}

export function curry(originalFunction, ...originalArgs) {
	return (...args) => originalFunction.apply(null, originalArgs.concat(args));
}
