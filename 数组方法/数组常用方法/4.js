var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0

//每个学生平均成绩
for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log('student:' + parseInt(row+1) + 'average:' + average);
    total = 0;
    average = 0.0;
}
// student:1 average:81.33333333333333
// student:2 average:79.66666666666667
// student:3 average:91.33333333333333 

//每科平均成绩
for (var col = 0; col < grades.length; ++col) {
    for (var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
    }
    average = total / grades[col].length
    // console.log(grades[col].length, col, 'length');
    console.log('text:' + parseInt(col + 1) + 'average:' + average);
    total = 0;
    average = 0.0
}
// text:1 average:85.33333333333333
// text:2 average:84.33333333333333
// text:3 average:82.66666666666667



var arr = [[1, 1], [2, 2], [3, 3]]
for (var col = 0; col < arr.length; ++col) {
    for (var row = 0; row < arr[col].length; ++row) {
        total += arr[row][col];
    }
    average = total / arr[col].length
    // console.log(grades[col].length, col, 'length');
    console.log('text:' + parseInt(col + 1) + 'average:' + average);
    total = 0;
    average = 0.0
}
//text:1average:1.5
//text:2average:1.5
//text:3average:NaN