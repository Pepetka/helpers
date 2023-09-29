const fetchImage = require('./fetchImage');

describe('fetchImage', () => {
	test('fulfilled', () => {
		fetchImage('https://fikiwiki.com/uploads/posts/2022-02/1644881775_11-fikiwiki-com-p-ochen-krasivie-kartinki-na-zastavku-13.jpg')
			.then((img) => {
				expect(img.size).toBeGreaterThan(0);
				expect(img.type).toBe('image/jpeg');
			});
	});

	test('rejected', () => {
		fetchImage('https://someWrongPath.jpg')
			.catch((error) => {
				expect(error.message).toBe('Error');
			});
	});
});
