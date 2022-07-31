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