//Learning: array map, join. String split

	//problem: Write a function that takes a string argument and return the same string
	//with capitalized words.
//Examples:
//capitalizeWords('a program'); return 'A Program'
//capitalizeWords('city of angels'); return 'City Of Angels'

function capitalizeWords(str) {
	strArr = str.split(' ');
	const capitalizedStr = strArr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
	return capitalizedStr;
}
