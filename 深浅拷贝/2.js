//深拷贝实现方法
//浅拷贝+递归 （只考虑了普通的 object和 array两种数据类型）
function deepClone(target, map = new WeakMap) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return target
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = deepClone(target[key], map)
        }
        return cloneTarget
    } else {
        return target
    }
}
console.log(deepClone([1, 2, 3]));

//
function deepCopy(obj) {
    if (typeof obj === 'object') {
        var result = obj.constructor === Array ? [] : {};
        for (var i in obj) {
        result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
        }
    } else {
        var result = obj;
    }
    return result;
}
console.log(deepCopy([1, 2, 3]));