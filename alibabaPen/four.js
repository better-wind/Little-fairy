var A = [2, 3, 1, 5, 2, 4, 0, 1]

function setUnique(A = []){
    var _result = Array.from(new Set(A))
    // var _result =[...new Set(A)]
    return _result
}
console.log(setUnique(A))
// 语法最简洁 存在兼容性问题
function mapUnique(A = []){
    var _map = {},_a = A,_result = []
    _a.forEach((item)=>{
        if(!_map[item]){
            _result.push(item)
            _map[item] = true
        }
    })
    return _result
}
console.log(mapUnique(A))
// 思想是通过一个存储空间 来保存已存在的 可以演变多种方法
// 其中{} 可以替换为 [] 判断标准通过indexOf 下标 循环影响性能
// 通过{} 耗时少 占内存 此类方法里 {} 暂存算是最优
console.log(mapUnique(A))
function filterUnique(A = []){
    var _a = A,_result = []
    _result = _a.filter((item,index)=> _a.indexOf(item) == index)
    return _result
}
console.log(filterUnique(A))
// 算是indexOf 简介版本 思想还是 判断 数组中 是否已存在 下标 性能有待提升
// 类似的还可以将 indexOf 换成 其他判断下标、元素是否存在的API
// 此类方法可以通过先行排序 来优化 判断是否存在的性能 但适应于 不关心数据顺序的场景

Array.prototype.unique = function(){
    return setUnique(this)
}
console.log(A.unique())



