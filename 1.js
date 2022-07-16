const list = [99, 12, 10, 4]

// list[1] = 0

// console.log(list)

console.log(list.map((item, index) => {
    if (index === 2) {
        return item + 1
    } else {
        return item
    }
}), list);