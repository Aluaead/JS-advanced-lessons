//ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁
var foo = 'bar';
var baz = {
    foo
};
console.log(baz);
//等同于
var baz = {
    foo: foo
};

//上面代码表明，ES6允许在对象之中，只写属性名，不写属性值
//这时，属性值等于属性名所代表的变量

function f(x, y) {
    return {
        x,
        y
    };
}
//等价于
function f(x, y) {
    return {
        x: x,
        y: y
    };
}
console.log(f(1, 2));

//除了属性简写，方法也可以简写
var o = {
    method() {
        return 'hello';
    }
};

var o = {
    method: function () {
        return 'hello';
    }
};
//例子
var birth = '1997/11/08';
var p1 = {
    name: '李文轩',
    birth,
    hello() {
        console.log('我的名字是', this.name);
    }
};
//这种写法用于函数的返回值，会非常方便
function getPoint() {
    var x = 1;
    var y = 10;
    return {
        x,
        y
    };
}
console.log(getPoint());

//part 2
//ES6允许字面量定义对象时，用方法二作为对象的属性名，即把表达式放在方括号内
let propKey = 'foo';
let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};
console.log(obj);

var lastWord = 'last word';
var a = {
    'first word': 'hello',
    [lastWord]: 'world'
};
console.log(a);
console.log(a['first word']);
console.log(a[lastWord]);
console.log(a['last word']);

let obj1 = {
    ['h' + 'ello']() {
        return 'hi';
    }
};
console.log(obj1.hello());

//注意，属性名表达式与简洁表示法，不能同时使用
var foo = 'bar';
var bar = 'abc';
//var baz={[foo]}; //会报错

//正确
var foo = 'bar';
var baz = {
    [foo]: 'abc'
};
//var baz={[foo]:bar};

//Part 3
//Object.is 它用来比较两个值是否严格相等，与严格比较运算符(===)的行为基本一直
console.log(Object.is(1, '1'));
console.log(Object.is(1, 1));

//和===的区别
console.log(+0 === -0); //true
console.log(NaN === NaN); //false
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); //true

//Object.assign方法用于对象的合并，将原对象(source)的所有可枚举属性，复制到目标对象
var target = {
    a: 1
};
var source1 = {
    b: 2
};
var source2 = {
    c: 3
};
Object.assign(target, source1, source2);
console.log(target);

//注意，如果目标对象与原对象有同名属性，或多个原对象有同名属性，则后面的属性会覆盖前面的属性
var target = {
    a: 1,
    b: 1
};
var source1 = {
    b: 2,
    c: 2
};
var source2 = {
    c: 3
};
Object.assign(target, source1, source2);
console.log(target);

//Object.assign方法属性的是浅拷贝，而不是深拷贝
//也就是说，如果原对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
var obj3 = {
    a: {
        b: 1
    }
};
var obj4 = Object.assign({}, obj3);
console.log(obj3.a.b);
console.log(obj4.a.b);

//Object.getPrototypeOf()、Object.setPrototypeOf()方法
var obj5 = Object.create({
    x: 1,
    y: 2
});
console.log(Object.getPrototypeOf(obj5));
Object.setPrototypeOf(obj5, {
    z: 3
});
console.log(Object.getPrototypeOf(obj5))

//回顾ES5中的Object.keys静态方法
//values和entries方法
var obj6 = {
    foo: 'bar',
    baz: 42
};
console.log(Object.values(obj6));
//只把属性值放在一个数组里面

var obj6 = {
    foo: 'bar',
    baz: 42
};
console.log(Object.entries(obj6));
//把属性名称和属性值都放在一个数组里面
for (var [k, v] of Object.entries(obj6)) {
    console.log(k, v);
}

var obj7 = {
    a: 1,
    b: 2
};
var obj8 = Object.create(obj7);
obj8.c = 3;
obj8.d = 4;
// Object.setPrototypeOf(obj8, obj7);
console.log(obj8.a, obj8.b, obj8.c, obj8.d);
console.log(Object.keys(obj8));
//只能访问滋生属性，不能访问原型属性