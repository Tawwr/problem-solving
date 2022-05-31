//Problem: write a function that returns the count of vowels in a string.
//Vowels are the letters a, e, i, o, u.
//Examples:
//vowels('Hello'); //2
//vowels('cOderbytE'); //3

//Solutions:

//#1
// O(n^2)
function vowels(str) {
	let counter = 0;
	let vowelsChecker = 'aeiou';
	let lowercase = str.toLowerCase();
	for (let i = 0; i < lowercase.length; i++) {
		if (vowelsChecker.includes(lowercase[i])) {
			counter++;
		}
	}
	return counter;
}

//#2
// O(n) linear time complexity
function vowels(str) {
	let counter = 0;
	const obj = {
		a: true,
		e: true,
		i: true,
		o: true,
		u: true,
	};
	let lowercase = str.toLowerCase();
	for (let i = 0; i < lowercase.length; i++) {
		if (lowercase[i] in obj) {
			counter++;
		}
	}
	return counter;
}

//#3
function vowels(str) {
	let count = 0;
	let regex = new RegExp('[aAeEIioOuU]');
	for (let i = 0; i < str.length; i++) {
		if (regex.test(str[i])) {
			count += 1;
		}
	}
	return count;
}

//#4
const checkVowel = (char) => {
  return (
    char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
  );
};

const vowels = (str) => {
  let count = 0;
	let lowercase = str.toLowerCase()
  for (let i = 0; i < lowercase.length; i++) if (checkVowel(lowercase[i])) ++count;
  return count;
};
