function funcA(fn){
    let _args = []
    return function(){
        if(arguments.length){
            _args = _args.concat(Array.from(arguments))
            return arguments.callee
        } else {
            return fn.apply(fn,_args)
        }
    }
}
function funcX(a,b,c){
    console.log(a,b,c)
}
funcX(1,2,3)
funcA(funcX)(1)(2)(3)()

function funcB(fn){
    return function(){
        var _args = Array.from(arguments),
            applyArgs = _args.slice(1)
        return fn.apply(_args[0],applyArgs)
    }
}
var Obj = {
    demo:12,
    funcX:function(a){
        console.log(this.demo,a)
    }
}
Obj.funcX('1')
funcB(Obj.funcX)(Obj,'1')
// 第一题：https://codepen.io/LouisFh/pen/Gdxboo
// 第二题 https://codepen.io/LouisFh/pen/qYoeNa
// 第三题 https://codepen.io/LouisFh/pen/erMqrp
// 第四题：https://codepen.io/LouisFh/pen/zjWVZy
// 第五题：https://codepen.io/LouisFh/pen/xjWvoL