function foo(a,b){
    console.log(b);
    return {
        foo:function(c){
            return foo(c,a);
        }
    }
}

var func1=foo(0);//undefined 
func1.foo(1);//0 foo(1,0)
func1.foo(2);//0 foo(2,0)
func1.foo(3);//0 foo(3,0)
var func2=foo(0).foo(1).foo(2).foo(3);//undefined 0 1 2
var func3=foo(0).foo(1);//undefined 0
func3.foo(2);//1
func3.foo(3);//1