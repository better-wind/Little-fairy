var a = [1,2,3]
function map_a(item,index,arr){
    console.log(item,index)
}
a.map(function(item,index,arr){
    console.log(item,index)
})
a.map(map_a)

function A(){
    var i = 1
    console.log(i)
    return i

}
// var a = A()
// var b = new A()
// npm config set registry https://registry.npm.taobao.org
// npm install vue-cli -g
// vue-cli