/*
function treeToLL2(tree) {
    var resArr = [];
    treeToLLHelper(tree, resArr);

    for(let i = 0; i < resArr.length; i++) {

        if(i === 0) {
            resArr[i].left = resArr[resArr.length-1];
            resArr[i].right = resArr[i+1]
        } else if(i === resArr.length - 1) {
            resArr[i].left = resArr[i-1];
            resArr[i].right = resArr[0]
        } else {
            resArr[i].left = resArr[i-1];
            resArr[i].right = resArr[i+1];
        }
    }
    return resArr[0];
}

function treeToLLHelper(tree, resArr) {
		// console.log(resArr)
    if(!tree) {
        return;
    }

    let left = treeToLLHelper(tree.left, resArr); //

    resArr.push(tree);
    let right = treeToLLHelper(tree.right, resArr); // 5
}
///////////////////////////////////////////////////////////////////



*/

function concatenate(a, b) {

	if(a === null) return b;
	if(b === null) return a;

	let aEnd = a.left;
	let bEnd = b.left;

	a.left = bEnd;
	bEnd.right = a;
	aEnd.right = b;
	a.left = aEnd;
	return a;
}

function treeToLL(tree) {

	if(tree === null){
		return tree;
	}

	let leftNode = treeToLL(tree.left)
	let rightNode = treeToLL(tree.right)

	//tree.left = left;
	//tree.right = right;
	//they are pointing to themselves

	tree.left = tree;
	tree.right = tree;

	console.log('before', tree);
	tree = concatenate(leftNode, tree)
	console.log('curr', tree)
	tree = concatenate(tree, rightNode)
	console.log('after', tree)
	return tree;
}
/*
<- 4 <-> 2 <-> 5 <-> 1 <-> 6 <-> 3 <-> 7 ->

    1
   / \
  2   3
 / \ / \
4  56   7
*/

///////////////////////////////////////////
//helper function///////////
function node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

let tree = new node(1);
let tree2 = tree.left = new node(2)
let tree3 = tree.right = new node(3)
let tree4 = tree2.left = new node(4)
let tree5 = tree2.right = new node(5)
let tree6 = tree3.left = new node(6)
let tree7 = tree3.right = new node(7)
// let tree8 = tree4.left = new node(8)
// let tree9 = tree8.left = new node(9)
///////////////////////////////////////////

let output = treeToLL(tree)
console.log(output)

