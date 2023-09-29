/**
 * Функция, возвращающая промис, разрешающийся изображением в случае успешной загрузки
 * @param url - url изображения
 * @returns {Promise<Blob|{message: string, error}>} - возвращаем изображение в случае успешной загрузки, объект с
 * ошибкой в случае не успешной
 */
async function fetchImage(url) {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`HTTP Response Code: ${res.status}`);
		}

		return res.blob();
	} catch (error) {
		return { message: 'Error', error };
	}
}

module.exports = fetchImage;
