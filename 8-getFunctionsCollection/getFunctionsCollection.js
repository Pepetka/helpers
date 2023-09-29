/**
 * Функция, возвращающая функцию, которая вернет массив результатов выполнения функций из массива, переданного
 * аргументом во внешнюю функцию
 * @param funcArr - массив функций, результаты выполнения которых необходимо собрать
 * @returns {function(): Promise<*[]>} - функция, возвращающая массив результатов вызова функций
 */
function getFunctionsCollection(funcArr) {
	return async () => {
		const results = [];

		for (const func of funcArr) {
			const result = await func();
			results.push(result);
		}

		return results;
	}
}

module.exports =  getFunctionsCollection;
