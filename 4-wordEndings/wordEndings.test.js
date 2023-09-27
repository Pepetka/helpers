const wordEndings = require('./wordEndings');

describe('wordEndings', () => {
	const forms = ['товар', 'товара', 'товаров'];

	test('1 form', () => {
		expect(wordEndings(1, forms)).toBe(`1 ${forms[0]}`);
		expect(wordEndings(21, forms)).toBe(`21 ${forms[0]}`);
		expect(wordEndings(101, forms)).toBe(`101 ${forms[0]}`);
	});

	test('2 form', () => {
		expect(wordEndings(2, forms)).toBe(`2 ${forms[1]}`);
		expect(wordEndings(3, forms)).toBe(`3 ${forms[1]}`);
		expect(wordEndings(124, forms)).toBe(`124 ${forms[1]}`);
	});

	test('3 form', () => {
		expect(wordEndings(0, forms)).toBe(`0 ${forms[2]}`);
		expect(wordEndings(5, forms)).toBe(`5 ${forms[2]}`);
		expect(wordEndings(11, forms)).toBe(`11 ${forms[2]}`);
		expect(wordEndings(111, forms)).toBe(`111 ${forms[2]}`);
	});
});
