const closure = require('./closure');

describe('closure', () => {
	test('closure test', () => {
		const func = closure(12);

		expect(func()).toBe(12);
	});
});
