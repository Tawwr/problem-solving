// Problem: You're given an array of integers and an integer. Write a function that moves
// all instances of that integer in the array to the end of the array and returns
// the array.
// The function should perform this in place (i.e., it should mutate the input
// array) and doesn't need to maintain the order of the other integers.


//solution:
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while(i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    i ++; 
  }
  return array;
}

