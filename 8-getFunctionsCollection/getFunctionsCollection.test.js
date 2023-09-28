const getFunctionsCollection = require('./getFunctionsCollection');

describe('getFunctionsCollection', () => {
	const funcArr = [
		() => {
			return 1;
		},
		async () => {
			return await new Promise((resolve) => {
				setTimeout(() => {
					resolve(2);
				}, 2000);
			});
		},
		() => {
			return 3;
		},
		async () => {
			return await new Promise((resolve) => {
				setTimeout(() => {
					resolve(4);
				}, 1000);
			});
		}
	]
	test('test calling order', async () => {
		const functionsCollection = getFunctionsCollection(funcArr);
		const results = await functionsCollection();

		expect(results).toEqual([1, 2, 3, 4]);
	});
});
