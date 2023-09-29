/**
 * Объект с методами для получения и изменения полей
 * @type {{_name: string, bookCreatedAt, _author: string, _createdAt: string, bookAuthor, bookName}}
 */
const objectWithMethods = {
	_name: 'bookName',
	_author: 'Author',
	_createdAt: '2023',

	get bookName() {
		return this._name;
	},
	set bookName(name) {
		this._name = name;
	},

	get bookAuthor() {
		return this._author;
	},
	set bookAuthor(author) {
		this._author = author;
	},

	get bookCreatedAt() {
		return this._createdAt;
	},
	set bookCreatedAt(createdAt) {
		this._createdAt = createdAt;
	}
}

module.exports = objectWithMethods;
