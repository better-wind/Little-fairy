var a = [1,6,5,3,2,9,3]
a.sort(function(a,b){
    // if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
    //     return -1;
    // }
    // if (a > b ) {
    //     return 1;
    // }
    // // a must be equal to b
    // return 0;
    return a - b
})
console.log(a)
var b = [
    {
        k:3,
        name:'3red'
    },
    {
        k:1,
        name:'1'
    },
    {
        k:3,
        name:'3green'
    }
]
a.sort(function(a,b){

})