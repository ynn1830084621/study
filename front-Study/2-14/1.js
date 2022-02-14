var user = {
    count : 1,
    getCount : function() {
        return this.count;
    }
}
var func = user.getCount;
console.log(func());