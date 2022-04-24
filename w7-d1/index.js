//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a 
//different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any 
//profit, return 0.


//solution #1 O(n^2)
function maxProfit(prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

//solution #2 O(n)
function maxProfit(prices) {
    let leftPointer = 0;
    let rightPointer = 1;

    let maxProfit = 0;

    while(rightPointer < prices.length) {
        if (prices[leftPointer] < prices[rightPointer]) {
            let profit = prices[rightPointer] - prices[leftPointer];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
            //maxProfit = Math.max(maxProfit, prices[rightPointer] - prices[leftPointer]);
            rightPointer++;
        } else {
            leftPointer = rightPointer;
            rightPointer = rightPointer + 1;
        }
    }
    return maxProfit;
}


maxProfit([7,1,5,3,6,4]); //5
maxProfit([1,2,3,4,5]); //4
maxProfit([7,6,4,3,1]); //0
