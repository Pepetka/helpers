/**
 * Функция, изменяющая окончание слов в зависимости от падежа
 * @param num - количество чего-либо
 * @param form1 - форма слова для количества равного 1
 * @param form2 - форма слова для количества равного 2
 * @param form3 - форма слова для количества равного 11
 * @returns {string} - строку вида '${количество} ${слово в нужной форме}'
 */
function wordEndings(num, [form1, form2, form3]) {
	let lastDigit = num % 10;
	let lastTwoDigits = num % 100;

	if (lastDigit === 1 && lastTwoDigits !== 11) {
		return `${num} ${form1}`;
	} else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
		return `${num} ${form2}`;
	} else {
		return `${num} ${form3}`;
	}
}

module.exports = wordEndings;
