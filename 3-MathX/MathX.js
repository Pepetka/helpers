/**
 * Функция, сохраняющая в кеш результат работы функции, передаваемой в качестве аргумента
 * @param fn - функция, результат которой необходимо кешировать
 * @returns {function(number): any} - функция, оборачивающая функцию, переданную аргументом, и дополняющая ее
 * функционалом кеширования
 */
function memoize(fn) {
	// кеш
	const cache = new Map();

	return function(n) {
		const self = this;

		// при отсутствии результата в кеше, вызываем функцию и кешируем ее результат
		if (!cache.has(n)) {
			cache.set(n, fn.call(self, n));
		}

		// возвращаем данные из кеша
		return cache.get(n);
	};
}

const MathX = {
	/**
	 * Метод, возвращающий член ряда Фибоначчи, стоящий на n-ом месте
	 * @param n - порядковый номер члена ряда Фибоначчи
	 * @returns {number|bigint} - значение члена на n-ом месте
	 */
	Fibonacci: memoize(function(n) {
		let fibonacciNum;

		if (n <= 2) {
			// число Фибоначчи на первом и втором месте равно 1
			fibonacciNum = 1;
		} else {
			// получаем рекурсивно числа Фибоначчи на i-1 и i-2 месте
			const n1 = this.Fibonacci(n - 1);
			const n2 = this.Fibonacci(n - 2);

			// проверяем число на величину больше максимального безопасного значения
			if (typeof n2 === 'bigint' || typeof n1 === 'bigint' || n2 + n1 > Number.MAX_SAFE_INTEGER) {
				// используем BigInt, когда число больше максимального безопасного значения
				fibonacciNum = BigInt(n2) + BigInt(n1);
			} else {
				// иначе используем сложение
				fibonacciNum = n2 + n1;
			}
		}

		return fibonacciNum;
	}),
	/**
	 * Метод, возвращающий первые n членов ряда Фибоначчи
	 * @param n - порядковый номер последнего члена ряда Фибоначчи
	 * @returns {number|bigint[]} - массив членов ряда Фибоначчи
	 */
	FibonacciSeries: memoize(function(n) {
		const series = [];

		for (let i = 1; i <= n; i++) {
			series.push(this.Fibonacci(i));
		}

		return series;
	}),
	/**
	 * Метод, возвращающий n-ое простое число
	 * @param n - порядковый номер простого числа
	 * @returns {number} - простое число расположенное на n-ом месте
	 */
	prime: memoize(function(n) {
		let counter = 0;
		let candidate = 2;

		while(counter < n) {
			if (this.isPrime(candidate)) {
				counter++;
			}
			if (counter < n) {
				candidate++;
			}
		}

		return candidate;
	}),
	/**
	 * Метод, возвращающий первые n простых чисел
	 * @param n - количество простых чисел
	 * @returns {number[]} - массив простых чисел
	 */
	primeSeries: memoize(function(n) {
		const series = [];

		for (let i = 1; i <= n; i++) {
			series.push(this.prime(i));
		}

		return series;
	}),
	isPrime: memoize(function(n) {
		if (n === 1) {
			return false;
		} else if (n <= 3) {
			return true;
		} else if (n % 2 === 0 || n % 3 === 0) {
			return false;
		}

		let i = 5;
		while (i * i <= n) {
			if (n % i === 0 || n % (i + 2) === 0) {
				return false;
			}
			i += 6;
		}

		return true;
	}),
}

module.exports = MathX;
