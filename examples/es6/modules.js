export let aSimpleVariable = 'a simple string value';

function aSimpleFunction() {
	return 'foo';
}

export {aSimpleFunction as anotherFunctionName};

export default {
	foo: 'bar'
};
