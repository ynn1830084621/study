function unique(arr) {
    let newArray = [];
    arr.sort();
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

let result = unique([1,1,2,2,3,3,4,4,5,5])
console.log(result);