export function compose(...funcs) {
	return function(originalValue) {
		return funcs.reduce((newValue, func, funcsArray) => {
			return func(newValue);
		}, originalValue);
	}
}
