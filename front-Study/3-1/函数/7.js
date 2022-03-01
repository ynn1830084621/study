function foo (x = 1, y) {
    x = 5;
    y = 6;
    console.log(arguments)
    console.log(arguments[1])
}
foo(3, 4);//[arguments] {'0':3, '1' : 4} //4
          