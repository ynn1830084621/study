var p1 = {
    name : '小明',
    age : '12',
    action : function(where, doing) {
        console.log(this.age + '岁的' + this.name + '在' + where + doing);
    }
}
var p2 = {
    name : '小红',
    age : '15',
}
console.log(p1.action.call(p2,'操场上', '运动'));
