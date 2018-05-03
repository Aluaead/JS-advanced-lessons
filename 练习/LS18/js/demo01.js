//created by qile on 2018/5/3

//1.创建数组的不同方式
var arr1=[1,2,3,'4'];

var arr2=new Array(5);
console.log(arr2);

for(var i=0;i<arr2.length;i++) arr2[i]=i;
console.log(arr2);

//思考
var arr22=[];
for(var i=0;i<5;i++){
	document.onclick=function(){
		arr22[i]=i;
	}
}
console.log(arr22);//异步执行  [empty x 5,5]

var arr3=new Array(1,2,3,4);
console.log(arr3);

//数组直接量中的值不一定是常量，可以是任意的表达式
var base = 1024;
var table = [base,base+1,base+2,base+3];
console.log(table);

//也可包含对象直接量或其他数组直接量
var b = [[1,{y:2}],[2,{x:3}]];
console.log(b);

//回顾数据类型思考：
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);

console.log('--------------------------------------------');

//2.数组的增删改差

var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素，通过方法添加元素参见后续章节
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删：只删除值，长度不变
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);//输出什么？

var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a[1.23]=5;
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
console.log(a);

function f(){
	console.log(arguments);
}
f(1,2,3,'liwenxuan');
console.log('--------------------------------------------');

//3.稀疏数组
var a1 = [,"abc"];
console.log(a1.length);

for(var i in a1){
    console.log(i,a1[i]);//输出几个元素
}
console.log(0 in a1,1 in a1);

var a2 = new Array(3);
console.log(a2.length);
console.log(a2);

//注意：
var a3 = [,,];
console.log(a3.length);

console.log(["a","b"].length);
console.log(["a","b",].length);
console.log(["a","b",,].length);

console.log('--------------------------------------------');

//4.多维数组

var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product = table[2][4];
console.log(product);
console.log(table);

//5.数组的静态方法
var bar = ["a", "b", "c"];
Array.from(bar);// ["a", "b", "c"]
Array.from('foo');// ["f", "o", "o"]

Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

var arr1 = [1,3,4];
console.log(Array.isArray(arr1));

function foo(){
    console.log(Array.isArray(arguments));
    //console.log(arguments.pop());//这样是否能调用？数组与类数组对象
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);
console.log('--------------------------------------------');

//6.数组添加删除元素的原型方法  破坏性

var arr2=[1,3,5,7];
var shiftElement=arr2.shift();//返回删除的元素
console.log(shiftElement,arr2);

var newLength=arr2.unshift(1,2)//返回新的数组长度
console.log(newLength,arr2);

var popElement=arr2.pop();//返回pop出去的元素
console.log(popElement,arr2);

var newLength=arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);

//思考：如何同过push将两个数组合并
var arr3=["a","b"];
var arr4=["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);

//splice 从start开始，一处deleteCount个元素，并插入给定的元素
var arr5=["a","b","c","d"];
//从下标1开始，删除2个元素，并插入新的元素X
var spliceElements=arr5.splice(1,2,"x");//返回切掉的数组
//若start为辅助，则第一个为0，最后一个元素为-1，然后倒数第二个为-2
//以此类推
console.log(spliceElements,arr5);
console.log('--------------------------------------------');

//7.排序和颠倒元素顺序 破坏性
var arr1=[1,2,3];
arr1.reverse();
console.log(arr1);//3 2 1

var arr2=["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);//按照第一个字母从小刀大排序

//思考sort中的参数
var arr3=[-1,-20,7,50];
arr3.sort();
console.log(arr3);//-1 -20 50 7

//sort传递的函数对象
arr3.sort(function(a,b){return a-b;});
//对于数字类型，大于0则需要交换,相当于冒泡排序
//arr3.sort(function(a,b){return a>b;}); 
//对于布尔类型，true则交换
console.log(arr3);

//如果像让arr2按照第二个字母排序怎么写？
var arr2=["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);
console.log('--------------------------------------------');

//8.合并，切分和链接 非破坏性

//Array.prototype.concat(arr1?,arr2?,...)
var arr4=["banana","apple"];
var arr5=["pera","orange"];
var newArray=arr4.concat(arr5);
console.log(newArray,arr4,arr5);

//Array.prototype.slice(begin?,end?)
//注意：不要个splice弄混了
var arr6=[1,2,3,4,5];
var newArray=arr6.slice(2,4);
//从下标2开始截取，一直截取到下表为4的，去头留尾
console.log(newArray,arr6);

var newArray2=arr6.slice(2);
console.log(newArray2,arr6);

//Array.prototype.join(separator?)
var arr7=[3,4,5];
var joinReturn=arr7.join("--");//返回的什么类型
console.log(joinReturn);
console.log(typeof joinReturn);//string

//注意：稀疏数组调用join
console.log([3,,,,,5].join("*"));
console.log('--------------------------------------------');

//9.值的查找 非破坏行
//Array.prototype.indexOf(searchValue,startIndex?)
//从startIndex开始查找searchValue值第一次出现，返回值是第一次出现的下标
var arr8=[1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3
console.log(arr8.indexOf(5,5));//6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3
console.log('--------------------------------------------');


//10-1.数组原型方法（迭代-非破坏性-检测方法）
//thisValue可以指定callback中的this

//Array.prototype.forEach(callback,thisValue?)
//注意并不返回新的数组
var arr1=[2,5,8];
arr1.forEach(function(a){
	if(a>3){
		console.log(a,"大于3");
	}
	else{
		console.log(a,"小于3");
	}
});
console.log(arr1);

//Array.prototype.every(callback,thisValue>)
//返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2=[2,5,8];
var returnValue=arr2.every(function(a){
	//判断数组元素是否都是偶数,若有不满足的将不再进行后续判断
	console.log(a);
	//不会输出8，因为5已经不满足条件，直接结束
	return a%2===0;
});
console.log(returnValue);//布尔值

//Array.prototype.some(callback,thisValue?)
//返回一个布尔类型，若有一部分满足的将不再进行后续判断，直接返回true
var arr2=[2,5,8];
var returnValue=arr2.some(function(a){
	console.log(a);
	return a%2===0;
});
console.log(returnValue);
//只要有满足的就会结束判断，返回true，类似于，存在
console.log('--------------------------------------------');

//10-2。数组原型方法（迭代-非破坏性-转换方法）

//Array.prototype.map(callback,thisValue?)
//Map映射   返回新的数组
var arr2=[1,3,5,7,9];
var newArray=arr2.map(function(a) {
	return a*a;
});
console.log(newArray,arr2);

//Array.prototype.filter(callback,thisValue?)
//Filter过滤 返回新数组
var arr2=[1,3,5,7,9];
var newArray=arr2.filter(function(a){
	//产生新数组，新数组的元素是返回true的那些元素
	return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);
console.log('--------------------------------------------');

//10-3.数组原型方法（迭代-非破坏性-归约方法）

//Array.prototype.reduce(element,initiaValue?)//从左向又右迭代
//对reduce的解读((((x1 op x2) op x3) op x4)...xn)
function add(prev,cur){
	return prev+cur;
}
var arr3=[10,3,1];
console.log(arr3.reduce(add));

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));

//例子
function printArgs(prev,cur,i){
	console.log("prev",prev,",cur:",cur,",i:",i);
	return prev+cur;
}
var arr4=["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));

//思考案例：
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);


//思考案例：计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
console.log(countedNames);

























































