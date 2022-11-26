//爬楼梯
// var climbStairs = function(n) {
//     if(n === 1) {
//         return 1
//     }
//     if(n === 2) {
//         return 2
//     }
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };

// console.log(climbStairs(5));//8

// var climbStairs = function(n) {
//     let p = 1, q = 2, r = 1;
//     for(let i = 3; i <= n; i++) {
//         p = q;
//         q = r;
//         
//     }
//     return r
// };
// console.log(climbStairs(5));//8

var climbStairs = function(n) {
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
console.log(climbStairs(2));//2