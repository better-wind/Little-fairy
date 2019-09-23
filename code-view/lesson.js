// 1
let demo_1_a = 'demo_1_a';
let demo_1_b = demo_1_a;
demo_1_b = 'demo_1_b';
// console.log(demo_1_a);

let demo_1_c = ['demo_1_a', 'demo_1_b', 'demo_1_c'];
let demo_1_d = demo_1_c
demo_1_d[2] = 'demo_1_d';
// console.log(demo_1_c);

let demo_1_e = {
  a: 'demo_1_a',
  b: 'demo_1_b',
  e: 'demo_1_e',
};
let demo_1_f = demo_1_e
demo_1_f.e = 'demo_1_f';
// console.log(demo_1_e);

// 2
// console.log(demo_2_a);
// console.log(demo_2_b);
// demo_2_c();
let demo_2_a = 'demo_2_a';
var demo_2_b = 'demo_2_b';

function demo_2_c() {
  console.log('demo_2_c');
}

// 3

// '1' == 1
// true == 1
// '1' === 1
// true === 1

let demo_3_a = 1, demo_3_b = 1;
demo_3_c = demo_3_a++;
demo_3_d = ++demo_3_b;
// console.log(demo_3_a, demo_3_b, demo_3_c, demo_3_d)

// 4、5
function demo_4_a() {
  console.log('demo_4_a');
}
demo_4_a.demo_4_b = 'demo_4_b'
// console.log(demo_4_a.demo_4_b);
// demo_4_a();

function demo_4_c() {
  let demo_4_c = 1;
  console.log(demo_4_c++);
}

demo_4_c();
demo_4_c();

function demo_4_d() {
  let demo_4_d = 1;
  return function() {
    console.log(demo_4_d++);
  }
}
const demo_4_e = demo_4_d();
// demo_4_e();
// demo_4_e();
// demo_4_e();

