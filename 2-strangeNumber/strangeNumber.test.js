const strangeNumber = require('./strangeNumber');

describe('strangeNumber', () => {
	test('the number is strange', () => {
		expect(strangeNumber(6)).toBe(true);
		expect(strangeNumber(28)).toBe(true);
		expect(strangeNumber(496)).toBe(true);
		expect(strangeNumber(8128)).toBe(true);
	});

	test('the number is not strange', () => {
		expect(strangeNumber(8)).toBe(false);
		expect(strangeNumber(30)).toBe(false);
		expect(strangeNumber(500)).toBe(false);
		expect(strangeNumber(8130)).toBe(false);
	});
});
