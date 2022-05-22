//Problem: write a function that returns the count of vowels in a string.

function vowels(str) {
	let counter = 0;
	let vowelsChecker = 'aeiou';
  let lowercase = str.toLowerCase();
	for (let i = 0; i < lowercase.length; i++) {
		if (vowelsChecker.includes(lowercase[i])) {
			counter++;
		}
		return counter;
	}
}
