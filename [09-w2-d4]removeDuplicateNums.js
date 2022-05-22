// Learning: array, hash map, dictionary, javascript Set, array filter
// Language: javascript

//Problem: Write a function that takes an array of numbers list and returns a new array
//of unique numbers after removing duplicate numbers.
//Examples:
//removeDuplicateNums([5, 4, 1, 5, 5, 3, 10, 8, 1]) //returns [5, 4, 1, 3, 10, 8]


//Solutions: 

//1
function removeDuplicate(list) {
  let obj = {};
  let newList = [];
  for (let i = 0; i < list.length; i++) {
      if (list[i] in obj) {
        continue;
      }
      obj[list[i]] = true;
      newList.push(list[i]);
  }
  return newList;
}


//2
function removeDuplicateNums(list) {
	list.sort((a, b) => a - b);
	const newArr = list.filter((elem, index, arr) => elem !== arr[index + 1]); 
	return newArr;
}

//3
function removeDuplicateNums(list) {
	return [...new Set(list)]
}