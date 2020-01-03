/**
 * 一个强密码应满足以下所有条件：
 *
 * 由至少6个，至多20个字符组成。
 * 至少包含一个小写字母，一个大写字母，和一个数字。
 * 同一字符不能连续出现三次 (比如 "...aaa..." 是不允许的, 但是 "...aa...a..." 是可以的)。
 * 编写函数 strongPasswordChecker(s)，s 代表输入字符串，如果 s 已经符合强密码条件，则返回0；否则返回要将 s 修改为满足强密码条件的字符串所需要进行修改的最小步数。
 * 插入、删除、替换任一字符都算作一次修改。
 * @param s
 */

// 不包含 小写字母 1
// 不包含 大写字母 1
// 不包含 一个数字 1
// a
// < 6 + b
// > 20 - c

// aaa b 加
// aaa c 减
//
/**
 * @param {string} s
 * @return {number}
 */
var strongPasswordChecker = function(s) {
  let ar_count = 0; // 需要添加 或者 可以通过替换解决
  if (!/[a-z]/.test(s)) ar_count++;
  if (!/[A-Z]/.test(s)) ar_count++;
  if (!/[0-9]/.test(s)) ar_count++;
  let a_count = s.length >= 6 ? 0 : 6 - s.length; // 需要通过添加解决
  let d_count = s.length <= 20 ? 0 : s.length - 20; // 需要通过删除解决

  console.log(ar_count, a_count, d_count)


};

// strongPasswordChecker('1010101010aaaB10101010'); // 2
// strongPasswordChecker('ABABABABABABABABABAB1'); // 2
// strongPasswordChecker('abababababababababaaa'); // 3
// strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaa'); // 7
// strongPasswordChecker('1111111111'); // 3
// strongPasswordChecker(''); // 6
strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaa')
