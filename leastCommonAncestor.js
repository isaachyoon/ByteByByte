/*
     A
    / \
  B    C
 / \  / \
D   EF   G
*/

function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var node1 = new tree('a')
var node2 = node1.left = new tree('b')
var node3 = node1.right = new tree('c')
var node4 = node2.left = new tree('d')
var node5 = node2.right = new tree('e')
var node6 = node3.left = new tree('f')
var node7 = node3.right = new tree('g')
var node8 = node4.left = new tree('h')
var node9 = node4.right = new tree('i')
// var node10 = node5.left = new tree(2)
// var node11 = node5.right= new tree(5)
// var node12 = node6.left = new tree('L')
// var node13 = node6.right = new tree('M')
// var node14 = node7.left = new tree(12)
// var node15 = node7.right = new tree(15)
// node11.left = new tree(4)
// node11.right = new tree(6)
/*
								a
		 					/   \
						 b     c
 		 				/ \	  / \
					d    e f   g
											\
											 10
*/



function findAncestor(tree, val1, val2 ) {
	// resArr = resArr || [];
	let pathToVal1 = findPath(tree, val1)
	let pathToVal2 = findPath(tree, val2)

	let i = pathToVal1.length-1;
	let j = pathToVal2.length-1;

	while(pathToVal1[i] === pathToVal2[j]){
		i--;
		j--;
	}
	return pathToVal1[i+1]
}


function findPath(tree, val){
	if(!tree) {
		return null;
	}
	if(tree.val === val) {
		let newArr = [];
		newArr.push(tree.val);
		return newArr;
	}

	let left = findPath(tree.left, val);
	let right = findPath(tree.right, val);

	if(!!left) {
		left.push(tree.val);
		return left;
	}
	if(!!right) {
		right.push(tree.val);
		return right;
	}

	return null

}
console.log(findAncestor(node1, 'd', 'g'))