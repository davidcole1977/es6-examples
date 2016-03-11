function getLast(items) {
	return items[items.length - 1];
}

function getHead(items) {
	return items.slice(0, -1);
}

export function tellMeWhatAnimalsILike(...animals) {
	const animalsFragment = animals.join(', ');
	return `You like ${animalsFragment}.`;
};

export function joinThreeArgs(arg1, arg2, arg3) {
	return arg1 + ', ' + arg2 + ', ' + arg3;
}
