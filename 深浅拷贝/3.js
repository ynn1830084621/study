function deepClone(obj, map = new Map()) {
    if (typeof obj !== 'object') {
        return obj
    }
    if (map.get(obj)) {
        return map.get(obj)
    }
    let result = {};
     //加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
    if (obj instanceof Array || Object.prototype.toString(obj) === "[object Array]"){
        result = []
    } 
    map.set(obj, result);
    for(const key in obj) {
         // 保证 key 不是原型属性
        if(obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepClone(obj[key], map)
        }
    }
    return result;
}

console.log(deepClone([1, 2, 3]));