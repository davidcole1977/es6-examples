// operations
const operations = {
	add(startValue, value) {
		return startValue + value;
	},
	subtract(startValue, value) {
		return startValue - value;
	},
	divideBy(startValue, value) {
		return startValue / value;
	},
	multiplyBy(startValue, value) {
		return startValue * value;
	},
	raiseToThePowerOf(startValue, value) {
		return Math.pow(startValue, value);
	}
};

function makeOperation(operation, startValue) {
	return function(value) {
		return getOperations(operation(startValue, value));
	}
}

const getOperations = function(startValue) {
	return {
		add: makeOperation(operations.add, startValue),
		subtract: makeOperation(operations.subtract, startValue),
		divideBy: makeOperation(operations.divideBy, startValue),
		multiplyBy: makeOperation(operations.multiplyBy, startValue),
		raiseToThePowerOf: makeOperation(operations.raiseToThePowerOf, startValue),
		result: startValue
	}
}

export function take(startValue) {
	return getOperations(startValue);
}
