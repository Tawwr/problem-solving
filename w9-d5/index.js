//Koko loves to eat bananas. There are n piles of bananas, 
//the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
//Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile 
//of bananas and eats k bananas from that pile. If the pile has less than k bananas, 
//she eats all of them instead and will not eat any more bananas during this hour.
//Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
//Return the minimum integer k such that she can eat all the bananas within h hours.

function minEatingSpeed(piles, h) {
  let l = 1;
  let r = Math.max(...piles); 
  let result = r;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let hoursNeeded = 0
    for (let i = 0; i < piles.length; i++) {
      hoursNeeded += Math.ceil(piles[i] / mid);
    }
    if (hoursNeeded <= h) {
      result = Math.min(result, mid)
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return result;
}

minEatingSpeed([3, 6, 7, 11], 8); //4
minEatingSpeed([30,11,23,4,20], 5); //30
