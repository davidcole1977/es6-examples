import * as helpers from './helpers';

export function assembleGreeting(salutation) {
	return function(name) {
		return function(greeting) {
			return salutation + ' ' + name + ', ' + greeting;
		}
	}
}

export function curry(originalFunction) {
	const predefinedArgs = helpers.argsToArray(arguments).slice(1);

	return function() {
		const args = predefinedArgs.concat(helpers.argsToArray(arguments));

		return originalFunction.apply(null, args);
	}
}
