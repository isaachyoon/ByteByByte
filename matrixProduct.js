//given a matrix, find the path from the top left to bottom right with the greatest product by moving only down and right

/*
COMPLEXITY ANALYSIS of brute force method:

COMPLEXITY ANALYSIS of optimize solution:
	-


EX.	[1, 2]
	[3, 4]
	matrixProductHelper(matrix, r, c+1) * matrix[r][c]           matrixProductHelper(matrix, r+1, c) * matrix[r][c]
							8																																	12
				1 * matrixProduct(0, 1)																		      1 * matrixProduct(1, 0)

						4													4																		4													4
	2 * matrixProduct(0, 2)	  2 * matrixProduct(1, 1)							3 * matrixProduct(1, 1)    3 * matrixProduct(2, 1)

			4							4							4						4											4							4							4						4
 4 * MP(0,3)  4 * MP(1,2)   4 * MP(1, 2) 4 * MP(2, 1)						4 * MP(1,2)  4 * MP(2,1)   4 * MP(2, 2) 4 * MP(3, 1)

 HOW DO I CACHE / MEMOIZE?
*/
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
//

let matrix2 = [
	[-1, 2,  3],
	[4,  5, -6],
	[7,  8,  9],
]

////////////////////////////////////////////////////////////////////////////////
														//optimized solution//
////////////////////////////////////////////////////////////////////////////////
function matrixProduct(matrix) {
	for(var r = 0; r < matrix.length; r++) {
		for(var c = 0; c < matrix[r].length ; c++) {
			if(r === 0 && c === 0) {
				matrix[r][c] = matrix[r][c]
			} else if(r === 0) {
				matrix[r][c] *= matrix[r][c-1]
			} else if (c === 0) {
				matrix[r][c] *= matrix[r-1][c]
			} else {
				matrix[r][c] *= Math.max(matrix[r][c-1], matrix[r-1][c])
 			}
		}
	}
	console.log(matrix)
	return matrix[matrix.length-1][matrix[0].length-1]
}



////////////////////////////////////////////////////////////////////////////////
															//brute force//
////////////////////////////////////////////////////////////////////////////////
function matrixProduct2(matrix) {

	return matrixProductHelper(matrix, 0, 0)

}

function matrixProductHelper(matrix, r, c) {

	if(r === matrix.length && c === matrix.length) {
		return 1;
	}
	if(r >= matrix.length || c >= matrix.length) {
		return 1
	}
	return Math.max(matrixProductHelper(matrix, r, c+1) * matrix[r][c], matrixProductHelper(matrix, r+1, c) * matrix[r][c])
}


////////////////////////////////////////////////////////////////////////////////
console.log(matrixProduct(matrix))