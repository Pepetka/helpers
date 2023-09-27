/**
 * Функция, возвращающая отсортированный массив объектов
 * @param objectsArr - массив объектов, который необходимо отсортировать
 * @returns {*[]} - отсортированный массив объектов
 */
function sortObjects(objectsArr) {
	return objectsArr.sort((a, b) => {
		const agesDiff = a.age - b.age;

		// если возрасты не равны, сортируем по возрастанию возраста
		if (agesDiff !== 0) {
			return agesDiff;
		}

		// если возрасты равны, сортируем по имени
		if (a.name > b.name) {
			return 1;
		} else if (a.name < b.name) {
			return -1;
		}

		return 0;
	});
}

module.exports = sortObjects;
