function outer(a, b) {
    let argOut = arguments;
    console.log(argOut);//[Arguments] { '0': 111, '1': 222 }
    let fun = () => {
        let argIn = arguments;
        console.log(argIn);//[Arguments] { '0': 111, '1': 222 }
        console.log(argOut === argIn);//true
    }
    fun()
}
outer(111, 222)