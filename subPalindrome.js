//      btahehatc
//      ^
//        ^

function subPalindrome(str){
	let longestPalindrom = 0;
	for(var i = 1; i < str.length; i++) {
		let palindromeCount = checkPalindrom(str, i)
		console.log(palindromeCount)
		if(palindromeCount > longestPalindrom) {
			longestPalindrom = palindromeCount;
		}
	}
	return longestPalindrom;
}

function checkPalindrom(str, i) {
	let val = 1;
	let inc = 1
	if(str[i] === str[i+1]){
		let j = i+1;
		while(str[i-inc] === str[j+inc]) {
			inc++;
			val +=2
		}
	} else {
		while(str[i-inc] === str[i+inc]) {
			inc++;
			val += 2;
		}
	}
	return val;
}

let output =subPalindrome("ABCBACADCBBCDA")
console.log(output)