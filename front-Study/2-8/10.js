var me = {
    name: 'xiuyan',
    hello: function() {
    console.log(`你好，我是${this.name}`)
    }
}
var you = {
    name: 'xiaoming',
    hello: function() {
    var targetFunc = me.hello;
    targetFunc();
    }
} 
var name = 'BigBear';
you.hello(); //全局