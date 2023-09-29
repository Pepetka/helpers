/**
 * Функция, вызывающая функции из массива, переданного аргументом, строго после завершения предыдущей
 * @param funcArr - массив функций
 * @returns {Promise<void>} - промис выполнения всех переданных функций
 */
async function functionsCollection(funcArr) {
	let counter = 0;
	for (const func of funcArr) {
		await func();
		console.log(++counter);
	}
}

module.exports = functionsCollection;
