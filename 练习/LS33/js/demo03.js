//Promise的原型方法，Promise.prototype,catch
//基本案例
var p1 = new Promise((resolve, reject) => {
    console.log(111);
    resolve(222);
    // reject(222);
    console.log(333);
});
p1.then(
    () => {
        console.log("this is success callback");
    }
).catch(
    (err) => {
        console.log(err);
    }
)
//注意：避免then中的reje回调与catch同时使用
var p2 = new Promise((resolve, reject) => {
    console.log(111);
    resolve(222);
    // reject(new Error("222"));
    console.log(333);

});
p2.then(
    () => {
        console.log(444);
    }
).then(() => {
    console.log(555);
}).catch((err) => {
    console.log('666', err);
})

//Promise的原型方法，Promise.prototype.finally
var p2 = new Promise((resolve, reject) => {
    console.log(1111);
    resolve(2222); //无论是resolve还是reject，finally都会执行
    //reject(new Error("2222"));
    console.log(3333);
});
p2.then(() => {
    console.log("4444");
}).then(() => {
    console.log("5555");
}).catch((err) => {
    console.log("6666", err);
}).finally(() => {
    console.log("finally");
})
//一旦有错误，直接跳到reject

//其他案例
//catch
var p = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'hi');
});
p.then((v) => {
        console.log("x:", v);
        return new Promise((resolve, reject) => {
            setTimeout(reject, 2000, new Error("xx"));
        })
    }).then(v => console.log(v), e => console.log("yy", e))
    //}).then(v=>console.log(v))//将上面一行改成此行试试
    //}).then(v=>console.log(v)).then(v=>console.log(v))//要是改成这样会又会怎样？
    .catch((e) => console.log("zz:", e));