# 一、全局上下文
非严格模式和严格模式都是指向顶层对象(浏览器window).
# 二、函数上下文
1.严格模式中，普通函数中的this表现为undefined
2.非严格模式，全局变量var是挂载在window，而let没有给顶层对象中（浏览器是window）添加属性
3.call，apply用来修改函数中的this指向为第一个参数的。第一个参数是undefined或者null，非严格模式下，是指向window。严格模式下，就是指向第一个参数。
4.fun.call(thisArg, arg1, arg2, ...) this 指向 thisArg
5.apply和call类似。只是参数不一样。它的参数是数组（或者类数组）
6.bind和call和apply类似，第一个参数也是修改this指向，只不过返回值是新函数，这个新函数被调用时this键值为其提供的值。
7.new操作符调用函数时，this指向生成的新对象。
8.箭头函数的 this 始终指向函数定义时的 this，而非执行时。箭头函数中没有this绑定，必须通过查找作用域链来决定其值。 如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，否则this的值则被设置为全局对象。 
9.它们的优先级是new 调用 > call、apply、bind 调用 > 对象上的函数调用 > 普通函数调用。

