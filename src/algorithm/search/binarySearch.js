/* pseudocode
If no item
	Return empty

Find middle item

If middle item matches target
    Return true
Else if middle item < target
    Search left half
Else if middle item > target
    Search right half
 */

const DEFAULT_COMPARE_FN = (item, searchItem) => {
	if (searchItem < item) {
		return -1;
	}
	if (searchItem > item) {
		return 1;
	}
	return 0;
};

const binarySearch = (items, searchItem, compareFn = DEFAULT_COMPARE_FN) => {
	if (!Array.isArray(items) || items.length === 0) {
		return undefined;
	}
	const middleIndex = items.length > 1 ? Math.ceil((items.length - 1) / 2) : 0;
	const compareResult = compareFn(items[middleIndex], searchItem);
	if (compareResult === 0) {
		return items[middleIndex];
	}

	if (items.length === 1) {
		return undefined
	}

	if (compareResult === -1) {
		return binarySearch(items.slice(0, middleIndex), searchItem, compareFn);
	}

	if (compareResult === 1) {
		return binarySearch(items.slice(middleIndex + 1), searchItem, compareFn);
	}

	return undefined;
};

module.exports = binarySearch;
