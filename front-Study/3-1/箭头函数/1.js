function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    },100);
}
var id = 21;
foo(); //id: undefined
foo.call({id : 42}); //id: 42