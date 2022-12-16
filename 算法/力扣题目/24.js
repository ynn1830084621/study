var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let map = new Map();
    for(let i of s) {
        if(map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1)
        }
    }
    for(let k of t) {
        if(map.has(k) && map.get(k) > 0) {
            map.set(k, map.get(k) - 1)
        } else {
            return false
        }
    }
    return true
};

// var isAnagram = function(s, t) {
//     return s.length === t.length && [...s].sort().join("") === [...t].sort().join("");
// };

console.log(isAnagram('car', 'tac'));//false
