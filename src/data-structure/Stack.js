function Stack() {
	this.top = -1;
	this.stack = [];
}

Stack.prototype.size = function() {
	return this.top + 1;
};

Stack.prototype.isEmpty = function() {
	return this.top === -1;
};

Stack.prototype.peek = function() {
	return this.isEmpty() ? undefined : this.stack[this.top];
};

Stack.prototype.push = function(newItem) {
	this.top += 1;
	this.stack[this.top] = newItem;
}

Stack.prototype.pop = function() {
	var item = this.stack.splice(this.top, 1)
	this.top -= 1;
	return item[0];
};

module.exports = Stack;
