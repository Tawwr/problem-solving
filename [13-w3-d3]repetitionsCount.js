// Learning: Dictionary
// language: javascript

//Problem:
//Write a function that takes an argument array and returns an object that contains 
//the repetitions count of each element in the array.
//Examples:repetitionsCount([1, 2, 3, 5, 3, 5, 6, "islam", 3, "islam"]) // {1: 1, 2: 1, 3: 2, 5: 2, 6: 1, 'islam': 2}

function repetitionsCount(array) {
  const obj = {};
  for (const elem of array) {
    if (obj[elem] >= 1) {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  }
  return obj;
}