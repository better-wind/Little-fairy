// var curry = require('lodash').curry;
//
// var map = curry((f, ary) => ary.map(f));


// f(a, b);
// f(a)(b)(c);

const curry = (fn, ...args) => {
  if (args.length >= fn.length) return fn(...args);

  return (...args2) => {
    return curry(fn, ...args, ...args2)
  }
}

const f = (x, y, z) => {
  return x + y + z;
}
const f1 = curry(f);

// console.log(f1(1, 3))
// console.log(f1(1)(3))
console.log(f1(1,2)(3))
