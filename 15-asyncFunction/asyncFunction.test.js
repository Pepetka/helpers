const asyncFunction = require('./asyncFunction');

describe('asyncFunction', () => {
	test('test async', async () => {
		const asyncFn = () => new Promise((resolve) => {
			setTimeout(() => resolve('some response'), 1000);
		});
		const result = await asyncFunction(asyncFn);

		expect(result).toBe('some response');
	});
});
