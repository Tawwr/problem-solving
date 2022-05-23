//Problem: Write a function that takes in a non-empty array of arbitrary intervals,
//   merges any overlapping intervals, and returns the new intervals in no
//   particular order.

//   Each interval interval is an array of two integers, with
//   interval[0]as the start of the interval and
//  interval[1] as the end of the interval.

//  Note that back-to-back intervals aren't considered to be overlapping. For
//  example, [1,5] and [6,7] are not overlapping. However, [1,6] and [6,7] are overlapping

//mergeOverlapping([[1,3], [2,6], [8,10], [15,18]]) // [[1,6], [8,10], [15,18]]
//mergeOverlapping([[1,2],[8,10], [2,6],  [9,18]]) // [[1,6], [8,18]]

function mergeOverlapping(intervalsArray) {
  intervalsArray.sort((a, b) => a[0] - b[0])
  let results = []
  for (let i = 0; i < intervalsArray.length; i++) {
    const currentInterval = intervalsArray[i]
    if (results.length === 0 || currentInterval[0] > results[results.length - 1][1]) {
      results.push(currentInterval)
    } else if (currentInterval[1] > results[results.length - 1][1]) {
      results[results.length - 1][1] = currentInterval[1]
    }
  }
  return results
}
