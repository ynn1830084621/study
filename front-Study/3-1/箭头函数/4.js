function foo() {
    setTimeout(() => {
        console.log('arg:', arguments);
    }, 100);
}
foo(1, 2, 3, 4);//arg: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }