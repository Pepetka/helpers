/**
 * Функция, конвертирующая строку в JSON
 * @param str - конвертируемая строка
 * @returns {{}|[]|string|number|boolean|null} - возвращаем значение типа, зависящего от вида строки
 */
function jsonParse(str) {
	let index = 0;

	/**
	 * Функция, определяющая в какую структуру необходимо конвертировать подстроку
	 * @returns {{}|[]|string|number|boolean|null} - возвращаем значение типа, зависящего от вида подстроки
	 */
	function parseValue() {
		const char = str[index];

		if (char === ' ') {
			index++;
			return parseValue();
		}

		if (char === '{') {
			return parseObject();
		}

		if (char === '[') {
			return parseArray();
		}

		if (char === '"') {
			return parseString();
		}

		if (char === '-' || (char >= '0' && char <= '9')) {
			return parseNumber();
		}

		if (str.substring(index, index + 4) === 'true') {
			index += 4;
			return true;
		}

		if (str.substring(index, index + 5) === 'false') {
			index += 5;
			return false;
		}

		if (str.substring(index, index + 4) === 'null') {
			index += 4;
			return null;
		}
	}

	/**
	 * Функция, вызываемая для конвертации объекта
	 * @returns {{}} - возвращаем объект
	 */
	function parseObject() {
		const result = {};
		index++;

		while (str[index] !== '}') {
			if (str[index] === ' ') {
				index++;
				continue;
			}

			const key = parseString();
			index++;

			const value = parseValue();
			result[key] = value;

			if (str[index] === ',') {
				index++;
			}
		}

		index++;
		return result;
	}

	/**
	 * Функция, вызываемая для конвертации массива
	 * @returns {*[]} - возвращаем массив
	 */
	function parseArray() {
		const result = [];
		index++;

		while (str[index] !== ']') {
			const value = parseValue();
			result.push(value);

			if (str[index] === ',') {
				index++;
			}
		}

		index++;
		return result;
	}

	/**
	 * Функция, вызываемая для конвертации строки
	 * @returns {string} - возвращаем строку
	 */
	function parseString() {
		let result = '';
		index++;

		while (str[index] !== '"') {
			result += str[index];
			index++;
		}

		index++;
		return result;
	}

	/**
	 * Функция, вызываемая для конвертации числа
	 * @returns {number} - возвращаем число
	 */
	function parseNumber() {
		let numStr = '';

		while ((str[index] >= '0' && str[index] <= '9') || str[index] === '-' || str[index] === '.') {
			numStr += str[index];
			index++;
		}

		return parseFloat(numStr);
	}

	return parseValue();
}

module.exports = jsonParse;
