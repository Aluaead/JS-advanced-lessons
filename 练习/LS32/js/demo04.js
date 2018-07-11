//Part 1
//类的prototype属性相当于实例的原型，所有在类中定义的方法，都会被实例继承
//如果在一个方法前，加上static就表示该方法不会被实例继承，而是直接通过类来调用，这就成为“静态方法”
class Foo {
    static classMethod() {
        return 'hello';
    }
}
Foo.classMethod();
var foo = new Foo();
// foo.classMethod();
// TypeError: foo.classMethod is not a function
// 上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，
// 可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。
// 如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法
// 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。

class Foo1 {
    static bar() {
        this.baz();
    }
    static baz() {
        console.log("hello");
    }
    baz() {
        console.log("world");
    }
}
Foo1.bar(); //hello
//上面代码中，静态方法bar调用this.baz，这里的this指的是Foo1类，而不是Foo1实例，等同于调用Foo1.baz。另外，从这个例子还可以看出，静态方法可以于非静态方法重名

class Foo2 {
    static baz() {
        console.log("hello");
    }
    baz() {
        console.log("world");
        Foo2.baz();
    }
    static fun1(o) {
        //this.fun2会报错
        o.fun2();
    }
    fun2() {
        console.log("fun2");
    }
}
var a = new Foo2();
a.baz()
Foo2.fun1(a);

Object.myStaticMethod = () => {
    console.log(123);
}
Object.prototype.myInstanceMethod = () => {
    console.log(456);
}
var obj = {};
obj.myInstanceMethod();
Object.myStaticMethod();