/*

*/
// Promise案例一
var myFirstPromise = new Promise(function (resolve, reject) {
  //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
  //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
  console.log("step1");
  setTimeout(function () {
    resolve("成功!"); // 思考：如果改为 reject("失败");
  }, 2500);
  //简写的方式  setTimeout(resolve,2500,"成功!");//等效于上面3行
  console.log("step2");
});

myFirstPromise.then(function (successMessage) {
  //successMessage的值是上面调用resolve(...)方法传入的值.
  console.log("Yes! " + successMessage);
}, function (errorMessage) {
  console.log("No! " + errorMessage);
});

new Promise((a, b) => {
  setTimeout(a, 1000, "x"); //setTimeout(b,1000,"x");
}).then(
  (v) => {
    console.log("v1:", v)
  },
  (e) => {
    console.log("e1:", e)
  }
).then(
  (v) => {
    console.log("v2:", v)
  },
  (e) => {
    console.log("e2:", e)
  }
)