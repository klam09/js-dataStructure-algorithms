/* pseudocode
To shuffle an array a of n elements (indices 0..n):
for i from 0 to n−2 do
     get random integer such that i ≤ j < n
     exchange a[i] and a[j]
*/
const fisherYatesShuffle = (array) => {
	if (!Array.isArray(array)) {
		return [];
	}

	if (array.length <= 1) {
		return array;
	}

	const result = Array.from(array);

	for (let i = 0; i < result.length - 2; i++) {
		const randomIndex = i + 1 + Math.floor(Math.random() * (array.length - i - 1.01));
		const item = result[i];
		result[i] = result[randomIndex];
		result[randomIndex] = item;
	}
	return result;
};

export default fisherYatesShuffle;