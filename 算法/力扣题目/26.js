// 最长公共前缀
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
function fn(strs) {
    let s = '';
    for(let j = 0; j < strs[0].length; j++) {
        for(let i = 0; i < strs.length; i++) {
            if(strs[i][j] !== strs[0][j]) {
                return s
            }
        }
        s = s + strs[0][j]
    }
    return s
}

console.log(fn(["flower","flow","flight"]));//fl