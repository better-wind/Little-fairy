var A = new Promise((reslove,reject)=>{
    console.log('---')
    reslove('a')
})
A.then((rs)=>{
    console.log('a',rs)
})
var B = Promise.resolve(A)
B.then((rs)=>{
    console.log('b',rs)
})
var C = Promise.resolve('12')
C.then((rs)=>{
    console.log(rs)
})

//传入 thenable 对象，返回 Promise 对象跟随 thenable 对象的最终状态
// 例子传入promise 返回传入的promise对象 因为promise对象就是thenable对象的最终形态

//传入 value 返回一个状态已变成 resolved 的 Promise 对象
