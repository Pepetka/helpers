const sortObjectsTest = require('./sortObjects');

describe('sortObjects', () => {
	const testArr = [
		{
			name: 'Tom',
			age: 22,
		},
		{
			name: 'Ann',
			age: 18,
		},
		{
			name: 'Oleg',
			age: 20,
		},
		{
			name: 'Ann',
			age: 20,
		},
		{
			name: 'Bob',
			age: 20,
		},
		{
			name: 'Addy',
			age: 18,
		},
	]

	test('', () => {
		expect(sortObjectsTest(testArr)).toEqual([
			{
				name: 'Addy',
				age: 18,
			},
			{
				name: 'Ann',
				age: 18,
			},
			{
				name: 'Ann',
				age: 20,
			},
			{
				name: 'Bob',
				age: 20,
			},
			{
				name: 'Oleg',
				age: 20,
			},
			{
				name: 'Tom',
				age: 22,
			},
		]);
	});
});
