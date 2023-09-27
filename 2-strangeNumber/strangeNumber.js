"use strict";

/**
 * функция, возвращающая массив делителей числа
 * @param number - число, делители которого необходимо найти
 * @returns {number[]} - массив делителей
 */
function getDivisors(number) {
	const divisors = [1];

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		}
	}

	return divisors;
}

/**
 * Функция, проверяющая число на "странность" (равенство сумме делителей)
 * @param number - число, которое проверяется на "странность"
 * @returns {boolean} - флаг, показывающий "странное" ли число
 */
function strangeNumber(number) {
	// получаем сумму делителей числа
	const divisorsSum = getDivisors(number).reduce((acc, divisor) => acc + divisor, 0)

	// возвращаем результат сравнения числа с суммой его делителей
	return number === divisorsSum;
}

module.exports = strangeNumber;
