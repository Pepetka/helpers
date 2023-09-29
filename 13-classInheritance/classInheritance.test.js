const {Rectangle, Circle, Triangle} = require('./classInheritance');

describe('classInheritance', () => {
	test('Rectangle', () => {
		const rectangle = new Rectangle(10, 20);

		expect(rectangle.area()).toBe(200);
		expect(rectangle.perimeter()).toBe(60);
	});

	test('Circle', () => {
		const circle = new Circle(10);

		expect(circle.area()).toBe(Math.PI * 10 ** 2);
		expect(circle.perimeter()).toBe(2 * Math.PI * 10);
	});

	test('Triangle', () => {
		const triangle = new Triangle(3, 4, 5);

		expect(triangle.area()).toBe(6);
		expect(triangle.perimeter()).toBe(12);
	});
});
