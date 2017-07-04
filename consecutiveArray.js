function consecutiveArray(arr) {
	//finished creating hash set
	let hash = {};
	for(let i = 0; i < arr.length; i++) {
		if(!hash[arr[i]]) {
			hash[arr[i]] = true;
		}
	}

	var max = 0;
	var num = 0;

	for(let key in hash) {
		if(hash[key-1] === undefined) {
			var count = 0;
			num = key
			while(hash[num]) {
				console.log('num', num)
				count ++;
				num++;
			}
			max = Math.max(max, count)
		}

	}
	return max

}

let output = consecutiveArray([4, 2, 1, 3, 6, 7])
console.log(output)


/*
Questions:

approach 1: sort the array first and keep track of the consecutive
	time complexity: nlog(n);
	space complexity: O(1)

approach 2: create a binary tree
	time complexity: O(1) for creating /pushing O(n)
	space complexity: O(n)

approach 3: create hashset -
	find the most left number by doing (n-1) exist and start incrementing the the key. If that key exists then you should increment. If it is higher than max, then increment.
	time complexity: O(n)
	space complexity: O(n)
*/