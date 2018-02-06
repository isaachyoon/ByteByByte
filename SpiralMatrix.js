function spiralCopy(inputMatrix) {
  // your code goes here
  let result = []
  while(inputMatrix.length !== 0){
    moveRight(inputMatrix, result)
    moveDown(inputMatrix, result)
    moveLeft(inputMatrix,result)
    moveUp(inputMatrix, result)
  }
  return result;
}

  function moveRight(inputMatrix, resultArr){
    console.log('pr', inputMatrix)
    let row = 0;
    for(var c = 0; c < inputMatrix[0].length; c++) {
      resultArr.push(inputMatrix[row][c])
    }
    inputMatrix.shift();
  }

  function moveDown(inputMatrix, resultArr){
    let col = inputMatrix[0].length - 1;
    console.log('col', col)
    for(var r = 0; r < inputMatrix.length; r++) {
       resultArr.push(inputMatrix[r][col])
       inputMatrix[r].pop()
    }
  }

  function moveLeft(inputMatrix, resultArr){
    let row = inputMatrix.length -1
    for(var c = inputMatrix[0].length-1; c >= 0; c--) {
      resultArr.push(inputMatrix[row][c])
    }
    inputMatrix.pop()
  }
    //up
  function moveUp(inputMatrix, resultArr){
    let col = 0;
    for(var r = inputMatrix.length-1; r > 0; r--) {
      resultArr.push(inputMatrix[r][col])
      inputMatrix[r].shift();
    }
  }


var arr = [
  [1,    2,   3,   4,   5],
  [6,    7,   8,   9,  10],
  [11,  12,  13,  14,  15],
  [16,  17,  18,  19,  20]
]

console.log(spiralCopy(arr))

/*
                            0     1    2    3   4
                      0
                      1   [6,    7,   8,  9,  ],
                      2   [11,  12,  13,  14, ],
                      3   [16,  17,  18,  19, ] ]
*/

//right, [1,    2,   3,  4,    5],
//down,
//left
//up