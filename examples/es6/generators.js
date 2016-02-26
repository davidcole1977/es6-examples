export function* simpleGeneratorExample() {
	yield 'ok';
	yield 'so';
	yield 'this';
	yield 'works';
};

function iterateFibonacci(sequence) {
	const lastTwoInSequence = sequence.slice(-2);
	let clonedSequence = sequence.slice(0);

	clonedSequence.push(lastTwoInSequence[0] + lastTwoInSequence[1]);
	return clonedSequence;
}

export function* fibonacciGenerator(max) {
	let sequence = [0,1];

	while (sequence[sequence.length - 1] <= max) {
		sequence = iterateFibonacci(sequence);
		yield sequence[sequence.length - 1];
	}
};
