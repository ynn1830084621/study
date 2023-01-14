//暴力解法
var twoSum = function(numbers, target) {
    for(var i = 0; i < numbers.length; i++) {
        for(var j = i + 1; j <numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i, j]
            }
        }
    }
};

//双指针
var twoSum = function(numbers, target) {
    var l = 0, r = numbers.length - 1;
    while(l < r) {
        if(numbers[l] + numbers[r] > target) {
            r--;
        } else if (numbers[l] + numbers[r] < target) {
            l++;
        } else {
            return[l, r]
        }
    }
    
};

console.log(twoSum([2,3,4], 6));//[0, 2]