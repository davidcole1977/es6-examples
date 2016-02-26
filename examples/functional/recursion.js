export function makeFibonacciSequence(sequenceLength, sequence = [0, 1]) {
	if(sequenceLength <= 2) {
		return sequence.slice(0, sequenceLength);
	}

	const interatedSequence = sequence.concat(sumLastTwo(sequence));

	if (sequence.length < sequenceLength - 1) {
		return makeFibonacciSequence(sequenceLength, interatedSequence);
	} else {
		return interatedSequence;
	}
}

function sumLastTwo(sequence) {
	return sequence.slice(-2).reduce((a, b) => a + b);
}
