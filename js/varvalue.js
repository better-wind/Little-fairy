var a = 1
function G(){
    var a = 2
    c = 4
    return function(){
        console.log(a++)
        console.log(b++)
        console.log(c++)
    }
}
console.log(a++)
console.log(b)
// console.log(c)
var b = 2
var g = G()
g()
console.log(a)
console.log(b)
console.log(c)

