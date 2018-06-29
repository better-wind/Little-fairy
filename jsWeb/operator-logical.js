// false && (anything) 短路计算的结果为假
// true || (anything) 短路计算的结果为真
var a = true, b = true, c = false
//取消嵌套 a || (b && c)
if(a || b && c){
    console.log('a为true 或者bc为true')
}
//取消嵌套 a && (b || c)
if(a && b || c){
    console.log('a为true 并且bc有一个为true')
}

//取消原理 从左往右执行
