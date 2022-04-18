/* pseudocode
If no item
	Return empty

For each item from start to end
    If item matches searching one
        Return item
Return empty
 */

const linearSearch = (items, searchItem, matchFn = (item, searchItem) => item === searchItem) => {
	if (!Array.isArray(items) || items.length === 0) {
		return undefined;
	}
	for (let i = 0; i < items.length; i++) {
		if (matchFn(items[i], searchItem)) {
			return items[i];
		}
	}
	return undefined;
};

module.exports = linearSearch;
