const bar = 'bar';
const hoo = 'hoo';
const getThree = () => 3;
const ten = 10;
const simpleObj = {foo: 'bar'};

function makeUpperCase(value) {
	return value.toUpperCase()
}

function mixStringArrays(arrayA, arrayB) {
	return arrayA.map((value, index) => {
		let bValue = (arrayB[index]) ? arrayB[index] : '';
		return value.concat(bValue);
	});
}

function transformUpperCase (tplFragments, ...values) {
	const upperTplFragments = tplFragments.map(makeUpperCase);
	const upperValues = values.map(makeUpperCase);

	return mixStringArrays(upperTplFragments, upperValues).join('');
};

export const simpleTplString = `foo ${bar}`;
export const tplStringWithExpression = `foo ${(4 + getThree()).toString()}`;
export const tplStringWithBackticks = `foo \` \$ \{ \}`;
export const tplStringWithConvertedObjAndNumber = `foo ${ten} ${simpleObj}`;
export const taggedTplString = transformUpperCase`foo ${bar} woo ${hoo}`;
