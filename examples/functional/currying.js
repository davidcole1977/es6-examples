export function assembleGreeting(salutation) {
	return function(name) {
		return function(greeting) {
			return salutation + ' ' + name + ', ' + greeting;
		}
	}
}

function argsToArray(args) {
	return Array.prototype.slice.call(args);
}

export function curry(originalFunction) {
	const predefinedArgs = argsToArray(arguments).slice(1);

	return function() {
		const args = predefinedArgs.concat(argsToArray(arguments));

		return originalFunction.apply(null, args);
	}
}
