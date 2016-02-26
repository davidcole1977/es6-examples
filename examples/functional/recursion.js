export function makeFibonacciSequence(sequenceLength, sequence = [0, 1]) {
	if(sequenceLength <= 2) {
		return sequence.slice(0, sequenceLength);
	}

	if (sequence.length < sequenceLength - 1) {
		return makeFibonacciSequence(sequenceLength, iterateFibonacciSequence(sequence));
	} else {
		return iterateFibonacciSequence(sequence);
	}
}

function iterateFibonacciSequence(sequence) {
	return safePush(sequence, sumLastTwo(sequence));
}

function sumLastTwo(sequence) {
	return sequence.slice(-2).reduce((a, b) => a + b);
}

function safePush(array, value) {
	return array.slice(0).concat([value]);
}
