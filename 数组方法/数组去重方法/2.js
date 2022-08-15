function unique(arr) {
    let newArray = [...new Set(arr)]
    return newArray
}

let result = unique([1,1,2,2,3,3,4,4,5,5])
console.log(result);