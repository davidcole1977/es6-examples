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

function addOperation(operation, startValue) {
	return function(value) {
		return getOperations(operation(startValue, value));
	}
}

const getOperations = function(startValue) {
	return {
		add: addOperation(operations.add, startValue),
		subtract: addOperation(operations.subtract, startValue),
		divideBy: addOperation(operations.divideBy, startValue),
		multiplyBy: addOperation(operations.multiplyBy, startValue),
		raiseToThePowerOf: addOperation(operations.raiseToThePowerOf, startValue),
		result: startValue
	}
}

export function take(startValue) {
	return getOperations(startValue);
}
