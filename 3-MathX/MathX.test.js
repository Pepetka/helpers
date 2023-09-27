const MathX = require('./MathX');

describe('MathX', () => {
	test('Fibonacci', () => {
		expect(MathX.Fibonacci(1)).toBe(1);
		expect(MathX.Fibonacci(2)).toBe(1);
		expect(MathX.Fibonacci(3)).toBe(2);
		expect(MathX.Fibonacci(4)).toBe(3);
		expect(MathX.Fibonacci(10)).toBe(55);
		expect(MathX.Fibonacci(100)).toBe(354_224_848_179_261_915_075n);
	});

	test('FibonacciSeries', () => {
		expect(MathX.FibonacciSeries(1)).toEqual([1]);
		expect(MathX.FibonacciSeries(2)).toEqual([1, 1]);
		expect(MathX.FibonacciSeries(3)).toEqual([1, 1, 2]);
		expect(MathX.FibonacciSeries(4)).toEqual([1, 1, 2, 3]);
		expect(MathX.FibonacciSeries(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
		expect(MathX.FibonacciSeries(20)).toEqual(
			[
				1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
				89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
			]
		);
		expect(MathX.FibonacciSeries(100)).toEqual(
			[
				1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
				89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
				10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
				1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155,
				165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025,
				20365011074, 32951280099, 53316291173, 86267571272, 139583862445, 225851433717, 365435296162, 591286729879, 956722026041, 1548008755920,
				2504730781961, 4052739537881, 6557470319842, 10610209857723, 17167680177565, 27777890035288, 44945570212853, 72723460248141, 117669030460994, 190392490709135,
				308061521170129, 498454011879264, 806515533049393, 1304969544928657, 2111485077978050, 3416454622906707, 5527939700884757, 8944394323791464, 14472334024676221n, 23416728348467685n,
				37889062373143906n, 61305790721611591n, 99194853094755497n, 160500643816367088n, 259695496911122585n, 420196140727489673n, 679891637638612258n, 1100087778366101931n, 1779979416004714189n, 2880067194370816120n,
				4660046610375530309n, 7540113804746346429n, 12200160415121876738n, 19740274219868223167n, 31940434634990099905n, 51680708854858323072n, 83621143489848422977n, 135301852344706746049n, 218922995834555169026n, 354224848179261915075n
			]
		);
	});

	test('prime', () => {
		expect(MathX.prime(1)).toBe(2);
		expect(MathX.prime(2)).toBe(3);
		expect(MathX.prime(3)).toBe(5);
		expect(MathX.prime(4)).toBe(7);
		expect(MathX.prime(10)).toBe(29);
		expect(MathX.prime(100)).toBe(541);
	});

	test('primeSeries', () => {
		expect(MathX.primeSeries(1)).toEqual([2]);
		expect(MathX.primeSeries(2)).toEqual([2, 3]);
		expect(MathX.primeSeries(3)).toEqual([2, 3, 5]);
		expect(MathX.primeSeries(4)).toEqual([2, 3, 5, 7]);
		expect(MathX.primeSeries(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
	});
});
