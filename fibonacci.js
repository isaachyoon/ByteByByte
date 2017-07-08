function fibonacci(num, memo) {
	memo = memo || {};
	if(num === 0){
		return 0;
	}
	if(num === 1) {
		return 1;
	}

	// ret urn fibonacci(num-1, memo) + fibonacci(num-2, memo)
	else if(!memo[num]) {
		memo[num] =fibonacci(num-1, memo) + fibonacci(num-2, memo)
	}

	return memo[num]

}

let output = fibonacci(40)
console.log(output)

/*
0 1 1 2 3 5 8 13 21 34 55
            ^

          fib(7)
          /    \
		f(6)    +    f(5)
 f(5) + f(4)

*/
