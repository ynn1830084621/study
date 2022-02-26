function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}
var s = '𠮷𠮷';
console.log(s.length); // 4
console.log(codePointLength(s)); // 2