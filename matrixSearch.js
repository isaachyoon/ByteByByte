function matrixSearch(matrix, val) {
	let row = 0;
	let col = 0;

 	let down = true;
 	let right = false;

	while(matrix[row][col] !== val) {
		console.log('row',row)
		console.log('col', col)
		console.log(matrix[row][col])
		if(row >= matrix.length) {
			down = false;
			right = true;
			row--;
		}
		if(col >= matrix[0].length) {
			return false;
		}

		if(matrix[row][col] < val) {
			if(down) {
				row += 1;
			} else {
				col += 1;
			}
		} else if(matrix[row][col] > val) {
			if(down) {
				row -= 1;
				down = false;
				right = true;
			} else if(col) {
				return false;
			}
		}
	}
	return true;
}
//[2, 0]
let arr = [
	[0,   1,  2,  3],
	[4,   5,  6,  7],
	[8,   9, 10, 11],
	[12, 13, 14, 15]
]
console.log(matrixSearch(arr, 7))
/*
approach 1:
I can iterate through each element, and find the number -
time complexity: O(n * m)
space complexity O(1)

approach2:
compare right, or compare down
O(n + m)

   0    1   2   3
0	[0,   1,  2,  3]
1	[4,   5,  6,  7]
2	[8,   9, 10, 11]
3	[12, 13, 14, 15]

*/