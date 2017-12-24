function anagram(str1, str2){
	if(str1 !== str2) {
		return false;
	}
	str1 = str1.lowerCase();
	str2 = str2.lowerCase();
	var arr = [];
	for(var i =0; i< str1.length; i ++) {

	}
}

/*
 str1 = ab
 str2 = ba
 str2 === str1

1 approach:
	if the length of the str diff
		return null;
	sort both strings
	if the sorted str1 === str2
	return true;

time complexity: nlogn

apporach2:

{
	a: 0
	b: 0
	c: 0
}
time complexity: O(n)
space complexity: O(n)
bcada
    ^
	b c a d a
c 0 1 0 0 0
a 0 1 2 2 3
d 0 1 2 5 8
a 0 1 4 9 10
b
*/