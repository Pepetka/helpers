/**
 * Функция, возвращающая результат выполнения асинхронной функции, передаваемой в качестве аргумента
 * @param asyncFn - асинхронная функция
 * @returns {Promise<*>} - возвращаем промис, разрешающийся результатом выполнения функции, переданной аргументом
 */
async function asyncFunction(asyncFn) {
	const response = await asyncFn();

	return response;
}

module.exports = asyncFunction;
