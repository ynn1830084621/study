var removeDuplicates = function(s) {
    let stack = [];
    for(let i of s) {
        if(stack.length && stack[stack.length-1] === i) {
            stack.pop()
        } else {
            stack.push(i)
        }
    }
    return stack.join("")
};

console.log(removeDuplicates("abbaca"));//ca