const functionsCollection = require('./functionsCollection');

describe('functionsCollection', () => {
	const callingOrder = [];
	const funcArr = [
		() => {
			callingOrder.push(1);
		},
		async () => {
			await new Promise((resolve) => {
				setTimeout(() => {
					callingOrder.push(2);
					resolve();
				}, 2000);
			});
		},
		() => {
			callingOrder.push(3);
		},
		async () => {
			await new Promise((resolve) => {
				setTimeout(() => {
					callingOrder.push(4);
					resolve();
				}, 1000);
			});
		}
	]
	test('', async () => {
		await functionsCollection(funcArr);
		expect(callingOrder).toEqual([1, 2, 3, 4]);
	});
});
