var ary = [0,1,2];
ary[10] = 10;
// console.log(ary)
var arrFilter = ary.filter(function(x) { return x === undefined;});
// console.log(arrFilter)
//filter callback 只会在已经赋值的索引上被调用 那些被删除 挥着 未被赋值的不会被调用
//every
// ary.map(item =>{
//     console.log(item)
// })
// ary.forEach(item =>{
//     console.log(item)
// })

let a = [3,2,1]
console.log(a.reduce(Math.pow));
// reduce 回调 function(accumulator,currentValue,currentIndex){}

// 第一次 3，2 没有返回
// 第二次 undefined 1
// [].reduce((a,b)=>{
//     console.log(a,b)
// })
// 空数组报错
