var i = 100;
function foo() {
    bbb: try {
        console.log('position1');
        return i++;
    }
    finally {
        break bbb;
    }
    console.log('position2');
    return i;
}
foo();
console.log(i);