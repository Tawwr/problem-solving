//You're given a non-empty array of positive integers representing the amounts
//of time that specific queries take to execute. Only one query can be executed
//at a time, but the queries can be executed in any order.

// A query's waiting time  is defined as the amount of time that it must
// wait before its execution starts. In other words, if a query is executed
// second, then its waiting time is the duration of the first query; if a query
// is executed third, then its waiting time is the sum of the durations of the
// first two queries.


// Write a function that returns the minimum amount of total waiting time for all
// of the queries.

//For example: 
// in the queries of durations [5, 1, 4] The total waiting time for all the queries 
//to start execution is 0 + (5) + (5 + 1) = 11


function minimumWaitingTime(queries) {
	let wt = 0;
	let twt = 0;
	if (queries.length <= 1) return twt;
	queries.sort((a, b) => a - b);

	for (let i = 1; i <= queries.length - 1; i++) {
		wt = wt + queries[i - 1];
		twt = twt + wt;
	}

	return twt;
}

minimumWaitingTime([5, 1, 4]) // 6
minimumWaitingTime([3, 2, 1, 2, 6]) // 17
minimumWaitingTime([6]) // 0



