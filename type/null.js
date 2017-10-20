function typeVal(x){
    console.log(x,typeof x)
    // return false
    if(x){
        console.log('------')
    }
    console.log("== '' ",x == '')
    console.log('== false',x == false)
    console.log('== null',x == null)
    console.log('== 0',x == 0)
    console.log('== []',x== [])
    console.log('== undefined',x == undefined)
    console.log({}.toString.call(x))
    console.log('======================')
}
// typeVal()
// typeVal(null)
// typeVal('')
// typeVal(0)
// typeVal(false)
// typeVal({})
// typeVal([])

// undefined   不等于 '' false       / 等于 null       [object Undefined]
// null       不等于 '' false       / 等于 undefined  [object Null]
// ''        不等于 null undefined / 等于 false      [object String]
// 0        不等于 null undefined / 等于 false      [object Number]
// false   不等于 null undefined / 等于 0 ''       [object Number]
// []     不等于 null undefined / 等于 false ''   [object Array]
// var a = undefined || null || '' || 0 || false
// if(a) // 不成立
// var b = a || 'test'     b = test

class CreateUser {
    constructor(name) {
        this.name = name;
        this.getName();
    }
    getName() {
        return this.name;
    }
}
// 代理实现单例模式
var ProxyMode = (function() {
    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new CreateUser(name);
        }
        return instance;
    }
})();
// 测试单体模式的实例
var a = new ProxyMode("aaa");
var b = new ProxyMode("bbb");
// 因为单体模式是只实例化一次，所以下面的实例是相等的
console.log(a.name)
console.log(b.name)
console.log(a === b);