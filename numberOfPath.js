/*
You’re testing a new driverless car that is located at the Southwest (bottom-left) corner of an n×n grid. The car is supposed to get to the opposite, Northeast (top-right), corner of the grid. Given n, the size of the grid’s axes, write a function numOfPathsToDest that returns the number of the possible paths the driverless car can take.
*/

function numberOfPaths(matrix){

	let memo = []
	for(var i =0; i < matrix.length; i++) {
		memo[i] = new Array(matrix.length)
	}
	// memo[matrix.length-1][matrix.length-1] = 1
	// console.log(memo)


	return numberOfPathHelper(matrix, matrix.length-1, matrix.length-1, memo)

}

function numberOfPathHelper(matrix, row, col, memo) {
	if(row < 0 || col < 0) {
		return 0
	}
	if(row === 0 && col === 0) {
		matrix[row][col] = 1
		return matrix[row][col]
	}
	else if(!memo[row][col]) {
		memo[row][col] = numberOfPathHelper(matrix, row-1, col, memo) + numberOfPathHelper(matrix, row, col-1, memo)
	}
	return memo[row][col]
}

/*
	[1, 1, 0, 0, 0]
	[1, 2, 0, 0, 0]
	[0, 0, 0, 0, 0]
	[0, 0, 0, 0, 0]
	[0, 0, 0, 0, 0]
*/

var arr = [
	[1, 1, 1],
	[1, 2, 3],
	[1, 3, 6]
]

console.log(numberOfPaths(arr))