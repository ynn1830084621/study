//1.学生成绩对象
function Grades() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}
function add(score) {
    this.dataStore.push(score);
}
function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i]
    }
    return total / this.dataStore.length
}

var grade = new Grades();
grade.add(70);
grade.add(80);
grade.add(90);
console.log(grade.average());//80


//单词数组
const words = ['app', 'cat', 'back', 'dog'];
const a = words.sort()
console.log(a, '正序');//[ 'app', 'back', 'cat', 'dog' ] 正序
const b = a.reverse()
console.log(b, '倒序');//[ 'dog', 'cat', 'back', 'app' ] 倒序
console.log(words);//[ 'dog', 'cat', 'back', 'app' ]


//字母对象
function Alphabet() {
    this.dataStore = [];
    this.add = add
    this.connect = connect;
}
function add(i) {
    this.dataStore.push(i)
}
function connect() {
    return this.dataStore.reduce((a, b) => a + b)
}

var word = new Alphabet();
word.add('a')
word.add('p')
word.add('p')
word.add('l')
word.add('y')
//console.log(word);
console.log(word.connect());//apply