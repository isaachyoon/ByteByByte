/*
	key questions you can ask:
		1. is this a singly linkedList or doublyLinkedList
		2. can you mark the nodes?
*/


////////////////////////////////////////////////////////////////////////////////
													//linkedList helper function//
////////////////////////////////////////////////////////////////////////////////
function node(val){
	this.val = val;
	this.next = null;
}

/*
1 -> 2 -> 3- > 4
		 ^				 |
		 |_________|

*/


var node1 = new node(1)
var node2 = new node(2)
var node3 = new node(3)
var node4 = new node(4)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

////////////////////////////////////////////////////////////////////////////////
														//optimized solution//
////////////////////////////////////////////////////////////////////////////////
/*
	TIME COMPLEXITY: O(N) because it visits every node once (floyds algorithm states that it's linear)
	SPACE COMPLEITY: O(1) because it creates space for all of the non-repeated linked list.
*/

function listCycle(ll) {
	let point1 = ll;
	let point2 = ll;

	while(point1) {

		point1 = point1.next
		point2 = point2.next.next

		if(point1 === point2) {
			return true;
		}

	}
	return false;
}


////////////////////////////////////////////////////////////////////////////////
														//brute force//
////////////////////////////////////////////////////////////////////////////////
/*
	TIME COMPLEXITY: O(N) because it visits every node once
	SPACE COMPLEITY: O(N) because it creates space for all of the non-repeated linked list.
*/

function listCycle2(ll) {
	let hashMap = {};
	while(ll) {
		if(!hashMap[ll.val]) {
			hashMap[ll.val] = true;
		} else if(hashMap[ll.val]) {
			return true;
		}
		ll = ll.next
	}
	return false;

}

console.log(listCycle(node1))

////////////////////////////////////////////////////////////////////////////////

function linkedList(){
	this.head = null;
	this.tail = null;
}

linkedList.prototype.add = function(val) {
	if(this.head === null) {
		this.head = new node(val);
		this.tail = this.head;
	} else {
		var temp = this.head;
		this.head = new node(val);
		this.head.next = temp;
	}
}

////////////////////////////////////////////////////////////////////////////////





