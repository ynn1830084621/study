var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }
    let reverse = 0
    while(x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x / 10);
        // console.log(x, '1', reverse);
    }
    return x == reverse || x == parseInt(reverse / 10);
};

console.log(isPalindrome(11));



