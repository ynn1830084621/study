let obj = {
    getThis: () => {
        return () => {
            console.log(this);
        }
    }
}
obj.getThis()();