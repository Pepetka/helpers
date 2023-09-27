"use strict";

/**
 * Класс узла
 */
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

/**
 * Класс связного списка
 */
class LinkedList {
	constructor() {
		this.head = null;
		this.length = 1;
	}

	/**
	 * Метод добавления элемента в конец списка
	 * @param data - добавляемый элемент
	 */
	add(data) {
		const newNode = new Node(data);

		if (!this.head) {
			this.head = newNode;
			return;
		}

		let current = this.head;
		while (current.next) {
			current = current.next;
		}

		this.length++;
		current.next = newNode;
	}

	/**
	 * Метод добавления элемента на место по индексу
	 * @param index - индекс
	 * @param data - добавляемый элемент
	 * @returns {boolean} - возвращаем false, если индекс больше количества узлов
	 */
	addAt(index, data) {
		const newNode = new Node(data);
		let current = this.head;
		let previous = null;
		let counter = 0;
		if (index > this.length) return false;

		if (index === 0) {
			newNode.next = current;
			this.head = newNode;
		} else {
			while (counter < index) {
				counter++;
				previous = current;
				current = current.next;
			}

			newNode.next = current;
			previous.next = newNode;
		}

		this.length++;
		return true;
	}

	/**
	 * Метод, удаляющий элемент
	 * @param data - удаляемый элемент
	 */
	remove(data) {
		let current = this.head;
		let previous = null;

		if (current.data === data) {
			this.head = current.next;
		} else {
			while (current.data !== data) {
				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}

		this.length--;
	}

	/**
	 * Метод, удаляющий элемент по индексу
	 * @param index - индекс удаляемого элемента
	 * @returns {boolean} - возвращаем false, если индекс больше или равен количеству узлов
	 */
	removeAt(index) {
		let current = this.head;
		let previous = null;
		let counter = 0;
		if (index >= this.length) return false;

		if (index === 0) {
			this.head = current.next;
		} else {
			while (counter < index) {
				counter++;
				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}

		this.length--;
		return true;
	}

	/**
	 * Метод, возвращающий индекс элемента
	 * @param data - элемент, индекс которого необходимо узнать
	 * @returns {number} - индекс элемента
	 */
	indexOf(data) {
		let current = this.head;
		let counter = 0;

		while (current) {
			if (current.data === data) {
				return counter
			}

			counter++;
			current = current.next
		}

		return -1;
	}

	/**
	 * Метод, возвращающий элемент по индексу
	 * @param index - индекс элемента, который необходимо получить
	 * @returns {null}
	 */
	elementAt(index) {
		let current = this.head;
		let counter = 0;
		if (index >= this.length) return null;

		while (counter < index) {
			counter++;
			current = current.next;
		}

		return current;
	}
}

/**
 * Функция, преобразующая JSON строку в связный список
 * @param jsonString - JSON строка со списком объектов
 * @returns {LinkedList} - связный список с объектами
 */
function jsonToSingleLinkedList(jsonString) {
	const list = JSON.parse(jsonString);
	const linkedList = new LinkedList()

	list.forEach((obj) => {
		linkedList.add(obj);
	});

	return linkedList;
}

module.exports = jsonToSingleLinkedList;
