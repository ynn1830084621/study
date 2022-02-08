var me = {
    name: 'xiuyan',
    hello: function() {
      console.log(`你好，我是${this.name}`)
    }
} 
var name = 'BigBear';
var hello = me.hello;
me.hello();
hello();