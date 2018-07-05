// PEDDING pedding 等待
// FULFILLED fulfilled 满足
// REJECTED rejected 拒绝

// function promiseAjax(url){
//     return new Promise((resolve,reject)=>{
//         $.ajax({
//             url:url,
//             success:  function(rs){
//                 resolve(rs)
//             },
//             error:function(rs){
//                 reject(rs)
//             }
//         })
//     })
// }
// promiseAjax('/a')
//     .then((rs)=>{
//        return promiseAjax(rs)
//     })
//     .then((rs)=>{
//
//     })
// function A(resolve,reject){
//     $.ajax({
//         url:'/a',
//         success:   function(rs){
//             resolve(rs)
//         }
//     })
//     reject('djj')
// }
// var promise = new Promise(A)
// promise.then(function(rs){
//    $.ajax({
//        url:'/'+rs,
//        success:function (rs) {
//
//        }
//    })
// },function(rs){
//     console.log(rs)
// });
//
// $.ajax({
//     url:'/a',
//     success:function (rs) {
//         $.ajax({
//             url:'/'+rs,
//             success:function () {
//
//             }
//         })
//     }
// })
var promise_B = new Promise(function(resolve,reject){
    // resolve('123')
    reject('error')
})
async function B(){
    var s = ''
    // promise_B.then((rs)=>{
    //     s = rs
    // })
    try{
        s = await promise_B
        console.log(s)
    } catch (e) {
        console.log(e)
    }

}
// B()

var errorPromise = new Promise((resolve, reject)=>{

    resolve('222')


})
errorPromise.then(()=>{
  throw '333'
},(rs)=>{
    console.log(1,rs)
}).catch((rs)=>{
    console.log(2,rs)
})