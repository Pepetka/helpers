const objectWithMethods = require('./objectWithMethods');

describe('objectWithMethods', () => {
	test('set/get test', () => {
		expect(objectWithMethods.bookName).toBe('bookName');
		objectWithMethods.bookName = 'newBookName';
		expect(objectWithMethods.bookName).toBe('newBookName');

		expect(objectWithMethods.bookAuthor).toBe('Author');
		objectWithMethods.bookAuthor = 'NewAuthor';
		expect(objectWithMethods.bookAuthor).toBe('NewAuthor');

		expect(objectWithMethods.bookCreatedAt).toBe('2023');
		objectWithMethods.bookCreatedAt = '3023';
		expect(objectWithMethods.bookCreatedAt).toBe('3023');
	});
});
