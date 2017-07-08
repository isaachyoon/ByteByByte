function linkedListPalindrome(ll){
	let point = ll;
	let stack = [];
	while(point) {
		stack.push(point.val)
		point = point.next;
	}
	console.log(stack)
	while(ll) {
		if(ll.val !== stack.pop()) {
			return false;
		}
		ll = ll.next;

	}
	return true;
}


function node(val){
	this.val = val;
	this.next = null;
}

let node1 = new node(1);
node1.next = new node(2);
node1.next.next = new node(3);
node1.next.next.next = new node(3);
node1.next.next.next.next = new node(2);
node1.next.next.next.next.next = new node(1);
node1.next.next.next.next.next.next = null;


let output = linkedListPalindrome(node1)
console.log(output)