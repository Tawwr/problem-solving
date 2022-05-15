//You are given a string s and an integer k.
//You can choose any character of the string and change it to any
//other uppercase English character. You can perform this operation at most k times.

//Return the length of the longest substring containing the same letter you can get
//after performing the above operations.

function characterReplacement(s, k) {
	const obj = {};
	let maxSubstring = 0;
	let maxCount = 0;
	let l = 0;
	for (let r = 0; r < s.length; r++) {
    if (obj[s[r]] in obj) {
      obj[s[r]] += 1;
    } else {
      obj[s[r]] = 1;
    }
		maxCount = Math.max(maxCount, obj[s[r]]);
		while ((r - l + 1) - maxCount > k) {
			obj[s[l]]--;
			l++;
		}
		maxSubstring = Math.max(maxSubstring, (r - l + 1));
	}
	return maxSubstring;
}

characterReplacement('ABAB', 1); //3
characterReplacement('ABAB', 2); //4
characterReplacement('AABABBA', 1); //4
