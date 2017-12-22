var cake_tuples = [[7,60] , [3,90], [2,15]]

function cakeTheif(items, capacity){
	let maxValue = 0;
	function knapsackHelper(item, capacity, currVal) {
		//when the capacity reaches 0, then compare it with the maxValue and reset the maxValue
		if(capacity === 0 && currVal > maxValue) {
			maxValue = currVal;
		}
		//if the weight exceeds capacity, then return
		if(capacity < 0) {
			return;
		}
		//create all possible combinations here.
		for(var i = 0; i < items.length; i++) {
			knapsackHelper(items, capacity-items[i][0], currVal + items[i][1])
		}
	}
	knapsackHelper(items, capacity, 0)
	return maxValue;
}

console.log('knapsack', cakeTheif(cake_tuples, 11, 0))



