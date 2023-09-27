"use strict";

/**
 * Функция, проверяющая строку на палиндром
 * @param string - проверяемая строка
 * @returns {boolean} - флаг, показывающий является ли строка палиндромом
 */
function palindrome(string) {
	// убираем из строки все небуквенные символы
	const onlyLetters = string.replace(/[^a-zA-Zа-яА-Я]/g, '').toLowerCase();

	// возвращаем результат сравнения строки с ее обратной строкой
	return onlyLetters === onlyLetters.split('').reverse().join('');
}

module.exports = palindrome;
