export function fibonacciMaker(sequenceLength, sequence = [0, 1]) {
	if(sequenceLength < 3) {
		return sequence.slice(0, sequenceLength);
	}

	let clonedSequence = sequence.slice(0);
	const lastTwoInSequence = sequence.slice(-2);

	clonedSequence.push(lastTwoInSequence[0] + lastTwoInSequence[1]);

	if (clonedSequence.length < sequenceLength) {
		return fibonacciMaker(sequenceLength, clonedSequence);
	} else {
		return clonedSequence;
	}
}
