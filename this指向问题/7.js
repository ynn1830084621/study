var obj = {
    getThis: function() {
        return function() {
            console.log(this);
        }
    }
}
obj.getThis()();//global

//匿名函数this具有全局性，指向global/window