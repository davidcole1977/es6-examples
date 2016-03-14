const bar = Symbol();
const fooSymbol = Symbol.for('foo');

const foo = {};
foo[bar] = 'woo';
foo[fooSymbol] = 'zoo';

export {foo, bar};
