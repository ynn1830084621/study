var obj = {
    count : 0,
    cool : function coolFn() {
        if (this.count < 1) {
            setTimeout(function timer() {
                this.count++;
                console.log('awesome?');
            }.bind(this), 100);
        }
    }
};
obj.cool();