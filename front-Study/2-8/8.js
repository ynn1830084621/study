var me = {
    name: 'xiuyan',
    hello: function() {
      console.log(`你好，我是${this.name}`)
    }
}  
var you = {
    name: 'xiaoming',
    hello: me.hello
}
me.hello();
you.hello();