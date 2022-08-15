function unique(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}

let result = unique([1,1,2,2,3,3,4,4,5,5])
console.log(result);