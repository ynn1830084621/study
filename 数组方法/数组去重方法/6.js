function unique(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

let result = unique([1,1,2,2,3,3,4,4,5,5])
console.log(result);//[ 1, 2, 3, 4, 5 ]