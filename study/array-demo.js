/*
* 数组新建
* 数组填充 快速生成数组
* */
{
    // var arr = [23,23,23]
    var arr = new Array(20).fill(23)
    console.log('新建数组 : ',arr)
}
/*
* 查找组数中元素
* find findIndex 参数是方法 返回第一个匹配的元素/下标 不存在 返回 undefined/-1
* indexOf lastIndexOf 参数是元素  返回找到的第一个/最后一个下标
* includes 参数是元素 返回true or false
* */
{
    var arr = [2,2,3,3]
    console.log('寻找数组',arr)
    console.log('find 2 , findIndex 2 :',arr.find((item)=>item == 2),arr.findIndex((item)=>item == 2))
    console.log('indexOf 2 , lastIndexOf 3 :',arr.indexOf(2), arr.lastIndexOf(3))
    console.log('includes 2 : ',arr.includes(2))
}
/*
* 数组中元素修改
* push 尾部插入 pop 尾部推出
* unshift 头部插入 shift 头部推出
* slice 拷贝数组一部分 到新数组 不修改元素组
* splice 修改原数组 返回删除内容
* */
{
    var arr = new Array(10).fill(23)
    arr.push(2,3)
    console.log('尾部插入2,3：'+arr)
    arr.pop()
    console.log('推出尾部最后一个元素：'+arr)
    arr.unshift(3,2)
    console.log('头部插入3,2: '+arr)
    arr.shift()
    console.log('头部推出第一个元素：'+arr)
    var arr2 = arr.slice()
    console.log('slice 没有参数拷贝全部: ',arr2)
    var arr3 = arr.slice(10)
    console.log('slice 一个参数拷贝[arg1,arr.length): ',arr3)
    var arr4 = arr.slice(10,11)
    console.log('slice 两个参数拷贝[arg1,arg2): ',arr4)
    console.log('splice 原数组',arr)
    console.log('删除的数组:,',arr.splice(0,1,2323))
    console.log('splice  删除从arg1下标开始的 arg2 个元素 添加 arg3,arg4...到arg1下标',arr)
    console.log('删除的数组:,',arr.splice(13,1,2323,2323))
    console.log('splice arg1 如果超过arr.length 不删除 直接添加',arr)
    console.log('删除的数组:,',arr.splice(-2,3,2222,2222))
    console.log('splice arg1小于0 相当于 arr.length + arg1  arg2 删除小于arr长度的部分 直接添加',arr)
    /*arg1 表示 第一个参数 以此类推 */
}
/*
 * 为什么 apply call 调用 push
 * push接受的参数是 arg1,arg2,arg3,...
 * apply call 最终参数都会转换成 原 方法的参数 但是就收的参数不同 apply 接受 数组 call 接受 列表
 * */
{
    var arr = new Array(10).fill(2)
    var arr2 = new Array(10).fill(3)
    Array.prototype.push(arr,arr2)
    console.log(arr)
}