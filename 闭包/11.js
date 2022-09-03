// function generateName(prefix, type, itemName) {
//     return prefix + type + itemName
// }



// 函数柯里化
function generateName(prefix) {  
    return function(type) {
        return function (itemName) {
            return prefix + type + itemName
        }    
    }
}
