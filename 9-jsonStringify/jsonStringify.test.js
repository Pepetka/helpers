const jsonStringify = require('./jsonStringify');

describe('jsonStringifyTest' ,() => {
	const obj = {
		key1: 1,
		key2: true,
		key3: false,
		key4: null,
		key5: NaN,
		key6: '1',
		key7: undefined,
		key8: 'true',
		key9: Symbol(''),
		key10: Infinity,
		key11: new Number(3),
		key12: new String('false'),
		key13: new Boolean(false),
		key14: [1, 'str', true],
		key15: [undefined, function () {}, Symbol(''), NaN, null, Infinity],
		key16: function () {},
		key17: {
			key1: [{key1: ''}, [1, 2, ''], 'str'],
			key2: [new Number(3), new String('false'), new Boolean(false)]
		},
		key18: new Date(2006, 0, 2, 15, 4, 5),
		key19: [
			new Set([1]),
			new Map([[1, 2]]),
			new WeakSet([{ a: 1 }]),
			new WeakMap([[{ a: 1 }, 2]]),
		],
		key20: [new Int8Array([1]), new Int16Array([1]), new Int32Array([1])],
		key21: [
			new Uint8Array([1]),
			new Uint8ClampedArray([1]),
			new Uint16Array([1]),
			new Uint32Array([1]),
		],
		key22: [new Float32Array([1]), new Float64Array([1])],
		key23: {
			x: 5,
			y: 6,
			toJSON() {
				return this.x + this.y;
			},
		}
	};

	test('primitives', () => {
		expect(jsonStringify(obj.key1)).toBe(JSON.stringify(obj.key1));
		expect(jsonStringify(obj.key2)).toBe(JSON.stringify(obj.key2));
		expect(jsonStringify(obj.key3)).toBe(JSON.stringify(obj.key3));
		expect(jsonStringify(obj.key4)).toBe(JSON.stringify(obj.key4));
		expect(jsonStringify(obj.key5)).toBe(JSON.stringify(obj.key5));
		expect(jsonStringify(obj.key6)).toBe(JSON.stringify(obj.key6));
		expect(jsonStringify(obj.key7)).toBe(JSON.stringify(obj.key7));
		expect(jsonStringify(obj.key8)).toBe(JSON.stringify(obj.key8));
		expect(jsonStringify(obj.key9)).toBe(JSON.stringify(obj.key9));
		expect(jsonStringify(obj.key10)).toBe(JSON.stringify(obj.key10));
	});

	test('not primitives', () => {
		expect(jsonStringify(obj.key11)).toBe(JSON.stringify(obj.key11));
		expect(jsonStringify(obj.key12)).toBe(JSON.stringify(obj.key12));
		expect(jsonStringify(obj.key13)).toBe(JSON.stringify(obj.key13));
		expect(jsonStringify(obj.key14)).toBe(JSON.stringify(obj.key14));
		expect(jsonStringify(obj.key15)).toBe(JSON.stringify(obj.key15));
		expect(jsonStringify(obj.key16)).toBe(JSON.stringify(obj.key16));
		expect(jsonStringify(obj.key17)).toBe(JSON.stringify(obj.key17));
		expect(jsonStringify(obj.key18)).toBe(JSON.stringify(obj.key18));
		expect(jsonStringify(obj.key19)).toBe(JSON.stringify(obj.key19));
		expect(jsonStringify(obj.key20)).toBe(JSON.stringify(obj.key20));
		expect(jsonStringify(obj.key21)).toBe(JSON.stringify(obj.key21));
		expect(jsonStringify(obj.key22)).toBe(JSON.stringify(obj.key22));
		expect(jsonStringify(obj.key23)).toBe(JSON.stringify(obj.key23));
		expect(jsonStringify(obj)).toBe(JSON.stringify(obj));
	});
});
