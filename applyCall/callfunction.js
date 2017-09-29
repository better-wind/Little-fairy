Array.prototype.poll = function(fun){
    let list = Object(this)
    let thisArg = arguments[1]
    let length = list.length >>> 0
    for( let i = 0;i<length;i++){
        // fun.call(thisArg,list[i],i,list)
        fun.apply(thisArg,[list[i],i,list])
    }
}
let arr = [1,2,3]
arr.poll(function(item,i,list){
    console.log(this)
    console.log(item)
    console.log(i)
    console.log(list)
})
