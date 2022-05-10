// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs) {
	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
		}
	}
	return prefix;
}

longestCommonPrefix(['flower', 'flow', 'flight']); //"fl"
longestCommonPrefix(['dog', 'racecar', 'car']); //""
