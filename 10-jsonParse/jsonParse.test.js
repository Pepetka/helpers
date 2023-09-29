const jsonParse = require('./jsonParse');

describe('jsonParse', () => {
	const json1 = 'false';
	const json2 = 'true';
	const json3 = 'null';
	const json4 = '"false"';
	const json5 = '-10.12';
	const json6 = '""';
	const json7 = '{}';
	const json8 = '[]';
	const json9 = '{"key1":"value","key2":30,"key3":false}';
	const json10 = '[{"key1":"value","key2":30,"key3":false},10,false,null,"true"]';
	const json11 = '{"key1":["value1",""],"key2":0,"key3":null}';
	const json12 = '{"key1": ["value1", ""], "key2": 0, "key3": null}';

	test('primitives', () => {
		expect(jsonParse(json1)).toEqual(JSON.parse(json1));
		expect(jsonParse(json2)).toEqual(JSON.parse(json2));
		expect(jsonParse(json3)).toEqual(JSON.parse(json3));
		expect(jsonParse(json4)).toEqual(JSON.parse(json4));
		expect(jsonParse(json5)).toEqual(JSON.parse(json5));
		expect(jsonParse(json6)).toEqual(JSON.parse(json6));
	});

	test('not primitives', () => {
		expect(jsonParse(json7)).toEqual(JSON.parse(json7));
		expect(jsonParse(json8)).toEqual(JSON.parse(json8));
		expect(jsonParse(json9)).toEqual(JSON.parse(json9));
		expect(jsonParse(json10)).toEqual(JSON.parse(json10));
		expect(jsonParse(json11)).toEqual(JSON.parse(json11));
		expect(jsonParse(json12)).toEqual(JSON.parse(json12));
	});
});
