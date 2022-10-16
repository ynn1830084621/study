let obj = {
    getThis: function() {
        return () => {
            console.log(this);
        }
    }
}
obj.getThis()();//obj