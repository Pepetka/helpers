/**
 * Функция, конвертирующая JSON в строку
 * @param object - объект, который необходим конвертировать в строку
 * @returns {string} - возвращаем строку
 */
function jsonStringify(object) {
	// проверка на строку
	if (typeof object === 'string') {
		return `"${object}"`;
	}

	// проверка на типы, приводимые к null
	if (Number.isNaN(object) || object === null || object === Infinity) {
		return String(null);
	}

	// проверка на число и логическое значение
	if (typeof object === 'number' || typeof object === 'boolean') {
		return String(object);
	}

	// проверка на объект даты
	if (object instanceof Date) {
		return `"${object.toISOString()}"`;
	}

	// проверка на массив
	if (Array.isArray(object)) {
		const elements = object
			.map((element) => {
				// возвращаем null для символов, функций и undefined
				if (typeof element === 'symbol' || typeof element === 'function' || typeof element === 'undefined') {
					return String(null);
				}

				// для каждого элемента массива вызываем рекурсию
				return `${jsonStringify(element)}`;
			})
			.join(',');

		return `[${elements}]`;
	}

	// проверка на объект
	if (typeof object === 'object') {
		// проверка на наличие в объекте метода toJSON, при наличии возвращаем результат его выполнения
		if (object.hasOwnProperty('toJSON') && typeof object.toJSON === 'function') {
			return `${object.toJSON()}`;
		}

		// проверка на объект числа и логического значения
		if (object instanceof Number || object instanceof Boolean) {
			return String(object.valueOf());
		}

		// проверка на объект строки
		if (object instanceof String) {
			return `"${object}"`
		}

		const properties = Object.entries(object)
			.reduce((acc, [key, value]) => {
				// игнорируем символы, функции и undefined
				if (typeof value === 'symbol' || typeof value === 'function' || typeof value === 'undefined') {
					return acc;
				}

				// для каждого не игнорируемого поля вызываем рекурсию
				return [...acc, `"${key}":${jsonStringify(value)}`];
			}, [])
			.join(',');

		return `{${properties}}`
	}

	return undefined;
}

module.exports = jsonStringify;
