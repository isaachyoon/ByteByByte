// function makeChange(amt, currency, ind){
//     //-3 + 25
//     if(amt - currency[ind] < 0) {
//         makeChange(amt, currency, ind+1)
//     }

//     if(amt === 0) {
//         return 0;
//     }

//     makeChange(amt - currency[ind], currency, ind) + 1
//     //22 -25
// }


// {10, 6, 1}
//   ^
//  10
//   6
//   1
// makeChange(12)
// let res = 100
var currency = [10, 6, 1];



function makeChange2(amt, memo) {

    if(amt === 0) {
        return 0;
    }
    //set the highest
    var minCoins = Number.POSITIVE_INFINITY;

    for(let i = 0; i < currency.length; i++) {
        if(amt - currency[i] >= 0) {


          let currMin = makeChange(amt - currency[i]);

          //as for loop runs through, it's going to adjust min
          if(currMin < minCoins) {
            minCoins = currMin;
          }
        }
    }
    //return min + 1
    return minCoins;
}

function makeChange(amt, memo) {

    if(amt === 0) {
        return 0;
    }
    //set the highest
    var minCoins = Number.POSITIVE_INFINITY;

    for(let i = 0; i < currency.length; i++) {
        if(amt - currency[i] >= 0) {

          if(!memo[amt-currency[i]]) {
            memo[amt - currency[i]] = makeChange(amt - currency[i], memo);
          }
          //as for loop runs through, it's going to adjust min

          if(memo[amt -currency[i]] < minCoins) {
            minCoins = memo[amt - currency[i]];
          }
        }
    }
    //return min + 1
    return memo[amt-currency[i]];
}

let output = makeChange(12, {});
console.log(output)
/*
     12
   /  |  \
2    6       11
|   / \     / | \
1  0   5   1  5  10
|
1

*/