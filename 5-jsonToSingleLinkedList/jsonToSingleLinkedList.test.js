const jsonToSingleLinkedList = require('./jsonToSingleLinkedList');

describe('jsonToSingleLinkedListTest', () => {
	test('json to linked list', () => {
		const linkedList = jsonToSingleLinkedList(`[{"id": "1"}, {"id": "2"}, {"id": "3"}]`);
		expect(linkedList.length).toBe(3);
		expect(linkedList.elementAt(0).data).toEqual({ id: "1" });
		expect(linkedList.elementAt(0).next.data).toEqual({ id: "2" });
		expect(linkedList.elementAt(1).data).toEqual({ id: "2" });
		expect(linkedList.elementAt(1).next.data).toEqual({ id: "3" });
		expect(linkedList.elementAt(2).data).toEqual({ id: "3" });
		expect(linkedList.elementAt(2).next).toEqual(null);
	});

	describe('removeAt', () => {
		test('remove head', () => {
			const linkedList = jsonToSingleLinkedList(`[{"id": "1"}, {"id": "2"}, {"id": "3"}]`);
			linkedList.removeAt(0);
			expect(linkedList.length).toBe(2);
			expect(linkedList.elementAt(0).data).toEqual({ id: "2" });
			expect(linkedList.elementAt(0).next.data).toEqual({ id: "3" });
			expect(linkedList.elementAt(1).data).toEqual({ id: "3" });
			expect(linkedList.elementAt(1).next).toEqual(null);
		});
		test('remove midl', () => {
			const linkedList = jsonToSingleLinkedList(`[{"id": "1"}, {"id": "2"}, {"id": "3"}]`);
			linkedList.removeAt(1);
			expect(linkedList.length).toBe(2);
			expect(linkedList.elementAt(0).data).toEqual({ id: "1" });
			expect(linkedList.elementAt(0).next.data).toEqual({ id: "3" });
			expect(linkedList.elementAt(1).data).toEqual({ id: "3" });
			expect(linkedList.elementAt(1).next).toEqual(null);
		});
		test('remove last', () => {
			const linkedList = jsonToSingleLinkedList(`[{"id": "1"}, {"id": "2"}, {"id": "3"}]`);
			linkedList.removeAt(linkedList.length - 1);
			expect(linkedList.length).toBe(2);
			expect(linkedList.elementAt(0).data).toEqual({ id: "1" });
			expect(linkedList.elementAt(0).next.data).toEqual({ id: "2" });
			expect(linkedList.elementAt(1).data).toEqual({ id: "2" });
			expect(linkedList.elementAt(1).next).toEqual(null);
		});
	});

	describe('addAt', () => {
		test('add head', () => {
			const linkedList = jsonToSingleLinkedList(`[{"id": "1"}, {"id": "2"}, {"id": "3"}]`);
			linkedList.addAt(0, { id: "0" });
			expect(linkedList.length).toBe(4);
			expect(linkedList.elementAt(0).data).toEqual({ id: "0" });
			expect(linkedList.elementAt(0).next.data).toEqual({ id: "1" });
			expect(linkedList.elementAt(1).data).toEqual({ id: "1" });
			expect(linkedList.elementAt(1).next.data).toEqual({ id: "2" });
		});
		test('add midl', () => {
			const linkedList = jsonToSingleLinkedList(`[{"id": "1"}, {"id": "2"}, {"id": "3"}]`);
			linkedList.addAt(1, { id: "0" });
			expect(linkedList.length).toBe(4);
			expect(linkedList.elementAt(0).data).toEqual({ id: "1" });
			expect(linkedList.elementAt(0).next.data).toEqual({ id: "0" });
			expect(linkedList.elementAt(1).data).toEqual({ id: "0" });
			expect(linkedList.elementAt(1).next.data).toEqual({ id: "2" });
		});
		test('add last', () => {
			const linkedList = jsonToSingleLinkedList(`[{"id": "1"}, {"id": "2"}, {"id": "3"}]`);
			linkedList.add({ id: "0" });
			expect(linkedList.length).toBe(4);
			expect(linkedList.elementAt(2).data).toEqual({ id: "3" });
			expect(linkedList.elementAt(2).next.data).toEqual({ id: "0" });
			expect(linkedList.elementAt(3).data).toEqual({ id: "0" });
			expect(linkedList.elementAt(3).next).toEqual(null);
		});
	});
});
