function typeVal(x){
    console.log(x)
    if(x){
        console.log('------')
    }
    console.log(x == '')
    console.log(x == false)
    console.log(x == null)
    console.log(x == undefined)
    console.log({}.toString.call(x))
    console.log('======================')
}
typeVal()
typeVal(null)
typeVal('')
typeVal(0)
typeVal(false)
typeVal({})
typeVal([])

// undefined   不等于 '' false       / 等于 null       [object Undefined]
// null       不等于 '' false       / 等于 undefined  [object Null]
// ''        不等于 null undefined / 等于 false      [object String]
// 0        不等于 null undefined / 等于 false      [object Number]
// false   不等于 null undefined / 等于 0 ''       [object Number]
// []     不等于 null undefined / 等于 false ''   [object Array]
// var a = undefined || null || '' || 0 || false
// if(a) // 不成立
// var b = a || 'test'     b = test


