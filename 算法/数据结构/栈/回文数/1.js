var isPalindrome = function(x) {
    let word = x.toString()
    let rword = '';
    // console.log(word.length);
    for (let i = word.length - 1; i >= 0; i--) {
        rword += word[i]
    }
    // console.log(word);
    // console.log(rword);
    // if (word == rword) {
    //     return true
    // } else {
    //     return false
    // }
    return word === rword
};

console.log(isPalindrome(11));