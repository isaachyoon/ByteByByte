let telephone = {
	1: '',
	2: 'abc',
	3: 'def',
	4: 'ghi',
	5: 'jkl',
	6: 'mno',
	7: 'pqrs',
	8: 'tuv',
	9: 'wxyz'
}


function telephonePermute(num){
	//resArr will keep track of all the combination
	let resArr = [];

	//push in string corresponding to number input
	let permuteArr = [];
	for(var i = 0; i < num.length; i++) {
		permuteArr.push(telephone[num[i]]);
	}


	telephonePermuteHelper(permuteArr, resArr, 0, '');
	return resArr;

}

function telephonePermuteHelper(permuteArr, resArr, ind, res) {
	//if the length of res string equals the length of number, then push it in to the res arr and return
	if(res.length === permuteArr.length) {
		resArr.push(res);
		return;
	}

	for(var i = 0; i < permuteArr[ind].length; i++) {
		telephonePermuteHelper(permuteArr, resArr, ind + 1, res + permuteArr[ind][i]);
	}
}


let output = telephonePermute('234');
console.log(output);