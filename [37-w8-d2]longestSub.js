//Given a string s, find the length of the longest substring without repeating characters.

//solution #1
function longestSub(s) {
	let longest = 1;
	const arr = [];
	for (let i = 0; i < s.length; i++) {
		if (!arr.contains(s[i])) {
			arr.push(s[i]);
		} else {
			if (arr.length > longest) {
				longest = arr.length;
			}
			arr = [];
			arr.push(s[i]);
		}
	}
	return longest;
}

//solution #2
function longestSub(s) {
	let longest = 0;
	let obj = {};

	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]]) {
			const temp = Object.keys(obj).length;
			if (temp > longest) longest = temp;
			obj = {};
		}
		obj[s[i]] = true;
	}
	const temp = Object.keys(obj).length;
	if (temp > longest) longest = temp;

	return longest;
}
longestSub('abcabcbb'); // 3
longestSub('bbbbb'); // 1
longestSub('pwwkew'); // 3
