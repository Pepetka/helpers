const palindrome = require('./palindrome');

describe('palindrome', () => {
	test('palindrome', () => {
		expect(palindrome('аргентина манит негра')).toBe(true);
		expect(palindrome('А в Енисее - синева')).toBe(true);
		expect(palindrome('А лис, он умен — крыса сыр к нему носила')).toBe(true);
		expect(palindrome('As I pee sir, I see Pisa!')).toBe(true);
		expect(palindrome('A Santa dog lived as a devil god at NASA.')).toBe(true);
		expect(palindrome('Golf? No sir, prefer prison flog.')).toBe(true);
	});

	test('not a palindrome', () => {
		expect(palindrome('аргентина манит славянина')).toBe(false);
		expect(palindrome('Just some string')).toBe(false);
	});
});
