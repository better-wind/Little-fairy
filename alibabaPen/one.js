var A = [
    {
        number:2,
        name:'男二'
    },
    {
        number:1,
        name:'男一'
    }
]
var B = [
    {
        number:2,
        name:'女二'
    },
    {
        number:1,
        name:'女一'
    }
]
function concatNumber(A = [],B = []){
    var _mapNumber = {},
        result = [],
        _a = A,
        _b = B.sort((a,b)=>a.number - b.number)
    _a.forEach((item)=>{
        _mapNumber[item.number] = true
    })
    _b.map((item)=>{
        while(_mapNumber[item.number]){
            item.number ++
        }
        _mapNumber[item.number] = true
    })
    result = _a.concat(_b).sort((a,b)=>a.number - b.number)
    return result

}
concatNumber(A,B)
// https://codepen.io/LouisFh/pen/Gdxboo
// https://codepen.io/LouisFh/pen/zjWVZy



