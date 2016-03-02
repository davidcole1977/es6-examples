import * as helpers from './helpers';

export function compose() {
	const funcs = helpers.argsToArray(arguments);

	return function(originalValue) {
		return funcs.reduce((newValue, func, funcsArray) => {
			return func(newValue);
		}, originalValue);
	}

	return function(originalValue) {
		return originalValue;
	}
}
