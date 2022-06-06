//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

//Implement the MinStack class:

//MinStack() initializes the stack object.
//void push(int val) pushes the element val onto the stack.
//void pop() removes the element on the top of the stack.
//int top() gets the top element of the stack.
//int getMin() retrieves the minimum element in the stack.

var MinStack = function () {
	this.storage = {};
	this.count = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.storage[this.count] = val;
	this.count++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	if (this.count === 0) return undefined;
	this.count--;
	const result = this.storage[this.count];
	delete this.storage[this.count];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.storage[this.count - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	let min = this.storage[0];
	for (let i = 1; i < this.count; i++) {
		if (this.storage[i] < min) min = this.storage[i];
	}
	return min;
};
