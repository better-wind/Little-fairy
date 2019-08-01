const s = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2, 12];
const f = [4, 5, 6, 7, 8, 9, 10,11,12,13,14];

// 俩下标 f s
let _i = 1;
let _next = f[0];
while(_i < s.length) {
  console.log(s[_i], _next);
  if (s[_i] >= _next) {
    _next = f[_i];
    console.log(_i);
  }
  _i ++;
}
