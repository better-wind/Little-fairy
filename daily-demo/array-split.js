let _s = '12345678'
//12,345,678

//数字
console.log(Number(_s).toLocaleString())
//数组+正则
// let s = _s.split('').reverse().join('').replace(/(\d{3}(?=[^$]))/g,'$1,').split('').reverse().join('')
// let s = _s.split('').reverse().join('').replace(/(\d{3}(?![$]))/g,'$1,').split('').reverse().join('')
// let s = _s.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
let s = _s.replace(/\B(?=(\d{3})+)/g, function(){
    console.log(arguments)
})
console.log(s)

let a = 2147483645,b = 2147483646
a = a + b
b = a - b
a = a - b
//
// a ^= b;
// b ^= a;
// a ^= b;
console.log(a,b)
