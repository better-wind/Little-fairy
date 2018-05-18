// console.log(Math.pow(2,31) - 1)
/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
    var x = x + '',_x = ''
    _x = x.indexOf('-') == 0 ? x.substring(1) : x.substring(0)

    _x = _x.replace(/0+$/g,'').split('').reverse().join('')

    _x = Number(x.indexOf('-') == 0 ? ('-'+_x) : _x)
    return _x <= -Math.pow(2,31) || _x >=Math.pow(2,31) - 1 ? 0 : _x
};
// 76ms
// var reverse = function(x) {
//
//     let sign = (x < 0);
//     x = Math.abs(x).toString().split('').reverse().join('');
//     x = Number.parseInt(x);
//     if (x > Math.pow(2, 31) - 1) {
//         return 0;
//     }
//     return sign ? x * (-1) : x;
// };
// 72ms
var reverse = function(x) {
    var res = 0;
    var symbol = x > 0;
    x = x > 0?x:-x
    while(x != 0){

        res = res * 10 + Math.floor(x) % 10;
        x = Math.floor(x / 10)
    }
    if(res>Math.pow(2,31)-1) return 0;
    return symbol?res:-res;
};
var num = 1534236469
console.log(reverse(num))
