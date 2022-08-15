function unique(arr) {
    const newArray = [];
    arr.forEach(item => {
    if (!newArray.includes(item)) {
        newArray.push(item);
    }
    });
    return newArray;
}

let result = unique([1,1,2,2,3,3,4,4,5,5])
console.log(result);

