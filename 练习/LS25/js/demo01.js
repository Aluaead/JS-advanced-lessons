// window.onload=function(e){
// 	console.log(e.target);
// 	console.log(this);
// 	console.log("window.onload");
// 	var div1=document.getElementById("div1");
// 	div1.onclick=function(e){
// 		console.log(e.target,this);
//         console.log(e.hasOwnProperty("target"));
//         document.addEventListener("myclick",function (e){
//             console.log(e.type);
//         } );
// 	}
// }

// window.onload=function(e){
// 	console.log("window.onload");
// 	console.log("e:",e);
// 	console.log(e.target);
// 	var div1=document.getElementById("div1");
//     var div2 = document.getElementById("div2");
//     var eventHandler=function (e) {
// 		console.log(e.type);
//         console.log(e.target);
//         //测试一
//         console.log(e.clientX,e.clientY);
//         console.log(this, "----", e.target.id);
//
//         //测试2
//         console.log(e);
//         console.log(e.__proto__);
//         console.log(e.__proto__.__proto__);
//         console.log(e.__proto__.__proto__.__proto__);
//         console.log(e.__proto__.__proto__.__proto__.__proto__);
//
//         //测试三
// 		for (var k in e){
//             console.log(k, e[k]);
// 		}
// 		for (var k in e.__proto__){
//             console.log(k);
// 		}
//         for(var k in e.__proto__.__proto__){
//             console.log(k);
// 		}
// 		for (var k in e.__proto__.__proto__.__proto__.__proto__){
//             console.log(k);
// 		}
//
//     }
//     div1.onclick=eventHandler;
//     div2.onclick=eventHandler;
//
//     //自定义事件监听，时间分发
// 	document.addEventListener("xx",function () {
//         console.log("li");
//     });
//     document.dispatchEvent(new Event("xx"));
// }


//测试2 DOM0级事件处理
// window.onload=function (ev) {
// 	var div1=document.getElementById("div1");
//     var div2 = document.getElementById("div2");
//     var  eventHanlder=function (e) {
//         console.log(e.clientX, e.clientY);
//     }
//     div1.onclick=eventHanlder;
//     div1.onclick-function () {
//         console.log("xx");
//     };//思考：是覆盖还是两个语句都输出
// 	div2.onclick=eventHanlder;
// 	div2.onclick=null;
// }

//测试3 DOM2级时间处理
window.onload=function (ev) {
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var eventHanlder = function(e) {
		console.log(e.clientX, e.clientY);
	}
}