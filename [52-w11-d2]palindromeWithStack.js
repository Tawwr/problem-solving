function Stack() {
	this.data = [];
	this.size = this.data.length;

	this.push = function (value) {
		this.data.push(value);
		this.size++;
	};

	this.pop = function () {
		this.size--;
		return this.data.pop();
	};

	this.peek = function () {
		return this.data[this.size - 1];
	};

	this.search = function (value) {
		for (let i = this.size - 1; i >= 0; i--) {
			if (this.data[i] === value) return this.data[i];
		}
		return null;
	};
}

const stackOne = new Stack();

function palindrome(str) {
	let reversed = '';
	for (let i = 0; i < str.length; i++) {
		stackOne.push(str[i]);
	}

	for (let i = 0; i < str.length; i++) {
		reversed += stackOne.pop();
	}
	return str.toLowerCase() === reversed.toLowerCase();
}
