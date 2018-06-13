function P(rs){
    return new Promise((resolve, reject) => {
        if(rs == 1){
            resolve('resolve')
        } else if(rs == 2) {
            reject('reject')
        }
        throw new Error('声明异常 reject catch都能捕获')

    })
}
function P2(rs){
    return new Promise((resolve, reject) => {
        throw new Error('声明异常 reject catch都能捕获')

    })
}
function bc(rs){
    console.log(rs)
    throw new Error('then 异常 catch捕获')
}
// P(1)
// .then(bc,(rs)=>{
//     console.log('-reject-')
//     console.log(rs)
// })
// .catch((rs)=>{
//     console.log('-catch-')
//     console.log(rs)
// })
async function A(){
    let rs
    // try {
    //     rs = await P(2)
    //     console.log('resolve释放后执行  await报错后面不执行')
    //     console.log(rs)
    // } catch (err) {
    //     //捕获 reject 和 声明报错
    //     console.log('a'+err)
    // }
    rs = await P(1).catch((e)=>{
        // 捕获 reject 和 声明异常
        console.log('c'+e)
    })


    console.log('then')
    return rs

}

async function C(){
    var rs = await A()
    console.log(rs)
}
C()