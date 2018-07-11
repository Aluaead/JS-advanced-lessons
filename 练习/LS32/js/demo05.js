//静态属性指的是class本身的属性，即class.propName，而不是定义在实例对象(this)上的属性
class Foo {

}
Foo.prop = 1;
console.log(Foo.prop);
//上面的写法为Foo类定义了一个静态属性prop
//目前，只有这种写法可行，因为ES6明确规定，class内部只有静态方法，没有静态属性
// class Foo {
//     //写法一
//     prop: 2
//     //写法二
//     static prop: 2
// }
//Foo.prop  //undefined

//目前有一个静态属性的提案，对实例属性和静态属性都规定了新的写法
class MyClass {
    static myStaticprop = 42;
    constructor() {
        console.log(MyClass.myStaticprop); //42
    }
}
// 同样的，这个新写法大大方便了静态属性的表达，ES6暂不支持
// 老写法
class Foo {
    // ...
}
Foo.prop = 1;

// 新提案的写法 ES6暂不支持
class Foo {
    static prop = 1;
}