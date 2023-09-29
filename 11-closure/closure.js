/**
 * Функция, возвращающая функцию, замыкающую переменные внешней функции
 * @param someVar - замыкаемая переменная
 * @returns {function(): *} - возвращаемая функция
 */
function closure(someVar) {
	return function() {
		return someVar;
	}
}

module.exports = closure;
