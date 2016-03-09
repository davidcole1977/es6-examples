const bar = 'bar';
const hoo = 'hoo';
const getThree = () => 3;
const ten = 10;
const simpleObj = {foo: 'bar'};

function makeUpperCase(value) {
	return value.toUpperCase()
}

function spliceArrays(arrayA, arrayB) {
	let splicedArray = [];

	arrayA.forEach((value, index) => {
		splicedArray.push(value);

		if (arrayB[index]) {
			splicedArray.push(arrayB[index]);
		}
	});

	return splicedArray;
}

function transformUpperCase (tplFragments, ...values) {
	const upperTplFragments = tplFragments.map(makeUpperCase);
	const upperValues = values.map(makeUpperCase);

	return spliceArrays(upperTplFragments, upperValues).join('');
};

export const simpleTplString = `foo ${bar}`;
export const tplStringWithExpression = `foo ${(4 + getThree()).toString()}`;
export const tplStringWithBackticks = `foo \` \$ \{ \}`;
export const tplStringWithConvertedObjAndNumber = `foo ${ten} ${simpleObj}`;
export const taggedTplString = transformUpperCase`foo ${bar} woo ${hoo}`;
