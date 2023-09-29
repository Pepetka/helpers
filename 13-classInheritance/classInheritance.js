/**
 * Класс фигуры
 */
class Shape {
	constructor() {
		this.type = 'Shape';
	}

	area() {
		return 0;
	}

	perimeter() {
		return 0;
	}
}

/**
 * Класс прямоугольника, наследуемый от фигуры
 */
class Rectangle extends Shape {
	constructor(width, height) {
		super();

		this.type = 'Rectangle';
		this.width = width;
		this.height = height;
	}

	area() {
		return this.width * this.height;
	}

	perimeter() {
		return 2 * (this.width + this.height);
	}
}

/**
 * Класс круга, наследуемый от фигуры
 */
class Circle extends Shape {
	constructor(radius) {
		super();

		this.type = 'Circle';
		this.radius = radius;
	}

	area() {
		return Math.PI * this.radius ** 2;
	}

	perimeter() {
		return 2 * Math.PI * this.radius;
	}
}

/**
 * Класс треугольника, наследуемый от фигуры
 */
class Triangle extends Shape {
	constructor(a, b, c) {
		super();

		this.type = 'Triangle';
		this.a = a;
		this.b = b;
		this.c = c;
	}

	area() {
		super.area();
		const p = this.perimeter() / 2;

		return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
	}

	perimeter() {
		super.perimeter();

		return this.a + this.b + this.c;
	}
}

module.exports = {
	Rectangle,
	Circle,
	Triangle,
}
