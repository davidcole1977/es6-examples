function getLast(items) {
	return items[items.length - 1];
}

function getHead(items) {
	return items.slice(0, -1);
}

export function makeListSentenceFragment(items, separator = ', ', finalSeparator = ' and ') {
	const allItemsButLast = getHead(items);
	const initialFragment = allItemsButLast.join(separator);

	const finalItem = getLast(items);
	const finalFragment = finalSeparator.concat(finalItem);
	
	return initialFragment.concat(finalFragment);
}
