//Js对象属性
//2018-4-19

var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var Obj3=function(){this.z=3};
var obj3=new Obj3();
console.log(obj1,obj2,obj3);
console.log("------------------");

var objProto = {
    z:3,
    m:function(){}//能遍历到
    
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//原型链上有toString属性
console.log("------------------");

for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//是否能遍历到toString？
}
console.log("------------------");


/*JS对象属性（数据属性）的特性
 * - 属性的值（[[value]]），对应属性的值
 * - 可写特性（[[writable]]）	，确定属性是否可写性
 * - 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
 * - 可枚举特性（[[enumerable]]），属性是否可枚举
 */

//修改obj属性的特性
var obj = {
    x:1,
    y:2
};

Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);  //只会输出y=2
}
console.log("------------------");

var person={name:"liwenxuan"};
Object.defineProperty(person,"name",{
	writable:false,
	//改成true会如何 属性是否可写
    configurable:false,
    //改成true会如何   是否可以删除和其他属性是否能够配置
    enumerable:true,   //可以枚举
    value:"Liwenxuan"
});
console.log(person.name);//输出什么？
person.name = "Lucy";    
//修改name属性和writable相关
console.log(person.name);//输出什么？
delete person.name;
//删除name属性和configurable相关
console.log(person.name);//输出什么？
console.log("------------------");

var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}
console.log("------------------");

var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});
//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到


//通过属性特性描述符来查看某一对象属性的特性
console.log("------------------");

//通过Object.defineProperty来添加和改变的get /set的属性特性
//添加访问器
var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"Lucy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Lucy"
console.log("------------------");

//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//
obj2.name="jack";
console.log(obj2.name);//
console.log("------------------");

var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);
person.name = "Lucy";
console.log(person.name);
delete person.name;//delete person.name;
console.log(person.name);
console.log("------------------");

var obj={x:1};
Object.defineProperty(obj,"y",{
	value:2,writable:false
});
var xDes=Object.getOwnPropertyDescriptor(obj,"x");
var yDes=Object.getOwnPropertyDescriptor(obj,"y");
console.log(xDes);
console.log(yDes);
console.log("------------------");

var obj2=Object.create({x:1});
obj2.y=2;
console.log(Object.keys(obj2));
Object.defineProperty(obj2,"z",{value:3});
console.log(Object.getOwnPropertyDescriptor(obj2,"z"));
console.log("------------------");

var names=Object.getOwnPropertyNames(obj2);
console.log(names);
console.log("------------------");

var obj={_x:1};
/*Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});*/
Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function (val) {
            this._x = val;
        }
    }
});
//批量添加属性并设置属性特性
var book={};
//调用Object.defineProperties(对象名，要添加的属性)方法，为对象一次定义多个属性(1.数据属性)(2.访问器属性)
Object.defineProperties(book,{
     _year:{
        value:2004,
        writable:true
        //(_year)前面的下划线表示只能通过对象方法访问的属性
     },
     edition:{
        value:1,
        writable:true
     },
     year:{
        get:function(){
            return this._year;
        },
        set:function(newValue){
            if(newValue>2004){
                this._year=newValue;
                this.edition=newValue-2004;
            }
        }
     }
});
book.year=2006;
console.log(book.year);

var empty={};
var obj2=Object.create(empty,{
    x:{value:1},y:{value:2,enumerable:true}
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));
console.log(empty);//空

//属性的继承特点
var o1={};
Object.defineProperty(o1,"x",{
    value:12,
    //writable:true 
});//configurable和writable是false
o1.x=34;
console.log(o1.x);//12

var o2=Object.create(o1);
o2.x=56;
console.log(o2.x);//12   如果writable为true  则o1和o2的x属性都能够更改

var o3={_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x=34;
console.log(o3.x);//21

var o4=Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function(val){
        this._x=val;
    },
    get:function(){
        return ++this._x;
    }
});
o4.x=56;
console.log(o4.x);//57

//全局变量的属性特性是如何的呢？
//{value: 23, writable: true, enumerable: true, configurable: false}
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//等效delete window.a;




















