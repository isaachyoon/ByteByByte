
function autocomplete(dict) {
	var t = new trie(dict)
	return t
}

function node(data) {
	this.data = data;
	this.children = {};
	this.isWord = false;
}


function trie(dict) {
	this.root = new node('')
	for(var i = 0; i < dict.length; i++) {
		this.insertWord(this.root, dict[i])
	}

}

trie.prototype.insertWord = function(root, word) {
	if(!root || !word) {
		return null;
	}
	let first = word[0] //a
	let rest = word.substring(1) //bc
	let child = root.children[first]
	if(!child) {
		// child = new node(first)
		root.children[first] = new node(first)
	}
	if(rest.length === 0) {
		root.children[first].isWord = true;
	}
	this.insertWord(root.children[first], rest)
}

trie.prototype.prefix = function(str) {
	var resArr = [];

	node = this.root.children

	this.getWords(node, resArr, str, "")
	return resArr;

}

trie.prototype.getWords = function(node, words, str, agg) {

	console.log('node', node)
	var letter = str[0]
	var rest = str.substring(1)
	//we are done with all the words, so just recurse and push in everything
	if(!node) {
		return;
	}
	agg += letter
	if(!str) {
		if(node.isWord) {
			console.log('agg', agg)
			words.push(agg)
		} else {
			for(var key in node) {
				this.getWords(node.children, words, str, agg)
			}
		}
	}
	console.log('nodeasdf', node[letter].children)
	if(node[letter]) {
		this.getWords(node[letter].children, words, rest, agg)
	}
}

////////////////////////////////////////////////////////////////////////////////
														//brute force//
////////////////////////////////////////////////////////////////////////////////
/*
	prefix(str){
		var resArray = [];
		var strLen = str.length;
		for(var i = 0; i < this.dict.length; i++) {
			if(this.dict[i].substring(0,strLen) === str) {
				resArray.push(dict[i])
			}
		}
		return resArray;
	}
	*/
////////////////////////////////////////////////////////////////////////////////




// dict = ['abc', 'acd', 'bcd']
dict = ['abc', 'acd', 'bcd', 'def', 'a', 'aba']
var auto = autocomplete(dict)
console.log(auto.prefix('a'))
// console.log(auto.prefix('ab'))
