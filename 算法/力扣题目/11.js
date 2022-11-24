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
//     let p = 0, q = 1, r = 1;
//     for(let i = 2; i <= n; i++) {
//         p = q;
//         q = r;
//         r = p + q;
//     }
//     return r
// };
// console.log(climbStairs(5));//8

var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
console.log(climbStairs(2));//2