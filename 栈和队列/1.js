function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top - 1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top
}


//数字转换成二进制和八进制
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted
}
var num = 32;
var base = 2;
var newNum = mulBase(num , base);
console.log(newNum);
console.log(num + 'converted to base' + base + 'is' + newNum);//32 converted to base2is100000
num = 125;
base = 8;
var newNum = mulBase(num , base);
console.log(num + 'converted to base' + base + 'is' + newNum);//125 converted to base8is175


//判断字符串是否是回文
function isPalindrome(word) {
    var s = new Stack();
    for (let i = 0; i < word.length; ++i) {
        s.push(word[i])
    }
    var rword = '';
    while (s.length() > 0) {
        rword += s.pop()
    }
    //console.log(rword);
    if( word === rword) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome('hello'));//false
console.log(isPalindrome('racecar'));//true

//使用栈模拟递归 计算5！
function fact(n) {
    let s = new Stack();
    while (n > 1) {
        s.push(n--)
    }
    let product = 1;
    while (s.length() > 0) {
        product *= s.pop()
    } 
    return product
}
console.log(fact(5));//120

//移除黄色
function remove(sweets) {
    let s = new Stack()
    for (let i = 0; i < sweets.length; ++i) {
        if (sweets[i] === '黄色') {
            s.peek(sweets[i])
        } else {
            s.push(sweets[i])
        }
    }
    return s.dataStore
}

console.log(remove(['红色', '黄色', '白色']));