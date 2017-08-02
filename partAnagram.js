/*Question 1
Given two strings s and t, determine whether some anagram of t is a substring
of s. For example: if s = "udacity" and t = "ad", then the function returns
True. Your function definition should look like: question1(s, t) and return a
boolean True or False.
*/
/*
   udacity ad
   ^
    {a: true
     d: true}
*/



/*
function partAnagram(s, t) {
	let hash = {};
	for(let i = 0; i < t.length; i++) {
		if(!hash[t[i]]) {
			hash[t[i]] = true;
		}
	}

	return partAnagramHelper(s, t, hash, 0);
//udacity ad
//    ^       ^

}

function partAnagramHelper(s, t, hash, pointS) {

	if(pointS > s.length) {
		return false;
	}

	if(hash[s[pointS]]) {
		let trueAnagram = checkAnagram(s.substring(pointS, pointS + t.length), t)
		if(trueAnagram) {
			return true;
		}
	}
	return partAnagramHelper(s, t, hash, pointS+1)
}

function checkAnagram(s, t) {
	return s.split('').sort().join('') === t.split('').sort().join('')
}


let output = partAnagram('udacity', '')
console.log(output)
*/

function partAnagram(text, pattern) {
	let patternHash = {};
	let textHash = {};
	let pointStart = 0;
	let pointEnd = pattern.length-1;
	for(var i = 0; i < pattern.length; i++) {
		if(!patternHash[pattern[i]]) {
			patternHash[pattern[i]] = true;
		}
		if(!textHash[text[i]]) {
			textHash[text[i]] = true;
		}
	}
	if(checkAnagram(patternHash, textHash)) {
		return true;
	}

	while(pointEnd <= text.length) {
		delete textHash[text[pointStart]];
		pointStart++;
		pointEnd++;
		textHash[text[pointEnd]] = true;
		if(checkAnagram(patternHash, textHash)) {
			return true;
		}
	}
	return false;
}

function checkAnagram(patternHash, textHash) {
	console.log('p', patternHash)
	console.log('t', textHash)
	for(let key in patternHash) {
		if(!textHash[key]) {
			return false;
		}
	}
	return true;
}


let output = partAnagram('udacity', 'dacity')
console.log(output)